function Weather() {

};

Weather.prototype.stormy = function() {
  return Math.random() >= 0.9;
};
