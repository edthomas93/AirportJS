"use strict";

describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    plane = {};
    airport = new Airport();
  });


  describe('#land', function() {
    it('lands a plane if weather is not stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    it('lands a plane if weather is not stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.95);
      expect(function() { airport.land(plane) }).toThrowError("Weather too stormy to land");
    });
  });

  describe('#launch', function() {
    it('launches a plane if weather is not stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
      airport.launch(plane);
      expect(airport.planes.length).toEqual(0);
    });
    it('does not launch a plane if weather is stormy', function() {
      spyOn(Math, 'random').and.returnValues(0.6, 0.95);
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
      expect(function() { airport.launch(plane) }).toThrowError("Weather too stormy to launch");
    });
  });

  describe('#stormy', function() {
    it('delegates randomly stormy weather to instance of Weather', function() {
      spyOn(airport.weather, 'stormy');
      airport.stormy();
      expect(airport.weather.stormy).toHaveBeenCalled();
    });
  });
});
