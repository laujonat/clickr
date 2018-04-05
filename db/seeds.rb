# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create(username: "jonathan", password: "123456", email: "jon@jon.com", fname:'Jonathan', lname: "Great")
User.destroy_all
usernames = ["exportGuy13", "apertureBit001", "snapShotGirl344", "abgsnap123", "testdemo12"]
emails = ["export@gmail.com", "aperture@yahoo.com", "yahoo@yahoo.com", "msn@msn.com", "demo@demo.com"]
fnames = ["aaron", "jeffery", "annie", "altoids", "alizye"]
lnames = ["kim", "saratoga", "smith", "lee", "jimae"]
passwords = ["123456", "123456", "123456", "123456", "123456"]


usernames.length.times do |i|
  User.create(
    username: usernames[i],
    email: emails[i],
    password: passwords[i],
    fname: fnames[i],
    lname: lnames[i],
  )
end
