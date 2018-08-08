function Airport(capacity = 5) {
  this.planes = [];
  this.weather = new Weather();
  this.capacity = capacity;
};

Airport.prototype.land = function (plane) {
  if (this.stormy()) {
    throw new Error('Weather too stormy to land');
  }
  else if (this.planes.length >= this.capacity) {
    throw new Error('Airport too full to land');
  }
  else {
    this.planes.push(plane);
  };
};

Airport.prototype.launch = function (plane) {
  if (this.stormy()) {
    throw new Error('Weather too stormy to launch');
  }
  else {
    this.planes.pop(plane);
  };
};

Airport.prototype.stormy = function () {
  return this.weather.stormy();
};
