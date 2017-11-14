'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];

//store object
function Store (location, min, max, avgSales) {
  this.name = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
}

//populating storeLocations
var pike = new Store ('1st and Pike', 23, 65, 6.3);
var seatac = new Store ('SeaTac Airport', 3, 24, 1.2);
var seacent = new Store ('Seattle Center', 11, 38, 3.7);
var caphill = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);


//METHODS
Store.prototype.addtoList = function (){
  stores.push(this);

};
Store.prototype.randNum = function () {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.dailySales = function () {
  Math.round (this.avgSales * this.randNum());
};

Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    this.hourlySales.push (this.dailySales);//pushing product to the array 'hourlySales'
    this.totalSales += this.dailySales;
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
