module Adapters
  class RestaurantClient

    def self.find_restaurants(longitude, latitude)

      @restaurants = Adapters::YelpConnection.find_restaurants(longitude,latitude)


      @restaurants.businesses.collect do |restaurant|
        new_restaurant = Restaurant.new
        new_restaurant.name = restaurant.id if restaurant.id.present?
        new_restaurant.category = restaurant.categories if restaurant.categories.present?
        new_restaurant.phone = restaurant.phone if restaurant.phone.present?
        new_restaurant.rating_integer = restaurant.rating if restaurant.rating.present?
        new_restaurant.rating_url = restaurant.rating_img_url if restaurant.rating_img_url.present?
        new_restaurant.latitude = restaurant.location.coordinate.latitude if restaurant.location.coordinate.latitude.present?
        new_restaurant.longitude = restaurant.location.coordinate.longitude if restaurant.location.coordinate.longitude.present?
        new_restaurant.distance = restaurant.distance if restaurant.distance.present?
        new_restaurant.address = restaurant.location.display_address if restaurant.location.display_address.present?

        new_restaurant
      end
    end


  end
end
