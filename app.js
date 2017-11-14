'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var output = [];
var totalSales = 0;
var stores = [];

//store object
function Store (location, min, max, avgCookie) {
  this.name = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
}
//populating storeLocations


//METHODS
Store.custPerHour = function () {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.outputProduct = function () {
  Math.round (this.avgCookie * custPerHour());
};

Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    output.push (outputProduct);//pushing product to the array 'output'
    totalSales += outputProduct;
}
};
/*
Store.prototype.writeToPage = function () {
  var parent = document.getElementById('location');
  var childTotal = document.createElement('li');

  for (var j = 0; j < this.hours.length; j++) {
    var child = document.createElement('li');
    child.textContent = this.hours[j] + ': ' + this.output[j];
    parent.appendChild(child);
  }
  childTotal.textContent = 'TOTAL: ' + this.totalSales;
  child.appendChild(childTotal);
};
store.*/
