class AddColumnsToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :category, :string
    add_column :restaurants, :phone, :string
    add_column :restaurants, :address, :string
    add_column :restaurants, :rating_integer, :string
    add_column :restaurants, :rating_url, :string
    add_column :restaurants, :latitude, :integer
    add_column :restaurants, :longitude, :integer
    add_column :restaurants, :distance, :integer





  end
end
