$(function() {
  // $('#find').click(app.restaurant.controller.new)
  //
  // $('body').on('click', '.show_restaurant', app.restaurant.controller.show)

})


app.citation.controller = {
  new: function(event, this){
    var id = this.id
    var restaurant = app.restaurant.model.findBy({id: id})[0]

    debugger;

    $.ajax({
      url: '/restaurants',
      method: 'POST',
      data: {longitude: longitude, latitude: latitude}
    })

  }
}
