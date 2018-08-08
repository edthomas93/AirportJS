function Airport() {
  this.planes = []
};

Airport.prototype.land = function (plane) {
  this.planes.push(plane);
};

Airport.prototype.launch = function (plane) {
  this.planes.pop(plane);
};
