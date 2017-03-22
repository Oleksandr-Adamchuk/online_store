class AddColumnsToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :name, :string
    add_column :orders, :address, :text
    add_column :orders, :email, :string
    add_column :orders, :phone, :string
  end
end
