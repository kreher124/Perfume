# Name corrections and photo status

This file lists how the app cleans up names from your sheet. Your Google Sheet is never edited. Per-perfume corrections and Fragrantica links live in `matches.json`. House-name spelling fixes live in the `HOUSE_FIXES` list at the top of `app.js`.

- Perfumes in the sheet: 775
- Matched to Fragrantica (bottle photo): 262
- Looked up, not on Fragrantica: 20
- Not looked up yet: 493

## Guesses worth checking

If one of these is the wrong version, tell Claude which one you meant.

- Chanel | Bleu: guessed the Eau de Parfum version
- Creed | Vetiver: could also be the older 1948 Vetiver
- Czech & Speake | No. 88: could be the 1980 cologne instead of the Eau de Parfum
- Dior | Du Cap: guessed that "Du Cap" means Eden-Roc (named for the Hôtel du Cap)
- Dolce and Gabbana | The One: could be the women's The One instead
- DSH | Something Capri: guessed; only DSH scent with Capri in the name

## Looked up, but not on Fragrantica

These show a letter tile. To give one a photo, add a column headed **Fragrantica** to your sheet and paste the perfume's page link into it.

- American Perfumer: Rushlight
- Andrea Maack: Zing
- D&Scent Studios: Verdant Halo
- DSH Perfumes: Au Crépuscule de Lavande
- DSH Perfumes: Balls...Said The Queen
- DSH Perfumes: Eclipse
- DSH Perfumes: Highland Idyll
- DSH Perfumes: In the Jungle Groove
- DSH Perfumes: L'Or(ris)
- DSH Perfumes: La Casa Azul
- DSH Perfumes: Le Jade
- DSH Perfumes: Partners In Crime
- DSH Perfumes: Potager de Bergamot
- DSH Perfumes: Soho Cuir
- DSH Perfumes: Vachi
- DSH Perfumes: Warrior Queen
- Fischersund: The Whole House
- Jenny Glow: French Lime Leaves
- Tommy Bahama: Set Sail Martinique
- Vilhelm Parfumerie: Morning Chess

## Rows with a house but no perfume name

- Dior
- Floraiku
- Marc-Antoine Barrois

## Every name change

| In your sheet | Shown in the app |
|---|---|
| Acqua di Parma · Oud and Spice | Acqua di Parma · Oud & Spice |
| Aedes de Venustas · Cafe Tabac | Aedes de Venustas · Café Tabac |
| Aedes de Venustas · Sueno Latino | Aedes de Venustas · Sueño Latino |
| Agar · Cereale | Agar Olfactory · Cereale |
| Agar · Cero | Agar Olfactory · Cero |
| Agar · Damp | Agar Olfactory · Damp |
| Agar · Matsu Musk | Agar Olfactory · Matsu Musk |
| Andy Tauer · Alps | Tauer Perfumes · L'Air des Alpes Suisses |
| Andy Tauer · L:air Du Desert | Tauer Perfumes · L'Air du Désert Marocain |
| Andy Tauer · Sundowner | Tauer Perfumes · Sundowner |
| Aqua di Parma · Buongiorno | Acqua di Parma · Buongiorno |
| Aqua di Parma · Sandolo | Acqua di Parma · Sandalo |
| Argos · Palas Athena | Argos · Pallas Athene |
| Armani Privē · Blue Lazuli | Armani Privé · Bleu Lazuli |
| Armani Privē · Bois D'ences | Armani Privé · Bois d'Encens |
| Armani Privē · Cuir Nu | Armani Privé · Cuir Nu |
| Armani Privē · Jasmin Kusamono | Armani Privé · Jasmin Kusamono |
| Armani Privē · Musc Shamal | Armani Privé · Musc Shamal |
| Armani Privē · Orange Venise | Armani Privé · Orangerie Venise |
| Armani Privē · Pivoine Suzhou | Armani Privé · Pivoine Suzhou |
| Armani Privē · Rose Alexandrie | Armani Privé · Rose Alexandrie |
| Armani Privē · Rose D'Arabie | Armani Privé · Rose d'Arabie |
| Armani Privē · Rose Milano | Armani Privé · Rose Milano |
| Armani Privē · Rouge Malachite | Armani Privé · Rouge Malachite |
| Armani Privē · Santal Dan Sha | Armani Privé · Santal Dan Sha |
| Armani Privē · Thè Yulong | Armani Privé · Thé Yulong |
| Armani Privē · Vert Malachite | Armani Privé · Vert Malachite |
| Atelier des Fleurs · Magnolia | Chloé Atelier des Fleurs · Magnolia Alba |
| Beaufort · Fathom V | BeauFort London · Fathom V |
| Billie Eilish · No. 2 | Billie Eilish · Eilish No. 2 |
| BOHOBOCO · Mango Yuzu Gasoline | Bohoboco · Mango Yuzu Gasoline |
| Boka · Ziveli | Boka · Živeli |
| Bon Parfumer · 801.0 | Bon Parfumeur · 801 |
| Borntostandout · Dirty rice | BORNTOSTANDOUT · Dirty Rice |
| Borntostandout · Naked Laundry | BORNTOSTANDOUT · Naked Laundry |
| Borntostandout · Warm Air | BORNTOSTANDOUT · Warm Air |
| BORNTOSTANDOUT® · Nanatopia | BORNTOSTANDOUT · Nanatopia |
| bvlgari · blossom delight | Bvlgari · blossom delight |
| Bvlgari (Le Gemme) · Tygar | Bvlgari · Le Gemme Tygar |
| By Kilian · Imperial Tea | Kilian · Imperial Tea |
| By Kilian · Kolone Shield of Protection | Kilian · Kologne, Shield of Protection |
| By Kilian · L'Heur Vert | Kilian · L'Heure Verte |
| By Killian · Rolling in the Love | Kilian · Rolling in Love |
| By Killian · Roses on Ice | Kilian · Roses on Ice |
| Byredo · Le Tulipe | Byredo · La Tulipe |
| Caron · Pour Un Homme - Le Matin | Caron · Pour Un Homme de Caron Le Matin |
| Caron · Pour Un Homme - Le Soir | Caron · Pour Un Homme de Caron Le Soir |
| Caron · Tabac Blonde EDP | Caron · Tabac Blond |
| Chanel · 1957 Parfum | Chanel · 1957 |
| Chanel · Bleu | Chanel · Bleu de Chanel |
| Chanel · Paris Paris | Chanel · Paris – Paris |
| Chanel · Rue de 31 Cambon | Chanel · 31 Rue Cambon |
| Chloe · Chloe EDP | Chloé · Chloé Eau de Parfum |
| Chloe · Rose and Tangerine | Chloé · Rose Tangerine |
| Chloe · Sous Les Pins | Chloé · Sous les Pins |
| Clue · Dandelion Butter | Clue Perfumery · Dandelion Butter |
| Clue · Morel Map | Clue Perfumery · Morel Map |
| Clue · Warm Bulb | Clue Perfumery · Warm Bulb |
| Clue · With the Candlestick | Clue Perfumery · With the Candlestick |
| Comme des Garcons · Carnation | Comme des Gar\u00e7ons · Carnation |
| Comme des Garcons · Lily | Comme des Garçons · Series 1 Leaves: Lily |
| Comme des Garcons · Serpentine | Comme des Garçons · Serpentine |
| Comme des Garçon · Monocle Scent 3: Sugi | Comme des Garçons · Monocle Scent Three: Sugi |
| Commes des Garcons · Cologne: Anbar | Comme des Garçons · Cologne: Anbar |
| Commes des Garcons · Dia x Meg Webster | Comme des Garçons · Dia x Meg Webster |
| Commes des Garcons · Dot | Comme des Garçons · Dot |
| Commes des Garcons · Ganja | Comme des Garçons · Ganja |
| Commes des Garcons · Incense: Avignon | Comme des Garçons · Incense: Avignon |
| Commes des Garcons · Incense: Jaisalmer | Comme des Garçons · Incense: Jaisalmer |
| Commes des Garcons · Incense: Kyoto | Comme des Garçons · Incense: Kyoto |
| Commes des Garcons · Incense: Ouarzazate | Comme des Garçons · Incense: Ouarzazate |
| Commes des Garcons · Incense: Zagorsk | Comme des Garçons · Incense: Zagorsk |
| Commes des Garcons · Marseille | Comme des Garçons · Marseille |
| Commes des Garcons · Odeur 10 | Comme des Garçons · Odeur 10 |
| Commes des Garcons · Vaquera Classique Perdu | Comme des Garçons · Vaquera: Classique Perdu |
| Commes des Garcons · x Artek: Standard | Comme des Garçons · Artek: Standard |
| Commes des Garcons · x Monocle: Yoyogi | Comme des Garçons · Monocle Scent Four: Yoyogi |
| Commes des Garçon · Amazingreen | Comme des Garçons · Amazingreen |
| Commes des Garçons · Blackpepper | Comme des Garçons · Blackpepper |
| Commes des Garçons · Celluloid Galbanum | Comme des Garçons · Celluloid Galbanum |
| Commes des Garçons · Chlorophyll Gardenia | Comme des Garçons · Chlorophyll Gardenia |
| Commes des Garçons · Cologne: Citrico | Comme des Garçons · Cologne: Citrico |
| Commes des Garçons · Cologne: Vettiveru 2 | Comme des Garçons · Cologne: Vettiveru |
| Commes des Garçons · Grace | Comme des Garçons · Grace |
| Commes des Garçons · Monocle Scent 1: Hinoki | Comme des Garçons · Monocle Scent One: Hinoki |
| Commes des Garçons · Monocle Scent 2: Laurel | Comme des Garçons · Monocle Scent Two: Laurel |
| Commes des Garçons · Monocle Scent 4: Yoyogi | Comme des Garçons · Monocle Scent Four: Yoyogi |
| Commes des Garçons · Monocle Scent 5: Syros | Comme des Garçons · Monocle Scent Five: Syros |
| Commes des Garçons · Odeur 53 | Comme des Garçons · Odeur 53 |
| Commes des Garçons · Radish Vetiver | Comme des Garçons · Radish Vetiver |
| Commes des Garçons · Wonderoud | Comme des Garçons · Wonderoud |
| Coty · Stetson Cologne | Coty · Stetson |
| Creed · Vetiver | Creed · Original Vetiver |
| d'Annam · In the garden | d'Annam · In the Garden |
| D'Orsay · Sweet Disruption WT | D'Orsay · Sweet Disruption W.T. |
| Dior · Addict EDT | Dior · Dior Addict Eau de Toilette |
| Dior · Du Cap | Dior · Eden-Roc |
| Dior · Jules EDT | Dior · Jules |
| Dior · The Cachemire | Dior · Thé Cachemire |
| Diptyque · Lilyphea | Diptyque · Lilyphéa |
| Dirty Rice · Borntostandout | BORNTOSTANDOUT · Dirty Rice |
| Dolce and Gabbana · The One | Dolce&Gabbana · The One for Men |
| DS&Durga · Atlantic Rose | DS&Durga · Rose Atlantic |
| DS&Durga · Cypress Ruin | DS&Durga · Roman Ruin Cypress |
| DS&Durga · Jasmin Yucatan | DS&Durga · Jazmin Yucatan |
| DSH · Aoud Blanc | DSH Perfumes · Oud in Chiaroscuro: Aoud Blanc |
| DSH · Au Crépuscule de Lavande | DSH Perfumes · Au Crépuscule de Lavande |
| DSH · Balls...Said The Queen | DSH Perfumes · Balls...Said The Queen |
| DSH · Become the Shaman | DSH Perfumes · Become the Shaman |
| DSH · Cuir et Champigon | DSH Perfumes · Cuir et Champignon |
| DSH · Damasq | DSH Perfumes · Damasq |
| DSH · Dirty Rose | DSH Perfumes · Dirty Rose |
| DSH · Eclipse | DSH Perfumes · Eclipse |
| DSH · Electric Summer | DSH Perfumes · Electric Summer |
| DSH · Giverny In Bloom | DSH Perfumes · Giverny in Bloom |
| DSH · Green Rhubarb and Sugarcane | DSH Perfumes · Green Rhubarb and Cane Sugar |
| DSH · Highland Idyll | DSH Perfumes · Highland Idyll |
| DSH · In the Jungle Groove | DSH Perfumes · In the Jungle Groove |
| DSH · Joshua Tree | DSH Perfumes · Joshua Tree |
| DSH · Kale | DSH Perfumes · Kale |
| DSH · L'Or(ris) | DSH Perfumes · L'Or(ris) |
| DSH · La Casa Azul | DSH Perfumes · La Casa Azul |
| DSH · Le Jade | DSH Perfumes · Le Jade |
| DSH · ManRoot | DSH Perfumes · ManRoot |
| DSH · Matsu | DSH Perfumes · Matsu |
| DSH · Partners In Crime | DSH Perfumes · Partners In Crime |
| DSH · Potager de Bergamot | DSH Perfumes · Potager de Bergamot |
| DSH · Raisin d'Etre | DSH Perfumes · Raisin d'Etre |
| DSH · Re-Assess | DSH Perfumes · Re-Assess |
| DSH · Rubis Rose | DSH Perfumes · Rubis Rose |
| DSH · Soho Cuir | DSH Perfumes · Soho Cuir |
| DSH · Something Capri | DSH Perfumes · Il Marinaio da Capri |
| DSH · Sweet Dreams | DSH Perfumes · Sweet Dreams |
| DSH · Tournesol Noir | DSH Perfumes · Tournesol Noir |
| DSH · Vachi | DSH Perfumes · Vachi |
| DSH · Viridian | DSH Perfumes · Viridian |
| DSH · Warrior Queen | DSH Perfumes · Warrior Queen |
| DSH · Wasabi Shiso | DSH Perfumes · Wasabi Shiso |
| Ecscentric Molecules · Molecule 02 | Escentric Molecules · Molecule 02 |
| Ecscentric Molecules · Molecule One | Escentric Molecules · Molecule 01 |
| EDLO · The Ghost in the Shell | Etat Libre d'Orange · The Ghost in the Shell |
| EDLO · Tilda Swinton Like This | Etat Libre d'Orange · Tilda Swinton Like This |
| ELDO · Clean Suede / Tom of Finland | Etat Libre d'Orange · Clean Suede (Tom of Finland) |
| ELDO · Eau de Protection | Etat Libre d'Orange · Eau de Protection |
| ELDO · Fat Electrician | Etat Libre d'Orange · Fat Electrician |
| ELDO · Hermann à mes Côtés | Etat Libre d'Orange · Hermann à mes Côtés me Paraissait une Ombre |
| ELDO · Jasmin et Cigarette | Etat Libre d'Orange · Jasmin et Cigarette |
| ELDO · Nostos | Etat Libre d'Orange · Nostos |
| ELDO · Sous le Pont Mirabeau | Etat Libre d'Orange · Sous le Pont Mirabeau |
| ELDO · Spice Must Flow | Etat Libre d'Orange · Spice Must Flow |
| ELDO · You or Someone Like You | Etat Libre d'Orange · You or Someone Like You |
| Eris · Green Spell | Eris Parfums · Green Spell |
| Eris Parfums · Belle du Jour | Eris Parfums · Belle de Jour |
| Fenty · Fenty | Fenty · Fenty Eau de Parfum |
| Fischersund · The whole house | Fischersund · The Whole House |
| Floraiku · Between 2 Trees | Floraïku · Between Two Trees |
| Frederic Malle · Bigarade Concentree | Fr\u00e9d\u00e9ric Malle · Bigarade Concentree |
| Frederic Malle · Carnal Flower | Fr\u00e9d\u00e9ric Malle · Carnal Flower |
| Frederic Malle · Cuir Rose | Fr\u00e9d\u00e9ric Malle · Cuir Rose |
| Frederic Malle · En Passant | Fr\u00e9d\u00e9ric Malle · En Passant |
| Frederic Malle · French Lover | Fr\u00e9d\u00e9ric Malle · French Lover |
| Frederic Malle · Geranium Pour Monsieur | Fr\u00e9d\u00e9ric Malle · Geranium Pour Monsieur |
| Frederic Malle · Heaven Can Wait | Fr\u00e9d\u00e9ric Malle · Heaven Can Wait |
| Frederic Malle · L'eau d'Hiver | Fr\u00e9d\u00e9ric Malle · L'eau d'Hiver |
| Frederic Malle · Lipstick Rose | Frédéric Malle · Lipstick Rose |
| Frederic Malle · Musc Ravageur | Fr\u00e9d\u00e9ric Malle · Musc Ravageur |
| Frederic Malle · Portrait of a Lady | Fr\u00e9d\u00e9ric Malle · Portrait of a Lady |
| Frederic Malle · Rose Tonnare (or Une Rose) | Frédéric Malle · Rose Tonnerre (Une Rose) |
| Frederic Malle · Synthetic Jungle | Fr\u00e9d\u00e9ric Malle · Synthetic Jungle |
| Frederic Malle · Vetiver Extrordinaire | Fr\u00e9d\u00e9ric Malle · Vetiver Extrordinaire |
| Fzotic · Au Dela Narcisse | FZOTIC · Au Dela Narcisse |
| Fzotic · Lampblack | FZOTIC · Lampblack |
| Fzotic · Monserrat | FZOTIC · Monserrat |
| Hermes · Concentret de Pamplemousse Rose | Herm\u00e8s · Concentret de Pamplemousse Rose |
| Hermes · H24 Herbes Vives | Herm\u00e8s · H24 Herbes Vives |
| Hermes · Hermessence Osmanthe Yunnan | Herm\u00e8s · Hermessence Osmanthe Yunnan |
| Hermes · Hermessence Vetiver Tonka - 2ml | Herm\u00e8s · Hermessence Vetiver Tonka - 2ml |
| Hermes · Le Jardin de Monsieur Li | Herm\u00e8s · Le Jardin de Monsieur Li |
| Hermes · Poivre Samarcande | Herm\u00e8s · Poivre Samarcande |
| Hermes · Rhubarb d'escarlet | Herm\u00e8s · Rhubarb d'escarlet |
| Hermes · Rose Ikebana | Herm\u00e8s · Rose Ikebana |
| Hermes · Terre d'Hermes | Herm\u00e8s · Terre d'Hermes |
| Hermes · Terre d'Hermes Eau Givree | Hermès · Terre d'Hermès Eau Givrée |
| Hermes · Terre d'Hermes Eau Tres Fraiche | Herm\u00e8s · Terre d'Hermes Eau Tres Fraiche |
| Hermes · Un Jardin Sur Le Nil | Herm\u00e8s · Un Jardin Sur Le Nil |
| Hermes · Un Jardin Sur Le Toit | Herm\u00e8s · Un Jardin Sur Le Toit |
| Hermes · Un Jardin à Cythère | Herm\u00e8s · Un Jardin à Cythère |
| Histories des Parfums · Hemingway 1899 | Histoires de Parfums · Hemingway 1899 |
| Killian · Angel's Share | Kilian · Angel's Share |
| Killian · Love Don't Be Shy | Kilian · Love Don't Be Shy |
| L'Artisan Perfumier · Cedrat Ceruse | L'Artisan Parfumeur · Cedrat Ceruse |
| L'occetaine · Mélilot EDP | L'Occitane · Mélilot EDP |
| Lancome · Lancome Cuir | Lanc\u00f4me · Lancome Cuir |
| Lancôme · Le Parfum | Lanc\u00f4me · Le Parfum |
| Lancôme · Poeme | Lanc\u00f4me · Poeme |
| Lancôme · Rose or Die | Lanc\u00f4me · Rose or Die |
| Les Liquides Imaginaires · Blanche Bête | Liquides Imaginaires · Blanche Bête |
| Maison Francis K · Gentle Fluidity Silver | Maison Francis Kurkdjian · Gentle Fluidity Silver |
| Margiela · After the rain stops | Maison Margiela · After the rain stops |
| Margiela · At the Barber's | Maison Margiela · At the Barber's |
| Margiela · At the Jazz Club | Maison Margiela · At the Jazz Club |
| Margiela · Flower Market | Maison Margiela · Flower Market |
| Margiela · From the garden | Maison Margiela · From the garden |
| Margiela · Lazy Sunday Morning | Maison Margiela · Lazy Sunday Morning |
| Margiela · Promenade in the Garden | Maison Margiela · Promenade in the Garden |
| Margiela · Sailing day | Maison Margiela · Sailing day |
| Margiela · Whispers at the Library | Maison Margiela · Whispers at the Library |
| Matiere Premier · Radical rose | Mati\u00e8re Premi\u00e8re · Radical rose |
| MFK · Grand Soir | Maison Francis Kurkdjian · Grand Soir |
| Molecule · Black tea | Escentric Molecules · Black tea |
| Molecule · Molecile 01 + Champaca | Escentric Molecules · Molecile 01 + Champaca |
| Morning Chess · Vilhelm | Vilhelm Parfumerie · Morning Chess |
| Moscino · Toy Boy | Moschino · Toy Boy |
| Muse · Andrea Maack | Andrea Maack · Muse |
| Nasomotto · Black Affogato | Nasomatto · Black Affogato |
| Nasomotto · Blamage | Nasomatto · Blamage |
| Nasomotto · Duro | Nasomatto · Duro |
| Nasomotto · Nudiflorum | Nasomatto · Nudiflorum |
| Nasomotto · Pardon | Nasomatto · Pardon |
| Nasomotto · Sadonaso | Nasomatto · Sadonaso |
| Nonfiction · Beige | Nonfiction · The Beige |
| Olfactive Studios · Iris Shot | Olfactive Studio · Iris Shot |
| Olfactive Studios · Still life | Olfactive Studio · Still life |
| ONE DAY · Jasmine Tea | One Day · Jasmine Tea |
| ONE DAY · Oolong Tea | One Day · Oolong Tea |
| ONE DAY · Osmanthus Tea | One Day · Osmanthus Tea |
| ONE DAY · Pu'er Tea | One Day · Pu'er Tea |
| ONE DAY · Salm | One Day · Salm |
| ONE DAY · Thailand | One Day · Thailand |
| Paco Rabonne · Paco Rabonne Pour Homme | Paco Rabanne · Paco Rabonne Pour Homme |
| Parfumeur d'Empire · Mal Amie | Parfum d'Empire · Mal Amie |
| Parfums de Marley · Kuhuyan | Parfums de Marly · Kuhuyan |
| Parfums de Marley · Palatine | Parfums de Marly · Palatine |
| Parfums de Marley · The whole line | Parfums de Marly · The whole line |
| Penhaligons · Blenheim Bouquet | Penhaligon's · Blenheim Bouquet |
| Penihaligons · The whole line | Penhaligon's · The whole line |
| Penihaligons · Tragedy of Lord George | Penhaligon's · Tragedy of Lord George |
| Penilaligons · Liquid Love | Penhaligon's · Liquid Love |
| Regime des Fleurs · Falling Trees | R\u00e9gime des Fleurs · Falling Trees |
| Regime des Fleurs · Glass Blooms | R\u00e9gime des Fleurs · Glass Blooms |
| Regime des Fleurs · Leather Petals | R\u00e9gime des Fleurs · Leather Petals |
| Regime des Fleurs · Tears | R\u00e9gime des Fleurs · Tears |
| Regime des Fleurs · Toor Toor | R\u00e9gime des Fleurs · Toor Toor |
| Rogue · Absolue de Mousse | Rogue Perfumery · Absolue de Mousse |
| Rogue · Bon Monsieur | Rogue Perfumery · Bon Monsieur |
| Rogue · Chypre Siam | Rogue Perfumery · Chypre Siam |
| Rogue · Mousse Illuminee | Rogue Perfumery · Mousse Illuminee |
| Régime des Fleurs · Jade Vines | R\u00e9gime des Fleurs · Jade Vines |
| Senyoko · (discovery set) | Senyok\u00f4 · (discovery set) |
| Senyokô · Kujira Densetsu | Senyok\u00f4 · Kujira Densetsu |
| Serge lutens · fils de joie | Serge Lutens · fils de joie |
| Set Sail Martinique · Tommy Bahama | Tommy Bahama · Set Sail Martinique |
| Setchu · 2am Tatami Mat | Setchu · Friday 2 AM: Tatami |
| Soft Tension · Andrea Maack | Andrea Maack · Soft Tension |
| Stora Stuggan · Pine | Stora Skuggan · Pine |
| Stora Stuggan · Silphim | Stora Skuggan · Silphim |
| Stora Stuggan · Thumbsucker | Stora Skuggan · Thumbsucker |
| Une Nuite Nomade · Jardins de Misfah Extrait | Une Nuit Nomade · Jardins de Misfah Extrait |
| UNN · Chemin d'Amande | Une Nuit Nomade · Chemin d'Amande |
| Viktor and Rolf · Spicebomb | Viktor & Rolf · Spicebomb |
| Xinu · Aguamadera | Xinú · Aguamadera |
| Xinu · Monstera | Xin\u00fa · Monstera |
| Zing · Andrea Maack | Andrea Maack · Zing |
| Zyrena · American Psycho | Xyrena · American Psycho |
| Zyrena · Dark Ride | Xyrena · Dark Ride |
| Zyrena · Graffiti | Xyrena · Graffiti |
| Zyrena · Sleepaway Camp | Xyrena · Sleepaway Camp |
| Zyrena · Y2K | Xyrena · Y2K |

## Not looked up yet

The session hit its web search limit before reaching these. A future session can continue from this list.

- 100 Bon | Rose and Black Pepper
- Acqua di Parma | Buongiorno
- Ajmal | Verde
- American Perfumer | Black Walnut
- Angelos Creations Olfactives | Pothos
- Arko | Ink
- Astier de Villatte | Mantes La Jolie
- Azzaro | Azzaro pour Homme
- Bohoboco | Vanilla Black Pepper
- Bolton and Rolf | Metallic Musk
- Bortnikoff | Moss Cologne
- Bvlgari | blossom delight
- Caron | Coup de Fouet
- Caron | Poivre
- CBCB Fragrances | Comrade
- Chanel | No 19
- Coach | Green
- Comme des Gar\u00e7ons | Carnation
- Dolce & Gabbana | L'Amoureux 6
- DSH Perfumes | Rubis Rose
- Ensar Oud | Japanese Red Rose oil
- Eris Parfums | Green Spell
- Escentric Molecules | Black tea
- Escentric Molecules | Molecile 01 + Champaca
- Floris | Elite
- Fr\u00e9d\u00e9ric Malle | Bigarade Concentree
- Fr\u00e9d\u00e9ric Malle | Carnal Flower
- Fr\u00e9d\u00e9ric Malle | Cuir Rose
- Fr\u00e9d\u00e9ric Malle | En Passant
- Fr\u00e9d\u00e9ric Malle | French Lover
- Fr\u00e9d\u00e9ric Malle | Geranium Pour Monsieur
- Fr\u00e9d\u00e9ric Malle | Heaven Can Wait
- Fr\u00e9d\u00e9ric Malle | L'eau d'Hiver
- Fr\u00e9d\u00e9ric Malle | Musc Ravageur
- Fr\u00e9d\u00e9ric Malle | Portrait of a Lady
- Fr\u00e9d\u00e9ric Malle | Synthetic Jungle
- Fr\u00e9d\u00e9ric Malle | Vetiver Extrordinaire
- Fueguia | Cactus Azul
- Fueguia | Chamber
- Fueguia | Komorebi
- Fueguia | Milonga Verde
- Fueguia | Muskara Rosa
- FZOTIC | Au Dela Narcisse
- FZOTIC | Monserrat
- Goutal | Gardenia Passion
- Goutal | Un Matin d'Orage
- Granado | Jardim Real
- Granado | Nostalgia
- Gucci | Bloom
- Gucci | The Heart of Leo
- Guerlain | Aqua Allegoria Forte Rossa Rossa
- Guerlain | Aqua Allegoria Mandarine Basilica Forte
- Guerlain | Aqua Allegoria Neroli Vetiver
- Guerlain | Aqua Allegoria Pera Granita
- Guerlain | Aqua Allegoria Rossa Rossa
- Guerlain | Chamade EDT
- Guerlain | Cruel Gardenia
- Guerlain | Cuir Intense
- Guerlain | Eau de Cashmire
- Guerlain | Eau de Coton
- Guerlain | Eau de Guerlain
- Guerlain | Eau de Lingerie
- Guerlain | Eau de Tulle
- Guerlain | Epices Volees
- Guerlain | Habit Rouge EDT
- Guerlain | Jasmin Greandeflorum
- Guerlain | Jasmine extract
- Guerlain | Jicky EDP
- Guerlain | Joyeuse Tubéreuse
- Guerlain | L'Homme Ideal L'intense
- Guerlain | L'Instant de Guerlain pour Homme
- Guerlain | Les Absolus D'Orient Musc Noble
- Guerlain | Mon Guerlain Eau de Parfum Intense
- Guerlain | Neroli Outrenoir
- Guerlain | Oud Essential
- Guerlain | Rossa Verde
- Guerlain | Santal pao rosa
- Guerlain | Tobacco Honey
- Guerlain | Tonka Imperiale
- Guerlain | Vetiver Fauve
- Guerlain | Vetiver Parfum
- Henrik Vibskov | Ambient Glare 5 O'Clock
- Henrik Vibskov | Cedar Root Black
- Henrik Vibskov | L'Eau Rouge Heirloom
- Henrik Vibskov | L'Eau Rouge Nature
- Henrik Vibskov | Lotus Root Red
- Heretic | Black Salt
- Heretic | Jasmine Smoke
- Heretic | Poltergeist
- Heretic | Rhubarb Thief
- Heretic | Spectral Grace
- Herm\u00e8s | Concentret de Pamplemousse Rose
- Herm\u00e8s | H24 Herbes Vives
- Herm\u00e8s | Hermessence Osmanthe Yunnan
- Herm\u00e8s | Hermessence Vetiver Tonka - 2ml
- Herm\u00e8s | Le Jardin de Monsieur Li
- Herm\u00e8s | Poivre Samarcande
- Herm\u00e8s | Rhubarb d'escarlet
- Herm\u00e8s | Rose Ikebana
- Herm\u00e8s | Terre d'Hermes
- Herm\u00e8s | Terre d'Hermes Eau Tres Fraiche
- Herm\u00e8s | Un Jardin Sur Le Nil
- Herm\u00e8s | Un Jardin Sur Le Toit
- Herm\u00e8s | Un Jardin à Cythère
- Hilde Soliani | Bell Antonio
- Hilde Soliani | Castaaagna Saaaalata
- Hilde Soliani | Hot Milk
- Hilde Soliani | Il Tuo Tulipano Giallo
- Hilde Soliani | Miss Trenchant
- Hilde Soliani | Orgasmo
- Hilde Soliani | Pranzo something
- Hiram Green | Arbole
- Hiram Green | Arcadia
- Hiram Green | Hyde
- Hiram Green | Moon Bloom
- Hiram Green | Philtre
- Hiram Green | Shangri La
- Hiram Green | Slowdive
- Hiram Green | Tryst
- Hiram Green | Ultra
- Histoires de Parfums | Hemingway 1899
- Holy Hell | Universal Flowering
- Houbigant | Duc de Vervins
- Houbigant | Fougere Royale
- Hugo Boss | Hugo
- Imaginary Authors | A Little Secret
- Imaginary Authors | Explosions in the Sky
- Imaginary Authors | Yesterday Haze
- Initio | Atomic Rose
- Initio | The whole line
- Isabelle Larignon | Le Flocon de Johann K
- Issey Miyake | A drop d'Issey
- Issey Miyake | L'eau d'issey pour homme
- J.F. SCHWARZLOSE | Trance
- James Heeley | Note de Yuzu
- Jean Paul Gaultier | Le Male
- Jo Malone | Cypress & Grapevine Cologne Intense
- Jo Malone | Dark Amber and Ginger Lily
- Jo Malone | English Pear and Freesia
- Jo Malone | Tuberose Angelica
- Jo Malone | Velvet Rose & Oud
- Jo Malone | Wood Sage Sea Salt
- Joop | Homme absolute
- Jorum Studios | Fantosmia
- Jorum Studios | Gorseland
- Jorum Studios | Nectary
- Jorum Studios | Paradisi
- Jorum Studios | Pony Boy
- Juliette Has a Gun | Not a Perfume
- Juliette Has a Gun | Pear Inc
- Jusbox | Visionary Eye
- Kenzo | Flower Ikebana Indigo
- Kenzo | The whole line
- Kerosene | Copper Skies
- Kerosene | Summer of 84
- Kerosene | Walk the Sea
- Kilian | Angel's Share
- Kilian | Love Don't Be Shy
- Kim Kardashian | Honey
- Kintsugi Perfumes | Hanzo
- Kosui | Sabako
- L'Artisan Parfumeur | Cedrat Ceruse
- L'Artisan Parfumeur | Venenum 32
- L'Artisan Parfumeur | Vetiver Ecarlate
- L'Entropiste | White Blood
- L'Epoque | Dreams and Nightmares
- L'Occitane | Magnolia
- L'Occitane | Mélilot EDP
- L'Occitane | Rose EDT
- Lacoste | Blanc
- Lacoste | Rose
- Lalique | Encre Noire
- Lanc\u00f4me | Lancome Cuir
- Lanc\u00f4me | Le Parfum
- Lanc\u00f4me | Poeme
- Lanc\u00f4me | Rose or Die
- Laurel Bathhouse | Cannoli
- Laurel Bathhouse | E-mochi
- Laurel Bathhouse | Not Vanilla
- Laurel Bathhouse | Nudi
- Le Labo | Baie 19
- Le Labo | Fleur d'orangier
- Le Labo | In Jardin Sur La Legune
- Le Labo | Musc 25
- Le Labo | Rose 31
- Le Labo | The Noir
- Les Bains Guerbois | Rose Graffiti
- Les Indemodables | Ambre Supreme
- Les Indemodables | Chypre Azural
- Les Indemodables | Cuir de Chine
- Les Indemodables | Escale En Haiti
- Les Indemodables | Escale En Indonesie
- Les Indemodables | Fougere Emeraude
- Les Indemodables | Immortelle Solaire
- Les Indemodables | Iris Perle
- Les Indemodables | Musc de Sables
- Les Indemodables | Oranger Sirocco
- Les Indemodables | Patchouli Noisette
- Les Indemodables | Rose de Jamal
- Les Indemodables | Vanille Havane
- Liis | Celestial Object
- Liis | Flower Glyph
- Liis | Rose Stuck
- Liis | Studied
- Liquides Imaginaires | Beaute Du Diable
- Liquides Imaginaires | Blanche Bête
- Loewe | 7.0
- Loewe | Angus
- Loewe | Ella
- Loewe | Pour Homme
- Louis Vuitton | Afternoon Swim
- Louis Vuitton | Imagination
- Louis Vuitton | L'Immensitie
- Louis Vuitton | Spell on You
- Lvnea | Ghost Pine
- Mad et Len | Apocalypstick
- Maison Crivelli | Iris Malikhan
- Maison Crivelli | Papyrus Moleculaire
- Maison Crivelli | Tubereuse Astrale
- Maison Francis Kurkdjian | Gentle Fluidity Silver
- Maison Francis Kurkdjian | Grand Soir
- Maison Margiela | After the rain stops
- Maison Margiela | At the Barber's
- Maison Margiela | At the Jazz Club
- Maison Margiela | By the Fireplace
- Maison Margiela | Flower Market
- Maison Margiela | From the garden
- Maison Margiela | Lazy Sunday Morning
- Maison Margiela | Promenade in the Garden
- Maison Margiela | Sailing day
- Maison Margiela | Untitled
- Maison Margiela | Whispers at the Library
- Majda Bekkali | Fusion Sacree Claire
- Malka Sina | Beyond the Veil
- Malka Sina | Lineage of Advice
- Malka Sina | Thread the Light
- Malka Sina | Tomato
- Marc Jacobs | Bang
- Marc-Antoine Barrois | Encelade
- Marc-Antoine Barrois | Ganymede
- Marlou | Heliodose
- Mati\u00e8re Premi\u00e8re | Radical rose
- Maya Nije | Nordic Cedar
- Memo | African Leather
- Memo | Capcamarat
- Memo | Irish Leather
- Meo Fusciuni | Sogni
- Mes Bisous | A Wondrous Flight
- Mes Bisous | Balle Rouge
- Miller Harris | Feuilles de Tabac
- Miller Harris | Le Cedre
- Miller Harris | Wander Through the Parks
- Molton Brown | Fiery Pink Pepper
- Molton Brown | Re-charge Black Pepper
- Montale | Honey Aoud
- Montale | Intense Pepper
- Montblanc | Black Meisterstuck
- Montblanc | Extreme Leather
- Moschino | Toy Boy
- Moth and Rabbit | A Single Man
- Moth and Rabbit | La Haine
- Moth and Rabbit | Melancholia
- Nasomatto | Black Affogato
- Nasomatto | Blamage
- Nasomatto | Duro
- Nasomatto | Narcotic Venus
- Nasomatto | Nudiflorum
- Nasomatto | Pardon
- Nasomatto | Sadonaso
- Nasomatto | Silver Musk
- Neanderthal | Dark
- Neanderthal | Us
- Nefer | Prissana
- Nest | Black Tulip
- Nissaba | Provence
- Nobile 1942 | 1001.0
- Nonfiction | Bois d'Ylang
- Nonfiction | Dew and Light
- Nonfiction | For rest
- Nonfiction | Forget Me Not
- Nonfiction | Gaiac Flower
- Nonfiction | Gentle Night
- Nonfiction | In the Shower
- Nonfiction | Simple Garden
- Nonfiction | Tears in Rain
- Nonfiction | The Gray
- Nonfiction | The Rose
- Nonfiction | Young Memories
- Nose of Gatsby | Naive
- Obvious | Scoville
- Oddity | Delulu
- Officine Universelle Buly | Andean Verbena and Ulu Basil
- Officine Universelle Buly | Caribbean Sweet Potato and Afghan Carrot
- Officine Universelle Buly | Indian Cucumber and Syrian Mint
- Officine Universelle Buly | Iraqi Beetroot and Egyptian Rhubarb
- Officine Universelle Buly | Oriental Watercress and Sardinian Parsley
- Officine Universelle Buly | Scandinavian Redcurrant and Peruvian Tomato
- Olfactive Studio | Flashback
- Olfactive Studio | Iris Shot
- Olfactive Studio | Still life
- Olympic Orchids | Dev 3
- Olympic Orchids | Night Flyer
- Olympic Orchids | Olympic Rainforest
- Olympic Orchids | Woodcut Parfum
- One Day | Jasmine Tea
- One Day | Oolong Tea
- One Day | Osmanthus Tea
- One Day | Pu'er Tea
- One Day | Salm
- One Day | Taipei EdP
- One Day | Thailand
- Ormonde Jayne | Evernia
- Ormonde Jayne | Montabaco Intensivo
- Ormonde Jayne | Ormonde Woman
- Ormonde Jayne | Verano
- Orto Parisi | Stercus
- Orto Parisi | Viride
- Paco Rabanne | Paco Rabonne Pour Homme
- Paco Rabanne | Pour Homme
- Papillon Artisan | Dryad
- Papillon Artisan | Tobacco Rose
- Parfum d'Empire | Mal Amie
- Parfumeurs du Monde | Les Fleurs de la Pluie
- Parfums de Marly | Delina
- Parfums de Marly | Kuhuyan
- Parfums de Marly | Palatine
- Parfums de Marly | The whole line
- Particuliere | Black Tar
- Particuliere | Type Writer
- Pearfat | 2030 Park Avenue
- Pearfat | I'll Never Learn
- Pearfat | Stomped on a Bed of Lettuce
- Penhaligon's | Blenheim Bouquet
- Penhaligon's | Liquid Love
- Penhaligon's | The whole line
- Penhaligon's | Tragedy of Lord George
- Perfumehead | The whole line
- Perfumer H | Rain Wood
- Perfumes Quartana | Forest of the Golden Dreams
- Perfumes Quartana | Leofarte
- Pernoire | Vitias
- Perris | VETIVER JAVA
- Phlur | Missing Person
- Phlur | Sweet Spot
- Pineward | Binderbole
- Pineward | Boreal
- Pineward | Fanghorn II
- Polo | Ralph Lauren
- Precious Liquids | Salt and Pepper
- Profumum Roma | Ichnusa
- R\u00e9gime des Fleurs | Falling Trees
- R\u00e9gime des Fleurs | Glass Blooms
- R\u00e9gime des Fleurs | Jade Vines
- R\u00e9gime des Fleurs | Leather Petals
- R\u00e9gime des Fleurs | Tears
- R\u00e9gime des Fleurs | Toor Toor
- Raconteur | Cloud 9 Juice
- Raconteur | No-Tell Motel
- Ranger's Station | Oakmoss
- Raw Contrast | Hanji
- Rising Sun | Rite of Way
- Rivendare | Death by Vanity
- Robert Piguet | Bandit
- Roger & Gallet | Lavende Royale
- Rogue Perfumery | (discovery set)
- Rogue Perfumery | Absolue de Mousse
- Rogue Perfumery | Chypre Siam
- Rogue Perfumery | Mousse Illuminee
- Romeo Gigli | Romeo di Romeo Gigli
- Room 1015 | Cherry Punk
- Room 1015 | Love-O-Matic
- Sanctuary | Javan Rhino
- Scents of Wood | Hinoki in Hinoki
- Senyok\u00f4 | (discovery set)
- Senyok\u00f4 | Kujira Densetsu
- Sept 28 | Bun
- Sept 28 | Lake Tahoe Air
- Sept 28 | Little Rosie
- Sept 28 | Mono
- Sept 28 | Nothing Dramatic
- Sept 28 | Silken Tofu
- Serge Lutens | Ambre Sultan
- Serge Lutens | fils de joie
- Serge Lutens | Five O'Clock Au Gingembre
- Serge Lutens | Fleur l'oranger
- Serge Lutens | La Fille de Berlin
- Serge Lutens | Poivre Noir
- Serge Lutens | Santal Majuscule
- Serge Lutens | Vitriol d'Oeillet
- Setchu | Thursday 1pm Ayu
- SJP | Lovely
- SJP | Stash
- Sorce | English Major
- Stardust & Stems | Book Fair
- Stephanie Humbert Lucas 777 | Black Gemstone
- Stercus | Orto Parisi
- Stora Skuggan | Fantome de Maules
- Stora Skuggan | Pine
- Stora Skuggan | Silphim
- Stora Skuggan | Thumbsucker
- Strangers | Tokiwa
- SYD Botanica | Suspended Water Lily
- SYD Botanica | Wavey Tulip
- The 7 Virtues | Vetiver Elemi
- The Different Company | Crazy Tuberose
- The Different Company | White Zagora
- The House of Oud | Almond Harmony
- to Summer | Nude
- to Summer | Rambler Rose
- to Summer | Triple Tea
- Tom Ford | Bitter peach
- Tom Ford | Black Orchid
- Tom Ford | Cafe Rose
- Tom Ford | Ebene Fume
- Tom Ford | Fleur de Portofino
- Tom Ford | Fogere d'Argent
- Tom Ford | Fougere Platine
- Tom Ford | Fucking Fabulous
- Tom Ford | Gray Vetiver
- Tom Ford | Italian Cypress
- Tom Ford | Jasmine Rouge
- Tom Ford | Jonquille de Nuit
- Tom Ford | Lavender Palm
- Tom Ford | Lost Cherry
- Tom Ford | Myhrre Mystere
- Tom Ford | Neroli Portofino
- Tom Ford | Noir de Noir
- Tom Ford | Noir Extreme
- Tom Ford | Ombre leather
- Tom Ford | Orchid Soleil
- Tom Ford | Oud Fleur
- Tom Ford | Oud Wood (EDT & Parfum)
- Tom Ford | Patchouli Absolute
- Tom Ford | Plum Japonais
- Tom Ford | Rose Prick
- Tom Ford | Santal Blush
- Tom Ford | Soleil de Feu
- Tom Ford | Soleil Neige
- Tom Ford | Tabacco Vanille
- Tom Ford | Taormina Orange
- Tom Ford | Tobacco Oud
- Tom Ford | Tubereuse Nue
- Tom Ford | Tuscan Leather
- Tom Ford | Vanilla Sex
- Tom Ford | Velvet Gardenia
- Tom Ford | Velvet Orchid
- Tom Ford | Vert Boheme
- Tom Ford | Vert Fleur
- Tom Ford | Violet Blonde
- Tom Ford | White Patchouli
- Toskovot | Inexcusable Evil
- Toskovot | The whole line
- Trena | Graffiti
- Une Nuit Nomade | Chemin d'Amande
- Une Nuit Nomade | Jardins de Misfah Extrait
- Universal Flowering | Burst!
- Universal Flowering | Daddy
- Universal Flowering | Death of a Ladies' Man
- Van Cleef & Arpels | Bois d’Amande
- Versace | Roses des sables
- Viktor & Rolf | Flowerbomb
- Viktor & Rolf | Spicebomb
- Vilhelm Parfumerie | Basilico & Fellini
- Vilhelm Parfumerie | Fleur Burlesque
- Vilhelm Parfumerie | Mango Skin
- Vilhelm Parfumerie | Stockholm 1978
- Villa Urbatium | Mossy Glen
- Xerjoff | Don
- Xerjoff | Naxos
- Xin\u00fa | Monstera
- Xyrena | American Psycho
- Xyrena | Dark Ride
- Xyrena | Graffiti
- Xyrena | Pool Boy
- Xyrena | Sleepaway Camp
- Xyrena | Y2K
- YSL | Babycat (bourbon)
- YSL | Blouse (rose)
- YSL | Capeline (Lily)
- YSL | Jumpsuit (oud or leather)
- YSL | Kouros
- YSL | Lavalliere (fig)
- YSL | Muse (ink)
- YSL | Opium
- YSL | Rive Gauche Pour Homme
- YSL | Tuxedo (patchouli)
- YSL | Velours (rose)
- Yuma | Pernoire
- Zoologist | Bee
- Zoologist | Penguin
- Zoologist | Portuguese Man of War
- Zoologist | Sloth
- Zoologist | Squid
