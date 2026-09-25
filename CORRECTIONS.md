# Name corrections and photo status

This file lists how the app cleans up names from your sheet. Your Google Sheet is never edited. Per-perfume corrections and photo sources live in `matches.json`. House-name spelling fixes live in the `HOUSE_FIXES` list at the top of `app.js`.

- Perfumes in the sheet: 775
- With a bottle photo: 755
- Photo source found, waiting for the Find bottle photos action: 9
- No photo found anywhere: 2
- Rows that name a whole line or a discovery set: 9

## Guesses worth checking

If one of these is the wrong version, tell Claude which one you meant.

- Arko | Ink: read as Akro Ink
- Bolton and Rolf | Metallic Musk: read as Viktor & Rolf Spicebomb Metallic Musk
- Chanel | Bleu: guessed the Eau de Parfum version
- Chanel | No 19: used the Eau de Parfum
- Creed | Vetiver: could also be the older 1948 Vetiver
- Czech & Speake | No. 88: could be the 1980 cologne instead of the Eau de Parfum
- Dior | Du Cap: guessed that "Du Cap" means Eden-Roc (named for the Hôtel du Cap)
- Dolce and Gabbana | The One: could be the women's The One instead
- DSH | Something Capri: guessed; only DSH scent with Capri in the name
- Guerlain | Eau de Cashmire: used the 2026 Les Eaux version (an older 2014 Eau de Cashmere also exists)
- Guerlain | Jasmine extract: guessed Jasmin Grandiflorum Extrait 30
- Guerlain | Oud Essential: used the 2024 Oud Essentiel; could be the 2017 Les Absolus d'Orient Oud Essentiel
- Henrik Vibskov | Lotus Root Red: guessed Lotus Dust Red, the only Vibskov scent with Lotus and Red in the name
- Hilde Soliani | Pranzo something: guessed Buon Pranzo
- Hiram Green | Shangri La: used the 2014 original; could be the 2022 edition
- Houbigant | Fougere Royale: used the 2010 reissue
- Imaginary Authors | Explosions in the Sky: guessed Slow Explosions
- Kim Kardashian | Honey: guessed Pure Honey
- L'Occitane | Magnolia: guessed Eau du Val (Magnolia)
- Lacoste | Blanc: used L.12.12 Blanc (2011); several Blanc flankers exist
- Lacoste | Rose: used L.12.12 Rose Eau de Parfum (2021)
- Lancôme | Le Parfum: guessed Absolue Le Parfum (2024)
- Le Labo | In Jardin Sur La Legune: this is Hermès Un Jardin Sur La Lagune, so the app shows it under Hermès
- Loewe | Ella: guessed Agua de Loewe Ella
- Nasomotto | Black Affogato: guessed Black Afgano
- Perfumes Quartana | Leofarte: read as Ierofante
- Phlur | Sweet Spot: guessed Soft Spot
- Tom Ford | Cafe Rose: used the 2012 original; a 2023 relaunch also exists
- Trena | Graffiti: read as Xyrena Graffiti
- YSL | Velours (rose): guessed Rouge Velours

## Waiting for the Find bottle photos action

These aren't on Fragrantica. `matches.json` names a product page or shop for each, and the Find bottle photos GitHub Action copies the photo's address from there. If one still shows a letter tile after the action has run, the page may have moved.

- DSH Perfumes: Au Crépuscule de Lavande
- DSH Perfumes: Eclipse
- DSH Perfumes: In the Jungle Groove
- DSH Perfumes: Le Jade
- DSH Perfumes: Potager de Bergamot
- DSH Perfumes: Soho Cuir
- DSH Perfumes: Vachi
- DSH Perfumes: Warrior Queen
- September 28th: Lake Tahoe Air

## No photo found

These show a letter tile. To give one a photo, add a column headed **Fragrantica** to your sheet and paste the perfume's Fragrantica page link into it.

- D&Scent Studios: Verdant Halo
- Loewe: Angus

## Rows that aren't a single perfume

These show a letter tile. They name a whole line or a discovery set, so there is no one bottle to show.

- Fischersund: The whole house
- Initio: The whole line
- Kenzo: The whole line
- Parfums de Marly: The whole line
- Penhaligon's: The whole line
- Perfumehead: The whole line
- Rogue Perfumery: (discovery set)
- Senyokô: (discovery set)
- Toskovat': The whole line

## Rows with a house but no perfume name

- Dior
- Floraiku
- Marc-Antoine Barrois

## Every name change

| In your sheet | Shown in the app |
|---|---|
| 100 Bon · Rose and Black Pepper | 100 Bon · Rose & Black Pepper |
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
| Arko · Ink | Akro · Ink |
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
| Bolton and Rolf · Metallic Musk | Viktor & Rolf · Spicebomb Metallic Musk |
| Bon Parfumer · 801.0 | Bon Parfumeur · 801 |
| Borntostandout · Dirty rice | BORNTOSTANDOUT · Dirty Rice |
| Borntostandout · Naked Laundry | BORNTOSTANDOUT · Naked Laundry |
| Borntostandout · Warm Air | BORNTOSTANDOUT · Warm Air |
| BORNTOSTANDOUT® · Nanatopia | BORNTOSTANDOUT · Nanatopia |
| Bvlgari (Le Gemme) · Tygar | Bvlgari · Le Gemme Tygar |
| bvlgari · blossom delight | Bvlgari · Rose Goldea Blossom Delight |
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
| Chanel · No 19 | Chanel · No. 19 |
| Chanel · Paris Paris | Chanel · Paris – Paris |
| Chanel · Rue de 31 Cambon | Chanel · 31 Rue Cambon |
| Chloe · Chloe EDP | Chloé · Chloé Eau de Parfum |
| Chloe · Rose and Tangerine | Chloé · Rose Tangerine |
| Chloe · Sous Les Pins | Chloé · Sous les Pins |
| Clue · Dandelion Butter | Clue Perfumery · Dandelion Butter |
| Clue · Morel Map | Clue Perfumery · Morel Map |
| Clue · Warm Bulb | Clue Perfumery · Warm Bulb |
| Clue · With the Candlestick | Clue Perfumery · With the Candlestick |
| Coach · Green | Coach · Coach Green |
| Comme des Garcons · Carnation | Comme des Garçons · Series 2 Red: Carnation |
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
| Dolce & Gabbana · L'Amoureux 6 | Dolce & Gabbana · D&G Anthology L'Amoureux 6 |
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
| Eris Parfums · Belle du Jour | Eris Parfums · Belle de Jour |
| Eris · Green Spell | Eris Parfums · Green Spell |
| Fenty · Fenty | Fenty · Fenty Eau de Parfum |
| Floraiku | Floraïku |
| Floraiku · Between 2 Trees | Floraïku · Between Two Trees |
| Frederic Malle · Bigarade Concentree | Frédéric Malle · Bigarade Concentrée |
| Frederic Malle · Carnal Flower | Frédéric Malle · Carnal Flower |
| Frederic Malle · Cuir Rose | Frédéric Malle · Rose & Cuir |
| Frederic Malle · En Passant | Frédéric Malle · En Passant |
| Frederic Malle · French Lover | Frédéric Malle · French Lover |
| Frederic Malle · Geranium Pour Monsieur | Frédéric Malle · Geranium Pour Monsieur |
| Frederic Malle · Heaven Can Wait | Frédéric Malle · Heaven Can Wait |
| Frederic Malle · L'eau d'Hiver | Frédéric Malle · L'Eau d'Hiver |
| Frederic Malle · Lipstick Rose | Frédéric Malle · Lipstick Rose |
| Frederic Malle · Musc Ravageur | Frédéric Malle · Musc Ravageur |
| Frederic Malle · Portrait of a Lady | Frédéric Malle · Portrait of a Lady |
| Frederic Malle · Rose Tonnare (or Une Rose) | Frédéric Malle · Rose Tonnerre (Une Rose) |
| Frederic Malle · Synthetic Jungle | Frédéric Malle · Synthetic Jungle |
| Frederic Malle · Vetiver Extrordinaire | Frédéric Malle · Vétiver Extraordinaire |
| Fueguia · Cactus Azul | Fueguia 1833 · Cactus Azul |
| Fueguia · Chamber | Fueguia 1833 · Chamber |
| Fueguia · Komorebi | Fueguia 1833 · Komorebi |
| Fueguia · Milonga Verde | Fueguia 1833 · Milonga Verde |
| Fueguia · Muskara Rosa | Fueguia 1833 · Muskara Rosa |
| Fzotic · Au Dela Narcisse | FZOTIC · Au Delà Narcisse |
| Fzotic · Lampblack | FZOTIC · Lampblack |
| Fzotic · Monserrat | FZOTIC · Monserrat |
| Guerlain · Aqua Allegoria Forte Rossa Rossa | Guerlain · Aqua Allegoria Forte Rosa Rossa |
| Guerlain · Aqua Allegoria Mandarine Basilica Forte | Guerlain · Aqua Allegoria Forte Mandarine Basilic |
| Guerlain · Aqua Allegoria Neroli Vetiver | Guerlain · Aqua Allegoria Nerolia Vetiver |
| Guerlain · Aqua Allegoria Rossa Rossa | Guerlain · Aqua Allegoria Rosa Rossa |
| Guerlain · Chamade EDT | Guerlain · Chamade Eau de Toilette |
| Guerlain · Cruel Gardenia | Guerlain · Cruel Gardénia |
| Guerlain · Eau de Cashmire | Guerlain · Eau de Cashmere |
| Guerlain · Epices Volees | Guerlain · Épices Volées |
| Guerlain · Habit Rouge EDT | Guerlain · Habit Rouge Eau de Toilette |
| Guerlain · Jasmin Greandeflorum | Guerlain · Jasmin Grandiflorum Extrait 30 |
| Guerlain · Jasmine extract | Guerlain · Jasmin Grandiflorum Extrait 30 |
| Guerlain · Jicky EDP | Guerlain · Jicky Eau de Parfum |
| Guerlain · L'Homme Ideal L'intense | Guerlain · L'Homme Idéal L'Intense |
| Guerlain · Les Absolus D'Orient Musc Noble | Guerlain · Les Absolus d'Orient Musc Noble |
| Guerlain · Neroli Outrenoir | Guerlain · Néroli Outrenoir |
| Guerlain · Oud Essential | Guerlain · Oud Essentiel |
| Guerlain · Rossa Verde | Guerlain · Aqua Allegoria Rosa Verde |
| Guerlain · Santal pao rosa | Guerlain · Santal Pao Rosa |
| Guerlain · Tonka Imperiale | Guerlain · Tonka Impériale |
| Guerlain · Vetiver Fauve | Guerlain · Vétiver Fauve |
| Henrik Vibskov · Lotus Root Red | Henrik Vibskov · Lotus Dust Red |
| Heretic · Black Salt | Heretic Parfum · Black Salt |
| Heretic · Jasmine Smoke | Heretic Parfum · Jasmine Smoke |
| Heretic · Poltergeist | Heretic Parfum · Poltergeist |
| Heretic · Rhubarb Thief | Heretic Parfum · Rhubarb Thief |
| Heretic · Spectral Grace | Heretic Parfum · Spectral Grace |
| Hermes · Concentret de Pamplemousse Rose | Hermès · Concentré de Pamplemousse Rose |
| Hermes · H24 Herbes Vives | Hermès · H24 Herbes Vives |
| Hermes · Hermessence Osmanthe Yunnan | Hermès · Hermessence Osmanthe Yunnan |
| Hermes · Hermessence Vetiver Tonka - 2ml | Hermès · Hermessence Vétiver Tonka |
| Hermes · Le Jardin de Monsieur Li | Hermès · Le Jardin de Monsieur Li |
| Hermes · Poivre Samarcande | Hermès · Hermessence Poivre Samarcande |
| Hermes · Rhubarb d'escarlet | Hermès · Eau de Rhubarbe Écarlate |
| Hermes · Rose Ikebana | Hermès · Hermessence Rose Ikebana |
| Hermes · Terre d'Hermes | Hermès · Terre d'Hermès |
| Hermes · Terre d'Hermes Eau Givree | Hermès · Terre d'Hermès Eau Givrée |
| Hermes · Terre d'Hermes Eau Tres Fraiche | Hermès · Terre d'Hermès Eau Très Fraîche |
| Hermes · Un Jardin Sur Le Nil | Hermès · Un Jardin Sur Le Nil |
| Hermes · Un Jardin Sur Le Toit | Hermès · Un Jardin Sur Le Toit |
| Hermes · Un Jardin à Cythère | Hermès · Un Jardin à Cythère |
| Hilde Soliani · Bell Antonio | Hilde Soliani · Bell'Antonio |
| Hilde Soliani · Castaaagna Saaaalata | Hilde Soliani · Caaastagna Saalaaata |
| Hilde Soliani · Miss Trenchant | Hilde Soliani · Miss Tranchant |
| Hilde Soliani · Pranzo something | Hilde Soliani · Buon Pranzo |
| Hiram Green · Arbole | Hiram Green · Arbolé Arbolé |
| Histories des Parfums · Hemingway 1899 | Histoires de Parfums · 1899 Hemingway |
| Holy Hell · Universal Flowering | Universal Flowering · Holy Hell |
| Houbigant · Fougere Royale | Houbigant · Fougère Royale |
| Imaginary Authors · Explosions in the Sky | Imaginary Authors · Slow Explosions |
| Issey Miyake · A drop d'Issey | Issey Miyake · A Drop d'Issey |
| Issey Miyake · L'eau d'issey pour homme | Issey Miyake · L'Eau d'Issey Pour Homme |
| J.F. SCHWARZLOSE · Trance | J.F. Schwarzlose Berlin · Trance |
| Jo Malone · Dark Amber and Ginger Lily | Jo Malone · Dark Amber & Ginger Lily |
| Jo Malone · English Pear and Freesia | Jo Malone · English Pear & Freesia |
| Jo Malone · Wood Sage Sea Salt | Jo Malone · Wood Sage & Sea Salt |
| Joop · Homme absolute | Joop · Homme Absolute |
| Jorum Studios · Fantosmia | Jorum Studio · Fantosmia |
| Jorum Studios · Gorseland | Jorum Studio · Gorseland |
| Jorum Studios · Nectary | Jorum Studio · Nectary |
| Jorum Studios · Paradisi | Jorum Studio · Paradisi |
| Jorum Studios · Pony Boy | Jorum Studio · Pony Boy |
| Killian · Angel's Share | Kilian · Angels' Share |
| Killian · Love Don't Be Shy | Kilian · Love Don't Be Shy |
| Kim Kardashian · Honey | Kim Kardashian · Pure Honey |
| Kosui · Sabako | Kosui · Sabaku |
| L'Artisan Parfumeur · Vetiver Ecarlate | L'Artisan Parfumeur · Vétiver Écarlate |
| L'Artisan Perfumier · Cedrat Ceruse | L'Artisan Parfumeur · Cédrat Céruse |
| L'occetaine · Mélilot EDP | L'Occitane · Mélilot Eau de Parfum |
| L'Occitane · Magnolia | L'Occitane · Eau du Val (Magnolia) |
| L'Occitane · Rose EDT | L'Occitane · Rose Eau de Toilette |
| Lacoste · Blanc | Lacoste · L.12.12 Blanc |
| Lacoste · Rose | Lacoste · L.12.12 Rose |
| Lancome · Lancome Cuir | Lancôme · Cuir de Lancôme |
| Lancôme · Le Parfum | Lancôme · Absolue Le Parfum |
| Lancôme · Poeme | Lancôme · Poême |
| Lancôme · Rose or Die | Lancôme · Absolue Rose or Die |
| Laurel Bathhouse · Cannoli | Laurel Bath House · Cannoli |
| Laurel Bathhouse · E-mochi | Laurel Bath House · E-Mochi |
| Laurel Bathhouse · Not Vanilla | Laurel Bath House · Not Vanilla |
| Laurel Bathhouse · Nudi | Laurel Bath House · Nudi |
| Le Labo · Fleur d'orangier | Le Labo · Fleur d'Oranger 27 |
| Le Labo · In Jardin Sur La Legune | Hermès · Un Jardin Sur La Lagune |
| Le Labo · Musc 25 | Le Labo · Musc 25 Los Angeles |
| Le Labo · The Noir | Le Labo · Thé Noir 29 |
| Les Indemodables · Ambre Supreme | Les Indemodables · Ambre Suprême |
| Les Indemodables · Escale En Haiti | Les Indemodables · Escale en Haïti |
| Les Indemodables · Escale En Indonesie | Les Indemodables · Escale en Indonésie |
| Les Indemodables · Fougere Emeraude | Les Indemodables · Fougère Émeraude |
| Les Indemodables · Musc de Sables | Les Indemodables · Musc des Sables |
| Les Liquides Imaginaires · Blanche Bête | Liquides Imaginaires · Blanche Bête |
| Liis · Rose Stuck | Liis · Rose Struck |
| Liquides Imaginaires · Beaute Du Diable | Liquides Imaginaires · Beauté du Diable |
| Loewe · 7.0 | Loewe · 7 |
| Loewe · Ella | Loewe · Agua de Loewe Ella |
| Louis Vuitton · L'Immensitie | Louis Vuitton · L'Immensité |
| Maison Crivelli · Iris Malikhan | Maison Crivelli · Iris Malikhân |
| Maison Crivelli · Papyrus Moleculaire | Maison Crivelli · Papyrus Moléculaire |
| Maison Crivelli · Tubereuse Astrale | Maison Crivelli · Tubéreuse Astrale |
| Maison Francis K · Gentle Fluidity Silver | Maison Francis Kurkdjian · Gentle Fluidity Silver |
| Maison Margiela · Untitled | Maison Margiela · (untitled) |
| Majda Bekkali · Fusion Sacree Claire | Majda Bekkali · Fusion Sacrée Clair |
| Malka Sina · Beyond the Veil | Malka Sima · Beyond the Veil |
| Malka Sina · Lineage of Advice | Malka Sima · Lineage of Advice |
| Malka Sina · Thread the Light | Malka Sima · Thread the Light |
| Malka Sina · Tomato | Malka Sima · Tomato |
| Margiela · After the rain stops | Maison Margiela · When the Rain Stops |
| Margiela · At the Barber's | Maison Margiela · At the Barber's |
| Margiela · At the Jazz Club | Maison Margiela · Jazz Club |
| Margiela · Flower Market | Maison Margiela · Flower Market |
| Margiela · From the garden | Maison Margiela · From the Garden |
| Margiela · Lazy Sunday Morning | Maison Margiela · Lazy Sunday Morning |
| Margiela · Promenade in the Garden | Maison Margiela · Promenade in the Gardens |
| Margiela · Sailing day | Maison Margiela · Sailing Day |
| Margiela · Whispers at the Library | Maison Margiela · Whispers in the Library |
| Marlou · Heliodose | Marlou · Héliodose |
| Matiere Premier · Radical rose | Matière Première · Radical Rose |
| Maya Nije · Nordic Cedar | Maya Njie · Nordic Cedar |
| Memo · African Leather | Memo Paris · African Leather |
| Memo · Capcamarat | Memo Paris · Cap Camarat |
| Memo · Irish Leather | Memo Paris · Irish Leather |
| MFK · Grand Soir | Maison Francis Kurkdjian · Grand Soir |
| Miller Harris · Le Cedre | Miller Harris · Le Cèdre |
| Molecule · Black tea | Escentric Molecules · Molecule 01 + Black Tea |
| Molecule · Molecile 01 + Champaca | Escentric Molecules · Molecule 01 + Champaca |
| Montblanc · Black Meisterstuck | Montblanc · Black Meisterstück |
| Morning Chess · Vilhelm | Vilhelm Parfumerie · Morning Chess |
| Moscino · Toy Boy | Moschino · Toy Boy |
| Moth and Rabbit · A Single Man | Moth and Rabbit · Single Man |
| Muse · Andrea Maack | Andrea Maack · Muse |
| Nasomotto · Black Affogato | Nasomatto · Black Afgano |
| Nasomotto · Blamage | Nasomatto · Blamage |
| Nasomotto · Duro | Nasomatto · Duro |
| Nasomotto · Nudiflorum | Nasomatto · Nudiflorum |
| Nasomotto · Pardon | Nasomatto · Pardon |
| Nasomotto · Sadonaso | Nasomatto · Sadonaso |
| Neanderthal · Dark | Neandertal · Dark |
| Neanderthal · Us | Neandertal · Neandertal Us |
| Nefer · Prissana | Prissana · Nefer |
| Nobile 1942 · 1001.0 | Nobile 1942 · 1001 |
| Nonfiction · Beige | Nonfiction · The Beige |
| Nonfiction · Dew and Light | Nonfiction · Dew & Light |
| Nonfiction · For rest | Nonfiction · For Rest |
| Nonfiction · The Gray | Nonfiction · The Grey |
| Olfactive Studio · Flashback | Olfactive Studio · Flash Back |
| Olfactive Studios · Iris Shot | Olfactive Studio · Iris Shot |
| Olfactive Studios · Still life | Olfactive Studio · Still Life |
| Olympic Orchids · Dev 3 | Olympic Orchids · DEV #3: The Inevitable |
| Olympic Orchids · Woodcut Parfum | Olympic Orchids · Woodcut |
| ONE DAY · Jasmine Tea | One Day · Jasmine Tea |
| ONE DAY · Oolong Tea | One Day · Oolong Tea |
| ONE DAY · Osmanthus Tea | One Day · Osmanthus Tea |
| ONE DAY · Pu'er Tea | One Day · Pu'er Tea |
| ONE DAY · Salm | One Day · SALM |
| One Day · Taipei EdP | One Day · Taipei |
| ONE DAY · Thailand | One Day · Thailand |
| Paco Rabonne · Paco Rabonne Pour Homme | Paco Rabanne · Pour Homme |
| Parfumeur d'Empire · Mal Amie | Parfum d'Empire · Mal-Aimé |
| Parfums de Marley · Kuhuyan | Parfums de Marly · Kuhuyan |
| Parfums de Marley · Palatine | Parfums de Marly · Palatine |
| Parfums de Marley · The whole line | Parfums de Marly · The whole line |
| Particuliere · Black Tar | Parfumerie Particulière · Black Tar |
| Particuliere · Type Writer | Parfumerie Particulière · Type Writer |
| Penhaligons · Blenheim Bouquet | Penhaligon's · Blenheim Bouquet |
| Penihaligons · The whole line | Penhaligon's · The whole line |
| Penihaligons · Tragedy of Lord George | Penhaligon's · The Tragedy of Lord George |
| Penilaligons · Liquid Love | Penhaligon's · Liquid Love |
| Perfumes Quartana · Forest of the Golden Dreams | Parfums Quartana · Forest of the Golden Dream |
| Perfumes Quartana · Leofarte | Parfums Quartana · Ierofante |
| Perris · VETIVER JAVA | Perris Monte Carlo · Vetiver Java |
| Phlur · Sweet Spot | Phlur · Soft Spot |
| Pineward · Binderbole | Pineward · Bindebole |
| Polo · Ralph Lauren | Ralph Lauren · Polo |
| Precious Liquids · Salt and Pepper | Precious Liquid · Salt & Pepper |
| Raconteur · Cloud 9 Juice | The Raconteur · Cloud 9 Juice |
| Raconteur · No-Tell Motel | The Raconteur · No-Tell Motel |
| Ranger's Station · Oakmoss | Ranger Station · Oakmoss |
| Regime des Fleurs · Falling Trees | Régime des Fleurs · Falling Trees |
| Regime des Fleurs · Glass Blooms | Régime des Fleurs · Glass Blooms |
| Regime des Fleurs · Leather Petals | Régime des Fleurs · Leather Petals |
| Regime des Fleurs · Tears | Régime des Fleurs · Tears |
| Regime des Fleurs · Toor Toor | Régime des Fleurs · Tóor Tóor |
| Rising Sun · Rite of Way | Rite of Way · Rising Sun |
| Roger & Gallet · Lavende Royale | Roger & Gallet · Lavande Royale |
| Rogue · Absolue de Mousse | Rogue Perfumery · Absolue de Mousse |
| Rogue · Bon Monsieur | Rogue Perfumery · Bon Monsieur |
| Rogue · Chypre Siam | Rogue Perfumery · Chypre-Siam |
| Rogue · Mousse Illuminee | Rogue Perfumery · Mousse Illuminée |
| Senyoko · (discovery set) | Senyokô · (discovery set) |
| Sept 28 · Bun | September 28th · Bun |
| Sept 28 · Lake Tahoe Air | September 28th · Lake Tahoe Air |
| Sept 28 · Little Rosie | September 28th · Little Rosie |
| Sept 28 · Mono | September 28th · Mono |
| Sept 28 · Nothing Dramatic | September 28th · Nothing Dramatic |
| Sept 28 · Silken Tofu | September 28th · Silken Tofu |
| Serge lutens · fils de joie | Serge Lutens · Fils de Joie |
| Serge Lutens · Fleur l'oranger | Serge Lutens · Fleurs d'Oranger |
| Serge Lutens · Vitriol d'Oeillet | Serge Lutens · Vitriol d'Œillet |
| Set Sail Martinique · Tommy Bahama | Tommy Bahama · Set Sail Martinique |
| Setchu · 2am Tatami Mat | Setchu · Friday 2 AM: Tatami |
| Setchu · Thursday 1pm Ayu | Setchu · Thursday 1 PM \| Ayu |
| SJP · Stash | SJP · Stash SJP |
| Soft Tension · Andrea Maack | Andrea Maack · Soft Tension |
| Stephanie Humbert Lucas 777 · Black Gemstone | Stéphane Humbert Lucas 777 · Black Gemstone |
| Stercus · Orto Parisi | Orto Parisi · Stercus |
| Stora Skuggan · Fantome de Maules | Stora Skuggan · Fantôme de Maules |
| Stora Stuggan · Pine | Stora Skuggan · Pine |
| Stora Stuggan · Silphim | Stora Skuggan · Silphium |
| Stora Stuggan · Thumbsucker | Stora Skuggan · Thumbsucker |
| Strangers · Tokiwa | Strangers Parfumerie · Tokiwa |
| to Summer · Nude | To Summer · Nude |
| to Summer · Rambler Rose | To Summer · Rambler Rose |
| to Summer · Triple Tea | To Summer · Triple Tea |
| Tom Ford · Bitter peach | Tom Ford · Bitter Peach |
| Tom Ford · Cafe Rose | Tom Ford · Café Rose |
| Tom Ford · Ebene Fume | Tom Ford · Ébène Fumé |
| Tom Ford · Fogere d'Argent | Tom Ford · Fougère d'Argent |
| Tom Ford · Fougere Platine | Tom Ford · Fougère Platine |
| Tom Ford · Gray Vetiver | Tom Ford · Grey Vetiver |
| Tom Ford · Jasmine Rouge | Tom Ford · Jasmin Rouge |
| Tom Ford · Myhrre Mystere | Tom Ford · Myrrhe Mystère |
| Tom Ford · Ombre leather | Tom Ford · Ombré Leather |
| Tom Ford · Oud Wood (EDT & Parfum) | Tom Ford · Oud Wood |
| Tom Ford · Patchouli Absolute | Tom Ford · Patchouli Absolu |
| Tom Ford · Tabacco Vanille | Tom Ford · Tobacco Vanille |
| Tom Ford · Tubereuse Nue | Tom Ford · Tubéreuse Nue |
| Tom Ford · Vert Boheme | Tom Ford · Vert Bohème |
| Tom Ford · Vert Fleur | Tom Ford · Vert de Fleur |
| Toskovot · Inexcusable Evil | Toskovat' · Inexcusable Evil |
| Toskovot · The whole line | Toskovat' · The whole line |
| Trena · Graffiti | Xyrena · Graffiti |
| Une Nuite Nomade · Jardins de Misfah Extrait | Une Nuit Nomade · Jardins de Misfah Extrait |
| UNN · Chemin d'Amande | Une Nuit Nomade · Chemin d'Amande |
| Van Cleef & Arpels · Bois d’Amande | Van Cleef & Arpels · Bois d'Amande |
| Versace · Roses des sables | Louis Vuitton · Les Sables Roses |
| Viktor and Rolf · Spicebomb | Viktor & Rolf · Spicebomb |
| Villa Urbatium · Mossy Glen | Villa Erbatium · Mossy Glen |
| Xerjoff · Naxos | Xerjoff · XJ 1861 Naxos |
| Xinu · Aguamadera | Xinú · Aguamadera |
| Xinu · Monstera | Xinú · Monstera |
| YSL · Babycat (bourbon) | YSL · Babycat |
| YSL · Blouse (rose) | YSL · Blouse |
| YSL · Capeline (Lily) | YSL · Capeline |
| YSL · Jumpsuit (oud or leather) | YSL · Jumpsuit |
| YSL · Lavalliere (fig) | YSL · Lavallière |
| YSL · Muse (ink) | YSL · Muse |
| YSL · Tuxedo (patchouli) | YSL · Tuxedo |
| YSL · Velours (rose) | YSL · Rouge Velours |
| Yuma · Pernoire | Pernoire · Yuma |
| Zing · Andrea Maack | Andrea Maack · Zing |
| Zoologist · Portuguese Man of War | Zoologist · Portuguese Man O' War |
| Zyrena · American Psycho | Xyrena · American Psycho |
| Zyrena · Dark Ride | Xyrena · Dark Ride |
| Zyrena · Graffiti | Xyrena · Graffiti |
| Zyrena · Sleepaway Camp | Xyrena · Sleepaway Camp |
| Zyrena · Y2K | Xyrena · Y2K |
