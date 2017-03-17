# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
include Faker

images_all = Dir.glob("app/assets/images/*.png")

arr_of_medium_images = Array.new

images_all.each do |i| 
  if (/medium/ =~ i)
    arr_of_medium_images << i
  end
end

images = []
arr_of_medium_images.each do |elem|
  elem[0..17] = ''
  images << elem
end
puts images

Product.destroy_all
Category.destroy_all

category_arr = %w(Bakewar Cooking Utensils Cooks_Tools Cookware Cookware_sets Cutlery Dinnerware Electrics Gadgets Pans_&_Skillets Specials )

puts category_arr
category_arr.each do |categ|
  category = Category.create!(
                              name: categ,
                              description: "#{Lorem.paragraph(sentence_count = 15)}",
                              image: images[rand(images.length)]
                             )
               
                 puts category.inspect
end 

200.times do 
  product = Product.create(
                          name: "#{Commerce.product_name}",
                          description: "#{Lorem.paragraph(sentence_count = 10)}",
                          price: rand(5..150),
                          cost:  rand(5..150),
                          qty: rand(1..1000),
                          weight: rand(1..20),
                          image: images[rand(images.length)],
                          image_2: images[rand(images.length)],
                          category_id: rand(1..11),
                          active: true
                          
                          )
  puts product.inspect
end


OrderStatus.delete_all
OrderStatus.create! id: 1, name: "In Progress"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"

