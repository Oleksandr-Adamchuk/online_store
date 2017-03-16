class PagesController < ApplicationController
  def index
    @category = Category.first(5)
  end
end
