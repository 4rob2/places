function Place(name,location,description) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeDescription = description;
}



$(document).ready(function() {

  $('#placeForm').submit(function(event) {
    event.preventDefault();

    var placeName = $('#placeNameInput').val();
    var placeLocation = $('#placeLocationInput').val();
    var placeDescription = $('#placeDescriptionInput').val();

    var newPlace = new Place(placeName, placeLocation, placeDescription);

    $('#resultList').append("<li>"+ newPlace.placeName +"</li>");
  });
});
