describe("Place", function(){

  it("it will construct a place object with the correct name", function() {
    var testPlace = new Place("Pitch Lake","Trinidad", "Asphalt");
    expect(testPlace.placeName).to.equal("Pitch Lake");
    // expect(testPlace.placeLocation).to.equal("Trinidad");
    // expect(testPlace.placeDescription).to.equal("Asphalt");
  });

  it("it will construct a place object with the correct location", function() {
    var testPlace = new Place("Pitch Lake","Trinidad", "Asphalt");
    // expect(testPlace.placeName).to.equal("Pitch Lake");
    expect(testPlace.placeLocation).to.equal("Trinidad");
    // expect(testPlace.placeDescription).to.equal("Asphalt");
  });

  it("it will construct a place object with the correct description", function() {
    var testPlace = new Place("Pitch Lake","Trinidad", "Asphalt");
    // expect(testPlace.placeName).to.equal("Pitch Lake");
    // expect(testPlace.placeLocation).to.equal("Trinidad");
    expect(testPlace.placeDescription).to.equal("Asphalt");
  });

});
