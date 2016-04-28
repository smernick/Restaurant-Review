class ChangeColumnTypeRestaurant < ActiveRecord::Migration
  def change
    change_column :restaurants, :latitude, :float
    change_column :restaurants, :longitude, :float
    change_column :restaurants, :distance, :float


  end
end
