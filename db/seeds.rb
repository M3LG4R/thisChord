# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Channel.destroy_all

demo = User.create!({ username: "test", email: 'demo@demo.com', password: 'password' });
test_server = Server.new({name: "TEST SERVER PLEASE IGNORE"})
general = Channel.new({name: "general"})
test_server.owner = demo
test_server.channels << general
demo.servers << test_server

general.save!
test_server.save!
demo.save!

