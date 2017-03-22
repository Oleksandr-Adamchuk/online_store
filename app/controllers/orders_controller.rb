class OrdersController < ApplicationController
  def new
    @order = Order.new
  end
  
  def create
    @order = Order.new(order_params)
    @order_items = current_order.order_items
    # @order.add_line_items_from_cart(@order_items)
    
    respond_to do |format|
      if @order.save
        
        session[:order_id] = nil
        format.html { redirect_to root_path, notice: 'Thank you for your order. Our manager will call you in a few minutes' }
        format.json { render action: 'show', status: :created,
        location: @order }
      else
        @cart = current_cart
        format.html { render action: 'new' }
        format.json { render json: @order.errors,
        status: :unprocessable_entity }
      end
    end
  end
  
 
  private
  
  def order_params
      params.require(:order).permit(:name, :address, :email, :phone)
  end
end
