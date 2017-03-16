class AddImage2ToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :image_2, :string
  end
end
