'use strict';
var stores = [];

function Store (location, min, max, avgCookie) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
}

Store.prototype.returns = function() {
  return this.location, this.min, this.max, this.avgCookie;
};

for (var i = 0; i < 5; i ++) {
  var store = new Store (i + ' name', i + 25);
  stores.push(store);
}
//works
