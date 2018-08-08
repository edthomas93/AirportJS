describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('#stormy', function() {
    it('returns true if stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.95)
      expect(weather.stormy()).toBe(true);
    });

    it('returns false if not stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.6)
      expect(weather.stormy()).toBe(false);
    });
  });
});
