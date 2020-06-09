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

@anemone = Plant.create!(name: 'Anemone', genus:'Anemone', description:'Anemone are perennials that have basal leaves with long leaf-stems that can be upright or prostrate. Leaves are simple or compound with lobed, parted, or undivided leaf blades. The leaf margins are toothed or entire.', imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Anemones5.jpg/220px-Anemones5.jpg', plantingnotes: 'Garden-cultivated anemones generally grow best in a loamy well-drained evenly-moist fertile soil')
@montbretia = Plant.create!(name: 'Montbretia', genus:'Crocosmia', description:'They can be evergreen or deciduous perennials that grow from basal underground corms.', imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Iridaceae_-_Crocosmia_aurea-1.JPG/220px-Iridaceae_-_Crocosmia_aurea-1.JPG', plantingnotes: 'Crocosmia are winter-hardy in temperate regions. They can be propagated through division, removing offsets from the corm in spring.')
@dahlia = Plant.create!(name: 'Dahlia', genus:'Dahlia Pinnata', description:'Dahlias are perennial plants with tuberous roots, though they are grown as annuals in some regions with cold winters.', imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/220px-Dahlia_x_hybrida.jpg', plantingnotes: 'Dahlias grow naturally in climates which do not experience frost, consequently they are not adapted to withstand sub-zero temperatures.')
@strawberries = Plant.create!(name: 'Strawberries', genus:'Fragaria', description:'Strawberries are not true berries. The fleshy and edible part of the fruit is a receptacle, and the parts that are sometimes mistakenly called seeds are achenes.', imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/103_Fragaria_vesca_L.jpg/220px-103_Fragaria_vesca_L.jpg', plantingnotes: 'Garden-cultivated anemones generally grow best in a loamy well-drained evenly-moist fertile soil')


Garden.create!(name:'Garden 1', user: @user, plants: [@montbretia, @dahlia, @strawberries])
