class PagesController < ApplicationController
  def index
    @cat = Category.first(5)
    @products = Product.all
    @order_item = current_order.order_items.new
  end
end
