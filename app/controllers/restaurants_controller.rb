class RestaurantsController < ApplicationController

  def create
    longitude = params[:longitude]
    latitude = params[:latitude]

    @restaurants = Adapters::RestaurantClient.find_restaurants(longitude,latitude)

    render json: {restaurants: @restaurants}
  end




end
