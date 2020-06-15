# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Garden.destroy_all
Plant.destroy_all
User.destroy_all


@user = User.create!(username: 'megan1', email: 'megan@email.com', password:'123456')

@anemone = Plant.create!(
  name: 'Anemone', 
  genus:'Anemone', 
  description:'Anemone are perennials that have basal leaves with long leaf-stems that can be upright or prostrate. Leaves are simple or compound with lobed, parted, or undivided leaf blades. The leaf margins are toothed or entire.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Anemones5.jpg/220px-Anemones5.jpg', 
  plantingnotes: 'Garden-cultivated anemones generally grow best in a loamy well-drained evenly-moist fertile soil')

@montbretia = Plant.create!(
  name: 'Montbretia', 
  genus:'Crocosmia', 
  description:'They can be evergreen or deciduous perennials that grow from basal underground corms.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Iridaceae_-_Crocosmia_aurea-1.JPG/220px-Iridaceae_-_Crocosmia_aurea-1.JPG', 
  plantingnotes: 'Crocosmia are winter-hardy in temperate regions. They can be propagated through division, removing offsets from the corm in spring.')

@dahlia = Plant.create!(
  name: 'Dahlia', 
  genus:'Dahlia Pinnata', 
  description:'Dahlias are perennial plants with tuberous roots, though they are grown as annuals in some regions with cold winters.', imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/220px-Dahlia_x_hybrida.jpg', 
  plantingnotes: 'Dahlias grow naturally in climates which do not experience frost, consequently they are not adapted to withstand sub-zero temperatures.')

@strawberries = Plant.create!(
  name: 'Strawberries', 
  genus:'Fragaria', 
  description:'Strawberries are not true berries. The fleshy and edible part of the fruit is a receptacle, and the parts that are sometimes mistakenly called seeds are achenes.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fragaria_vesca_-_metsmaasikas.jpg/1280px-Fragaria_vesca_-_metsmaasikas.jpg', 
  plantingnotes: 'Garden-cultivated anemones generally grow best in a loamy well-drained evenly-moist fertile soil')

@gulmohar = Plant.create!(
  name: 'Gulmohar', 
  genus:'Delonix regia', 
  description:'Noted for its fern-like leaves and flamboyant display of orange-red flowers over summer.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flamboyant_BW_2.jpg/800px-Flamboyant_BW_2.jpg', 
  plantingnotes: 'Best grown in wet, tropical climates.')

@hibiscus = Plant.create!(
  name: 'Hibiscus', 
  genus:'Malvaceae Hibisceae', 
  description:'The flowers are large, conspicuous, trumpet-shaped, with five or more petals, colour from white to pink, red, orange, peach, yellow or purple.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hibiscus_flower_TZ.jpg/399px-Hibiscus_flower_TZ.jpg', 
  plantingnotes: 'Hibiscus flowers need to be potted on their own typically, and can be used for anything from consumption to folk medicine.')

@rosemary = Plant.create!(
  name: 'Rosemary', 
  genus:'Salvia rosmarinus', 
  description:'Rosemary is an aromatic evergreen shrub with leaves similar to hemlock needles. It is native to the Mediterranean and Asia, but is reasonably hardy in cool climates.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Rosemary_in_bloom.JPG/800px-Rosemary_in_bloom.JPG', 
  plantingnotes: 'The seeds are often difficult to start, with a low germination rate and relatively slow growth, but the plant can live as long as 30 years.')

  @chives = Plant.create!(
  name: 'Chives', 
  genus:'Allium schoenoprasum', 
  description:'Chives are a bulb-forming herbaceous perennial plant with a soft texture, although, prior to the emergence of a flower, they may appear stiffer than usual.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Allium_schoenoprasum_-_Bombus_lapidarius_-_Tootsi.jpg/800px-Allium_schoenoprasum_-_Bombus_lapidarius_-_Tootsi.jpg', 
  plantingnotes: 'Chives thrive in well-drained soil, rich in organic matter, with a pH of 6-7 and full sun.')

  @fennel = Plant.create!(
  name: 'Fennel', 
  genus:'Foeniculum vulgare', 
  description:'Fennel (Foeniculum vulgare) is a flowering plant species in the carrot family It is a hardy, perennial herb with yellow flowers and feathery leaves.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Fennel_flower_heads.jpg/800px-Fennel_flower_heads.jpg', 
  plantingnotes: 'It propagates well by seed, and is considered an invasive species and a weed in Australia and the United States.')

  @lavender = Plant.create!(
  name: 'Lavender', 
  genus:'Lavandula', 
  description:'Lavandula (common name lavender) is a genus of 47 known species of flowering plants in the mint family, Lamiaceae.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Single_lavendar_flower02.jpg/800px-Single_lavendar_flower02.jpg', 
  plantingnotes: 'Because the cultivated forms are planted in gardens worldwide, they are occasionally found growing wild as garden escapes, well beyond their natural range.')

  @petunia = Plant.create!(
  name: 'Petunia', 
  genus:'Petunia Petunioideae', 
  description:'Petunia is genus of 20 species of flowering plants of South American origin.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Petunia.jpg', 
  plantingnotes: '')

  @sunflower = Plant.create!(
  name: 'Sunflower', 
  genus:'Helianthus', 
  description:'Sunflowers are usually tall annual or perennial plants that in some species can grow to a height of 300 cm (120 in) or more.', 
  imageurl:'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg', 
  plantingnotes: 'To grow best, sunflowers need full sun. They grow best in fertile, moist, well-drained soil with heavy mulch. In commercial planting, seeds are planted 45 cm (1.48 ft) apart and 2.5 cm (0.98 in) deep.')

  @buttercup = Plant.create!(
    name: 'Creeping Buttercup', 
    genus:'Ranunculus repens', 
    description:'The flowers are golden yellow, glossy, and 2–3 cm diameter, usually with five petals, and the flower stem is finely grooved.', 
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Creeping_butercup_close_800.jpg/712px-Creeping_butercup_close_800.jpg',
    plantingnotes: 'Like most buttercups, Ranunculus repens is poisonous, although when dried with hay these poisons are lost.')

  @southernmagnolia = Plant.create!(
    name: 'Southern Magnolia', 
    genus:'Magnolia grandiflora', 
    description:'The large, showy, lemon citronella-scented flowers are white, up to 30 cm across and fragrant, with six to 12 petals with a waxy texture, emerging from the tips of twigs on mature trees in late spring.', 
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Magn%C3%B2lia_a_Verbania.JPG/800px-Magn%C3%B2lia_a_Verbania.JPG',
    plantingnotes: 'It is recommended for seashore plantings in areas that are windy but have little salt spray. The foliage will bronze, blotch, and burn in severe winters at the northern limits of cultivation, especially when grown in full winter sun, but most leaves remain until they are replaced by new foliage in the spring.')

Garden.create!(name:'Garden 1', user: @user, plants: [@montbretia, @dahlia, @strawberries, @southernmagnolia])