class CreateProducts < ActiveRecord::Migration[5.0]
  
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.decimal :cost, precision: 8, scale: 2
      t.integer :qty
      t.decimal :weight, precision: 6, scale: 2
      t.string :image
      t.timestamps
    end
  end
end
