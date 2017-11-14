'use strict';
//store object
function Store (name, min, max, avgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
};

//Methods
var custPerHour = function () {
  return Math.random() * (max - min) + min;
};
var salesPerHour = function () {
  for (var i = 0; i <= this.hours.length; i++) {
    var outputProduct = Math.round (this.avgCookie * this.custPerHour());
    //console.log('outputProduct: ', outputProduct);
    this.output.push (outputProduct);//pushing product to the array 'output'
    this.totalSales += outputProduct;
};
var writeToPage = function () {
  var parent = document.getElementById('pike');
  var childTotal = document.createElement('li');

  for (var j = 0; j < this.hours.length; j++) {
    var child = document.createElement('li');
    child.textContent = this.hours[j] + ': ' + this.output[j];
    parent.appendChild(child);
  }
  childTotal.textContent = 'TOTAL: ' + this.totalSales;
  child.appendChild(childTotal);
},


//create proptoype functions

Store.prototype.custPerHour ();

//CODE FROM MONDAY
