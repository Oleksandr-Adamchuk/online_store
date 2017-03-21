class PagesController < ApplicationController
  def index
    @cat = Category.first(5)
    @products = Product.first(10)
    @order_item = current_order.order_items.new
    @categ = Category.all
  end
end
