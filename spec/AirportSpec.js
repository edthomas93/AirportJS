"use strict";

describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {}
  });


  describe('#land', function() {
    it('can land a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe('#launch', function() {
    it('can launch a plane', function() {
      airport.land(plane);
      airport.launch(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });
});
