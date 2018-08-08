"use strict";

describe("Airport", function() {

  var airport;
  var airport10;
  var plane;

  beforeEach(function() {
    plane = {};
    airport = new Airport();
    airport10 = new Airport(10);
  });


  describe('#land', function() {
    it('lands a plane if weather is not stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    it('does not land a plane if weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.95);
      expect(function() { airport.land(plane) }).toThrowError("Weather too stormy to land");
    });
    it('does not land a plane if full using default capacity', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      for (var i = 1; i < 6; i++) {
        airport.land(plane);
      };
      expect(airport.planes.length).toEqual(5);
      expect(function() { airport.land(plane) }).toThrowError("Airport too full to land");
    });
    it('does not land a plane if full using capacity 10', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      for (var i = 1; i < 11; i++) {
        airport10.land(plane);
      };
      expect(airport10.planes.length).toEqual(10);
      expect(function() { airport10.land(plane) }).toThrowError("Airport too full to land");
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

  describe('#capacity', function() {
    it('defaults to 5', function() {
      expect(airport.capacity).toEqual(5);
    });
    it('capacity is set to argument passed upon creation of airport', function() {
      expect(airport10.capacity).toEqual(10);
    });
  });
});
