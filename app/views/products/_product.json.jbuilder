json.extract! product, :id, :name, :price, :description, :cost, :qty, :weight, :image, :created_at, :updated_at
json.url product_url(product, format: :json)
