"""Find bottle photos for perfumes that aren't on Fragrantica.

Entries in matches.json can name where to look:
  "src":  a product or review page; its og:image (the photo shown when the link is shared) is used.
  "shop": a Shopify store; its catalog is searched for a product with the perfume's name.
The photo's address is saved as "i". Entries that already have "i" are skipped,
so to redo one, delete its "i".
"""
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


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=30) as r:
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
    p = MetaImage()
    p.feed(body.decode("utf-8", "replace"))
    for key in ("og:image:secure_url", "og:image", "twitter:image"):
        if key in p.found:
            return absolute(p.found[key], url)
    return None


def from_shop(shop, name):
    want = norm(name)
    for page in range(1, 6):
        _, body = get(f"{shop.rstrip('/')}/products.json?limit=250&page={page}")
        products = json.loads(body).get("products", [])
        if not products:
            break
        # Prefer an exact title, then a title that contains the name.
        for exact in (True, False):
            for p in products:
                title = norm(p.get("title"))
                if (title == want if exact else re.search(rf"\b{re.escape(want)}\b", title)) and p.get("images"):
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
        try:
            img = from_page(e["src"]) if "src" in e else from_shop(e["shop"], name)
        except Exception as err:
            img = None
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
