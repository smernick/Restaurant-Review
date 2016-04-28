$(function() {
  $('#find').click(app.restaurant.controller.new)

  $('body').on('click', '.show_restaurant', app.restaurant.controller.show)

})


app.restaurant.controller = {
  new: function(event){
    event.preventDefault
    var longitude = $('#info').text().split(" ")[0].replace(/,/g, '')
    var latitude = $('#info').text().split(" ")[1]
    $.ajax({
      url: '/restaurants',
      method: 'POST',
      data: {longitude: longitude, latitude: latitude}
    }).success(function(response){
      $('#restaurant_list').empty()
      response.restaurants.forEach(function(restaurant){
        var newRestaurant = new app.restaurant.model.new(restaurant.name, restaurant.category, restaurant.phone, restaurant.rating_integer, restaurant.rating_url, restaurant.latitude, restaurant.longitude, restaurant.distance, restaurant.address)



        $('#restaurantList ul').append("<li class='show_restaurant' id=" + newRestaurant.id + ">" + newRestaurant.name + "</li>")

        var latLng = new google.maps.LatLng(restaurant.latitude, restaurant.longitude);

        var marker = new google.maps.Marker({
          position: latLng,
          title: restaurant.name,
          map: map,
          draggable: false
        });
      })
    })
  },
  show: function(event){
    event.preventDefault
    debugger;
    var id = this.id
    var restaurant = app.restaurant.model.findBy({id: id})[0]
    


  }
}
