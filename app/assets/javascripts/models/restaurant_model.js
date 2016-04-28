app.restaurant.model = {
  all: [],
  new: (function(){
      var counter = 0;
      var userbook = function Restaurant(name, category, phone, rating_integer, rating_url, latitude, longitude, distance, address) {
      this.name = name;
      this.category = category;
      this.phone = phone;
      this.rating_integer = rating_integer;
      this.rating_url = rating_url;
      this.latitude = latitude;
      this.longitude = longitude;
      this.distance = distance;
      this.address = address;


      var self = this;
      (function initialize(){
        self.id = ++counter;
        app.restaurant.model.all.push(self);
      })()
    }
    return userbook;
  }()),
  findBy: function findBy(attributeHash){
    var key = Object.keys(attributeHash)[0];
    var value = attributeHash[key];
    return $.grep(app.restaurant.model.all, function(restaurant) {
      return restaurant[key] == value;
    })
  }
}
