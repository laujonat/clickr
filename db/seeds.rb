# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create(username: "jonathan", password: "123456", email: "jon@jon.com", fname:'Jonathan', lname: "Great")
User.destroy_all
Photo.destroy_all
usernames = ["AnakinyourKin", "ReyOhYey", "KyloIsBad", "HanSoSolo", "DemoAccount", ]
emails = ["anakin@gmail.com", "Rey@yahoo.com", "Kylo@yahoo.com", "Han@msn.com", "demo@clickr.com"]
fnames = ["Anakin", "Rey", "Kylo", "Han", "Woods"]
lnames = ["Skywalker", "Lei", "Ren",  "Solo", "Woody"]
passwords = ["123456", "123456", "123456", "123456", "123456"]

user1_avatar = File.open(File.join(Rails.root, 'app/assets/images/seeds/avatars/anakin.png'))
user2_avatar = File.open(File.join(Rails.root, 'app/assets/images/seeds/avatars/ren.png'))
user3_avatar = File.open(File.join(Rails.root, 'app/assets/images/seeds/avatars/kylo.png'))
user4_avatar = File.open(File.join(Rails.root, 'app/assets/images/seeds/avatars/dennis.png'))
user5_avatar = File.open(File.join(Rails.root, 'app/assets/images/seeds/avatars/woody.png'))

user1_cover = File.open(File.join(Rails.root, 'app/assets/images/seeds/cover_photos/2_cover.png'))
user2_cover = File.open(File.join(Rails.root, 'app/assets/images/seeds/cover_photos/3_cover.png'))
user3_cover = File.open(File.join(Rails.root, 'app/assets/images/seeds/cover_photos/4_cover.png'))
user4_cover = File.open(File.join(Rails.root, 'app/assets/images/seeds/cover_photos/5_cover.png'))
user5_cover = File.open(File.join(Rails.root, 'app/assets/images/seeds/cover_photos/anakin_cover.png'))

cover_photos = [
  user1_cover, user2_cover, user3_cover, user4_cover, user5_cover
]

avatars = [
  user1_avatar, user2_avatar, user3_avatar, user4_avatar, user5_avatar
]


usernames.length.times do |i|
  User.create(
    username: usernames[i],
    email: emails[i],
    password: passwords[i],
    fname: fnames[i],
    lname: lnames[i],
    avatar: avatars[i],
    cover_photo: cover_photos[i]
  )
end


photoseed1 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed1-min.jpg'))
photoseed2 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed2-min.jpg'))
photoseed3 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed3-min.jpg'))
photoseed4 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed4-min.jpg'))
photoseed5 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed5-min.jpg'))
photoseed6 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed6-min.jpg'))
photoseed7 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed7-min.jpg'))
photoseed8 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed8-min.jpg'))
photoseed9 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed9-min.jpg'))
photoseed10 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed10-min.jpg'))
photoseed11 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed11-min.jpg'))
photoseed12 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed12-min.jpg'))
photoseed13 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed13-min.jpg'))
photoseed14 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed14-min.jpg'))
photoseed15 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed15-min.jpg'))
photoseed16 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed16-min.jpg'))
photoseed17 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed17-min.jpg'))
photoseed18 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed18-min.jpg'))
photoseed19 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed19-min.jpg'))
photoseed20 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed20-min.jpg'))

users = User.all
id1 = users[0].id
id2 = users[1].id
id3 = users[2].id
id4 = users[3].id
id5 = users[4].id

Photo.create(user_id: id2, title: "Everyday", description: "Looking puzzled, in a daze.", photo_url: photoseed5)
Photo.create(user_id: id5, title: "Yes", description: "Can't you see?", photo_url: photoseed20)
Photo.create(user_id: id4, title: "Thickional", description: "It's like a journey.", photo_url: photoseed15)
Photo.create(user_id: id3, title: "Musk of Man", description: "Life is amazing.", photo_url: photoseed11)

Photo.create(user_id: id4, title: "Through Thick", description: "If I could slide.", photo_url: photoseed14)
Photo.create(user_id: id2, title: "Hustle", description: "We have no control.", photo_url: photoseed6)
Photo.create(user_id: id2, title: "All Day", description: "What is art?", photo_url: photoseed7)
Photo.create(user_id: id1, title: "Feelings", description: "Amazing times.", photo_url: photoseed2)

Photo.create(user_id: id1, title: "Detach", description: "Photography brings joy to life.", photo_url: photoseed1)
Photo.create(user_id: id3, title: "Into the Musk", description: "Through it all.", photo_url: photoseed10)
Photo.create(user_id: id1, title: "Music", description: "In your prayers.", photo_url: photoseed3)
Photo.create(user_id: id3, title: "Musking through Things", description: "May the wolves bring howls.", photo_url: photoseed12)

Photo.create(user_id: id4, title: "Taken by Storm ", description: "Howling through today.", photo_url: photoseed13)
Photo.create(user_id: id5, title: "Taken Back", description: "Back to the start.", photo_url: photoseed18)
Photo.create(user_id: id4, title: "The Wards of Begin", description: "Far and thin.", photo_url: photoseed16)
Photo.create(user_id: id2, title: "Dreams", description: "Once more, I open the door.", photo_url: photoseed8)

Photo.create(user_id: id5, title: "Backwards", description: "It begins here.", photo_url: photoseed17)
Photo.create(user_id: id5, title: "Once", description: "Change of pace.", photo_url: photoseed19)
Photo.create(user_id: id3, title: "Words of Woody", description: "I believe the one", photo_url: photoseed9)
Photo.create(user_id: id1, title: "Touch", description: "Enjoy today.", photo_url: photoseed4)













# add demo user
# User.create(username: "Demo User", password: "democlickr123", email: "demo@clickr.com", fname:'Demo', lname: "Human")
