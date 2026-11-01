"""Find bottle photos for perfumes that aren't on Fragrantica.

Entries in matches.json can name where to look:
  "src":  a product or review page, or a list of them to try in order; its og:image
          (the photo shown when the link is shared) is used.
  "shop": a Shopify store; its catalog is searched for a product with the perfume's name.
The photo's address is saved as "i". Entries that already have "i" are skipped,
so to redo one, delete its "i".
"""
import http.cookiejar
import json
import re
import sys
import unicodedata
import urllib.request
from html.parser import HTMLParser

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"


def norm(s):
    s = unicodedata.normalize("NFD", str(s or ""))
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


# Some shops answer the first visit with a redirect that sets a cookie, so keep cookies.
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with opener.open(req, timeout=30) as r:
        return r.headers.get("Content-Type", ""), r.read()


def absolute(url, base):
    if url.startswith("//"):
        return "https:" + url
    if url.startswith("/"):
        return re.match(r"https?://[^/]+", base).group(0) + url
    return re.sub(r"^http:", "https:", url)


class MetaImage(HTMLParser):
    def __init__(self):
        super().__init__()
        self.found = {}

    def handle_starttag(self, tag, attrs):
        if tag != "meta":
            return
        a = dict(attrs)
        key = (a.get("property") or a.get("name") or "").lower()
        if key in ("og:image", "og:image:secure_url", "twitter:image") and a.get("content"):
            self.found.setdefault(key, a["content"])


def from_page(url):
    _, body = get(url)
    html = body.decode("utf-8", "replace")
    p = MetaImage()
    p.feed(html)
    for key in ("og:image:secure_url", "og:image", "twitter:image"):
        if key in p.found:
            img = absolute(p.found[key], url)
            if not same_perfume(url, img):
                raise ValueError(f"page answered with another perfume's photo: {img}")
            return plain_bottle(img, html)
    return None


def same_perfume(url, img):
    """After several quick visits Parfumo can answer with a different perfume's page.
    Its photo names carry the perfume's name, so check they share most of the page's words."""
    if "parfumo.com" not in url:
        return True
    common = {"eau", "de", "parfum", "toilette", "cologne", "extrait", "edp", "edt"}
    want = set(norm(url.rstrip("/").rsplit("/", 1)[-1]).split()) - common
    have = set(norm(img.split("?")[0].rsplit("/", 1)[-1]).split()) - common
    return not want or len(want & have) * 2 >= len(want)


def plain_bottle(img, html):
    """Parfumo's share image is a wide banner with its logo, which leaves the bottle
    small on the card. Use the plain bottle photo from the same page when there is one."""
    m = re.search(r"media\.parfumo\.com/perfume_social/([0-9a-f]{2})/([0-9a-f]{6})", img)
    if not m:
        return img
    # The page shows the same photo, named by the same id, under /perfumes/.
    shown = re.findall(rf"https://media\.parfumo\.com/perfumes/{m[1]}/{m[2]}[^\"'\s)]*", html)
    guess = img.split("?")[0].replace("/perfume_social/", "/perfumes/")
    for cand in sorted(set(shown), key=lambda c: ("1200" in c, len(c)), reverse=True) + [guess]:
        if is_image(cand):
            return cand
    return img


def from_shop(shop, name):
    want = norm(name)
    for page in range(1, 6):
        _, body = get(f"{shop.rstrip('/')}/products.json?limit=250&page={page}")
        products = json.loads(body).get("products", [])
        if not products:
            break
        # Prefer an exact title, then a title that contains the name, then a
        # title of two or more words that the name contains ("Lake Tahoe" for "Lake Tahoe Air").
        tests = (
            lambda t: t == want,
            lambda t: re.search(rf"\b{re.escape(want)}\b", t),
            lambda t: len(t.split()) >= 2 and re.search(rf"\b{re.escape(t)}\b", want),
        )
        for test in tests:
            for p in products:
                if p.get("images") and test(norm(p.get("title"))):
                    return absolute(p["images"][0]["src"], shop)
    return None


def is_image(url):
    try:
        ctype, body = get(url)
        return ctype.startswith("image/") and len(body) > 2000
    except Exception:
        return False


def main(path="matches.json"):
    matches = json.load(open(path, encoding="utf-8"))
    found = missed = 0
    for key, e in sorted(matches.items()):
        if "i" in e or not ("src" in e or "shop" in e):
            continue
        name = e.get("n") or key.split("|", 1)[1]
        img = None
        sources = e["src"] if isinstance(e.get("src"), list) else [e["src"]] if "src" in e else []
        for src in sources:
            try:
                img = from_page(src)
            except Exception as err:
                print(f"  {key}: {src}: {err}")
            if img and is_image(img):
                break
            img = None
        if "shop" in e and not img:
            try:
                img = from_shop(e["shop"], name)
            except Exception as err:
                print(f"  {key}: {err}")
        if img and is_image(img):
            e["i"] = img
            found += 1
            print(f"found  {key}: {img}")
        else:
            missed += 1
            print(f"missed {key}")
    with open(path, "w", encoding="utf-8") as f:
        f.write(json.dumps(matches, indent=0, ensure_ascii=False, sort_keys=True))
    print(f"{found} found, {missed} missed")


if __name__ == "__main__":
    main(*sys.argv[1:])
