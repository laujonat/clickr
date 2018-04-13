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
Album.destroy_all
Comment.destroy_all
Tag.destroy_all
Album.destroy_all
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


photoseed21 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed21-min.jpg'))
photoseed22 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed22-min.jpg'))
photoseed23 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed23-min.jpg'))
photoseed24 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed24-min.jpg'))
photoseed25 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed25-min.jpg'))
photoseed26 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed26-min.jpg'))
photoseed27 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed27-min.jpg'))
photoseed28 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed28-min.jpg'))
photoseed29 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed29-min.jpg'))
photoseed30 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed30-min.jpg'))
photoseed31 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed31-min.jpg'))
photoseed32 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed32-min.jpg'))
photoseed33 = File.open(File.join(Rails.root, 'app/assets/images/seeds/photos/seed33-min.jpg'))

users = User.all
id1 = users[0].id
id2 = users[1].id
id3 = users[2].id
id4 = users[3].id
id5 = users[4].id

Photo.create(user_id: id2, title: "Everyday", description: "Looking puzzled, in a daze.", photo_url: photoseed5)
Photo.create(user_id: id5, title: "Yes", description: "Can't you see?", photo_url: photoseed20)
Photo.create(user_id: id1, title: "Wood Everywhere", description: "One more time", photo_url: photoseed31)
Photo.create(user_id: id2, title: "Would Wood", description: "And I said baby, baby", photo_url: photoseed32)
Photo.create(user_id: id3, title: "Woody Can", description: "Oh No, oh yeah.", photo_url: photoseed33)
Photo.create(user_id: id4, title: "Thickional", description: "It's like a journey.", photo_url: photoseed15)
Photo.create(user_id: id3, title: "Musk of Man", description: "Life is amazing.", photo_url: photoseed11)

Photo.create(user_id: id4, title: "Through Thick", description: "If I could slide.", photo_url: photoseed14)
Photo.create(user_id: id2, title: "Hustle", description: "We have no control.", photo_url: photoseed6)
Photo.create(user_id: id2, title: "All Day", description: "What is art?", photo_url: photoseed7)
Photo.create(user_id: id2, title: "Wood Chuck", description: "Bobby bobby yeah", photo_url: photoseed27)
Photo.create(user_id: id3, title: "Woody Woody", description: "Where in the wood is woody", photo_url: photoseed28)
Photo.create(user_id: id4, title: "Woods of Man", description: "Can you woody?", photo_url: photoseed29)
Photo.create(user_id: id5, title: "Man of Wood", description: "Woody like the woods.", photo_url: photoseed30)
Photo.create(user_id: id1, title: "Feelings", description: "Amazing times.", photo_url: photoseed2)

Photo.create(user_id: id1, title: "Detach", description: "Photography brings joy to life.", photo_url: photoseed1)
Photo.create(user_id: id3, title: "Into the Musk", description: "Through it all.", photo_url: photoseed10)
Photo.create(user_id: id1, title: "Music", description: "In your prayers.", photo_url: photoseed3)
Photo.create(user_id: id4, title: "Chucking the Light", description: "Full stacks are life", photo_url: photoseed24)
Photo.create(user_id: id5, title: "Light Wood", description: "You're hot and you're cold", photo_url: photoseed25)
Photo.create(user_id: id1, title: "Can you Woody?", description: "You say yes and then no", photo_url: photoseed26)
Photo.create(user_id: id3, title: "Musking through Things", description: "May the wolves bring howls.", photo_url: photoseed12)

Photo.create(user_id: id4, title: "Taken by Storm ", description: "Howling through today.", photo_url: photoseed13)
Photo.create(user_id: id5, title: "Taken Back", description: "Back to the start.", photo_url: photoseed18)
Photo.create(user_id: id4, title: "The Wards of Begin", description: "Far and thin.", photo_url: photoseed16)
Photo.create(user_id: id1, title: "Woods of Life", description: "Can you see.", photo_url: photoseed21)
Photo.create(user_id: id2, title: "Wood can Feel", description: "Sometimes I can believe.", photo_url: photoseed22)
Photo.create(user_id: id3, title: "Can the Wood Chuck", description: "In a haze. I am boss", photo_url: photoseed23)
Photo.create(user_id: id2, title: "Dreams", description: "Once more, I open the door.", photo_url: photoseed8)

Photo.create(user_id: id5, title: "Backwards", description: "It begins here.", photo_url: photoseed17)
Photo.create(user_id: id5, title: "Once", description: "Change of pace.", photo_url: photoseed19)
Photo.create(user_id: id3, title: "Words of Woody", description: "I believe the one", photo_url: photoseed9)
Photo.create(user_id: id1, title: "Touch", description: "Enjoy today.", photo_url: photoseed4)


photos = Photo.all
# photo_id1 = photos[0].id
# photo_id2 = photos[1].id
# photo_id3 = photos[2].id
# photo_id4 = photos[3].id
# photo_id5 = photos[4].id
# photo_id6 = photos[5].id
# photo_id7 = photos[6].id
# photo_id8 = photos[7].id
# photo_id9 = photos[8].id
# photo_id10 = photos[9].id
# photo_id11 = photos[10].id
# photo_id12 = photos[11].id
# photo_id13 = photos[12].id
# photo_id14 = photos[13].id
# photo_id15 = photos[14].id
# photo_id16 = photos[15].id
# photo_id17 = photos[16].id
# photo_id18 = photos[17].id
# photo_id19 = photos[18].id
# photo_id20 = photos[19].id
# photo_id21 = photos[20].id
# photo_id22 = photos[21].id
# photo_id23 = photos[22].id
# photo_id24 = photos[23].id
# photo_id25 = photos[24].id
# photo_id26 = photos[26].id
# photo_id27 = photos[27].id
# photo_id28 = photos[28].id
# photo_id29 = photos[29].id
# photo_id30 = photos[30].id
# photo_id31 = photos[31].id
# photo_id32 = photos[32].id


tags_arr = ["love", "blue", "abstract", "ocean", "tech", "sf", "eye", "cool", "nature", "bokeh",
"flora", "eos", "friends", "lady", "d750", "printemps", "florida", "mist", "circles", "tamron", "maitreya", "brown",
"opaque", "water", "sky", "sunset", "beach", "red", "flower", "tree", "white", "green", "yellow", "purple",
"orange", "yes", "never", "back", "bliss", "wonderful", "beautiful", "beauty", "temp", "mes", "nice", "best",
"price", "sweet", "canon", "nikon", "leica"]

photos.each do |photo|
  tags_arr.each do |tag|
    sample_photo = Photo.all.sample
    sample_user = User.all.sample
    sample_tag = tags_arr.sample
    Tag.create(
      photo_id: sample_photo.id,
      user_id: sample_user.id,
      body: sample_tag
    )
  end
end

comment_arr = ["This is amazing!", "Love this shot", "I could look at this forever.", "This is mesmerizing.", "This is great!",
"Teach me!", "Wow, look at your.", "Nice shot!", "Amazeballs!", "Yes!", "I love this. Reminds me of Woody.", "Woody is woody.",
"Yes, Woody!", "I see Woody!", "I see the Woody!!", "!!!!", "Woody is in the forest!", "I love this so much!", "Brings me back!",
"Good job!", "You've got talent!"]

users.each do |user|
  comment_arr.each do |comment|
    2.times do
      sample_photo = Photo.all.sample
      Comment.create!(
        photo_id: sample_photo.id,
        user_id: user.id,
        body: comment
      )
    end
  end
end

description_arr = ["Vacation abroad"]
name_arr = ["Vacation", "Artsy Photos"]

users.each do |user|
  5.times do
    name = name_arr.sample
    album = Album.create(user_id: user.id,  name: name, description: description_arr.sample) unless user.albums.find_by(name: name)
    album_photo_ids = []
    10.times do
      album_photo_id = user.photos.sample.id
      album_photo_ids.push(album_photo_id) unless album_photo_ids.include?(album_photo_id)
    end

    album_photo_ids.each do |id|
      AlbumPhoto.create(album_id: album.id, photo_id: id) if album
    end
  end
end


# def create
#   # debugger
#   @album = Album.new(album_params)
#   @album.user_id = current_user.id
#   photo_ids = JSON.parse(params[:photo_ids])
#   if photo_ids && !photo_ids.empty? && @album.save
#     photo_ids.each do |id|
#       AlbumPhoto.create(album_id: @album.id, photo_id: id)
#     end
#     render :show
#   else
#     render json: ["Creating album error"], status: 422
#   end
# end













# add demo user
# User.create(username: "Demo User", password: "democlickr123", email: "demo@clickr.com", fname:'Demo', lname: "Human")
