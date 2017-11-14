'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var hourlySales = [];
var totalSales = 0;
var stores = [];

//store object
function Store (location, min, max, avgSales) {
  this.name = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
}
//populating storeLocations


//METHODS
Store.randNum = function () {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.dailySales = function () {
  Math.round (this.avgSales * randNum());
};

Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    hourlySales.push (dailySales);//pushing product to the array 'hourlySales'
    totalSales += dailySales;
}
};
/*
Store.prototype.writeToPage = function () {
  var parent = document.getElementById('location');
  var childTotal = document.createElement('li');

  for (var j = 0; j < this.hours.length; j++) {
    var child = document.createElement('li');
    child.textContent = this.hours[j] + ': ' + this.hourlySales[j];
    parent.appendChild(child);
  }
  childTotal.textContent = 'TOTAL: ' + this.totalSales;
  child.appendChild(childTotal);
};
store.*/
