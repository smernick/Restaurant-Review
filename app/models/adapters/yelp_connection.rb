module Adapters
  class YelpConnection

    def self.find_restaurants(longitude,latitude)

      coordinates = {latitude: longitude, longitude: latitude}
      params = {term: 'food', limit: 10}
      locale = { lang: 'en' }

      @restaurants = Yelp.client.search_by_coordinates(coordinates, params, locale)

    end



  end
end
