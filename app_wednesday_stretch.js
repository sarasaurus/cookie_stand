'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];
//GLOBAL METHODS
var randNum = function (min, max) {
  return Math.random() * (max - min) + min;
};
//creates header row
var printRow = function (firstCell, data, lastCell) {
  var firstTblEl = document.getElementById('tbl-body');
  var firstEl = document.createElement('th');
  var lastEl = document.createElement('th');
  firstEl.textContent = firstCell;
  lastEl.textContent = lastCell;
  firstTblEl.appendChild(firstEl);
  for (var j = 0; j < data.length; j++) {
    var tblEl = document.getElementById('tbl-body');
    var thEl = document.createElement('th');
    thEl.textContent = data[j];
    tblEl.appendChild(thEl);
  }
  firstTblEl.appendChild(lastEl);
};
var printArrRow = function (arrData, arrAccross, arrDown) {
  var addRow = document.getElementsByTagName('tr')[arrAccross.length - 1];
  for (var i = 0; i < arrDown.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = arrData[i];
    addRow.appendChild(tdEl);
  }
};
//creates header row
var printRow = function (firstCell, data, lastCell) {
  var firstTblEl = document.getElementById('tbl-body');
  var firstEl = document.createElement('th');
  var lastEl = document.createElement('th');
  firstEl.textContent = firstCell;
  lastEl.textContent = lastCell;
  firstTblEl.appendChild(firstEl);
  for (var j = 0; j < data.length; j++) {
    var tblEl = document.getElementById('tbl-body');
    var thEl = document.createElement('th');
    thEl.textContent = data[j];
    tblEl.appendChild(thEl);
  }
  firstTblEl.appendChild(lastEl);
};
var printArrRow = function (arrData, arrAccross, arrDown) {
  var addRow = document.getElementsByTagName('tr')[arrAccross.length - 1];
  for (var i = 0; i < arrDown.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = arrData[i];
    addRow.appendChild(tdEl);
  }
};
//store object
function Store (location, min, max, avgSales) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totalSales = 0;
  stores.push(this);
  this.salesPerHour();
  console.log('what store: ', this);

}
//OBJECT METHODS
//create daily Sales
Store.prototype.dailySales = function () {
  return Math.round (this.avgSales * randNum(this.min, this.max));
};
//create hourly Sales
Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    this.hourlySales.push (this.dailySales());//pushing product to the array 'hourlySales'
    this.totalSales += this.hourlySales[i];
  }
};

//ESTABLISHED STORES
new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//NEW STORE FORM
var formEl = document.getElementById('main-form');
function onSubmit(event) {//event is a predefined function!
  event.preventDefault();//no lose data on refresh
  var newStore = {
    location: event.target.location.value,
    min: parseInt(event.target.min.value, 10),
    max: parseInt(event.target.max.value, 10),
    avgSales: parseFloat(event.target.avgSales.value),
  };
  var addStore = new Store (newStore.location, newStore.min, newStore.max, newStore.avgSales);
  addStore.printStores();
  addStore.printNew();
  addStore.printNewTotal();

}
formEl.addEventListener('submit', onSubmit);

//WRITE TO PAGE FUNCTIONS IN THEIR WRITE ORDER
//creates heaeder row
var printRow = function (firstCell, data, lastCell) {
  var firstTblEl = document.getElementById('tbl-body');
  var firstEl = document.createElement('th');
  var lastEl = document.createElement('th');
  firstEl.textContent = firstCell;
  lastEl.textContent = lastCell;
  firstTblEl.appendChild(firstEl);
  for (var j = 0; j < data.length; j++) {
    var tblEl = document.getElementById('tbl-body');
    var thEl = document.createElement('th');
    thEl.textContent = data[j];
    tblEl.appendChild(thEl);
  }
  firstTblEl.appendChild(lastEl);
};
//creates vert header
Store.prototype.printStores = function () {
  var tblEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  trEl.textContent = this.location;
  tblEl.appendChild(trEl);
  console.log('what stores we got: ', stores);
  console.log('how many we got: ', stores.length);
};
//populates Data
Store.prototype.printData = function () {
  for (var j = 0; j < stores.length; j++) {
    var position = document.getElementsByTagName('tr')[j];
    for (var i = 0; i < hours.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = stores[j].hourlySales[i];
      position.appendChild(tdEl);
    }
  }
};
//creates vertical footer
Store.prototype.printTotal = function () {
  for (var j = 0; j < stores.length; j++) {
    var position = document.getElementsByTagName('tr')[j];
    var tdEl = document.createElement('td');
    tdEl.textContent = stores[j].totalSales;
    position.appendChild(tdEl);
  }
};
//NEW STORE TO PAGE
Store.prototype.printNew = function () {
  var addRow = document.getElementsByTagName('tr')[stores.length - 1];

  console.log('where we on page:', stores.length - 1);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i];
    console.log('hourly sales: ', this.hourlySales[i]);
    addRow.appendChild(tdEl);
  }
};
Store.prototype.printNewTotal = function () {
  var trEl = document.getElementsByTagName('tr')[stores.length - 1];
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
};
//Get HOURLY TOTALS
Store.prototype.hourlyTotals = function () {
  var addRow = document.getElementsByTagName('tr')[stores.length];
  for (var i = 0; i < hours.length; i++) {
    //var trEl = document.getElementsByTagName('tr')[i + 1];
    var tdElGetter = document.getElementsByTagName('td')[i + 1];
    var tdEl = document.createElement('td');
    var getTotal = parseInt(tdElGetter.textContent, 10);
    tdEl.textContent = this.hourlySales[i];
    addRow.appendChild(tdEl);
  }
};

//PRINT TO PAGE CALLS
printRow ('', hours, 'TOTAL');
for (var j = 0; j < stores.length; j++) {
  stores[j].printStores();
}
Store.prototype.printData();
Store.prototype.printTotal();
