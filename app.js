'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];
//var alki = 'location', 34, 34, 34;

//store object
function Store (location, min, max, avgSales) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
  stores.push(this);
  console.log('what store: ', this);

}

//populating storeLocations
new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//METHODS
Store.prototype.randNum = function () {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.dailySales = function () {
  return Math.round (this.avgSales * this.randNum());
};

Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    this.hourlySales.push (this.dailySales());//pushing product to the array 'hourlySales'
    this.totalSales += this.hourlySales[i];
  }

};

for (var i = 0; i <= stores.length; i++) {
  stores[i].salesPerHour();
}

//WRITE TO PAGE
Store.prototype.createRow = function () {
  var tblEl = document.getElementById('hours-tbl');
  var thEl = document.getElementById('t head')
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td')
  tdEl.textContent = hours[i];
  tblEl.appendChild(trEl).appendChild(tdEl);
};

for (var j = 0; j <= hours.length; j++) {
  hours[j].createRow();
}

/*for (var i = 0; i < stores.length; i++) {
  trEl.textContent = this.location;
  trEl.appendChild(tblEl);
}
*/
for (var j = 0; j < hours.length; j++) {
  trEl.textContent = hours[j];
  tblEl.appendChild(trEl);
}
