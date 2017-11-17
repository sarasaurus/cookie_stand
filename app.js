'use strict';
//GLOBAL METHODS
function randNum(min, max) {
  return Math.random() * (max - min) + min;
}

//creates row
function printRow(firstCell, data, lastCell, cellType) {
  var firstTblEl = document.getElementById('tbl-body');
  var rowEl = document.createElement('tr');
  var firstEl = document.createElement(cellType);
  rowEl.appendChild(firstEl);
  firstEl.textContent = firstCell;
  firstTblEl.appendChild(rowEl);
  for (var j = 0; j < data.length; j++) {
    var thEl = document.createElement(cellType);
    thEl.textContent = data[j];
    rowEl.appendChild(thEl);
  }
  var lastEl = document.createElement(cellType);
  rowEl.appendChild(lastEl);
  lastEl.textContent = lastCell;
}

//creates table
function printTable(firstCell, data, lastCell, cellType) {
  printRow (firstCell, data, lastCell, cellType);
  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    printRow (store.location, store.hourlySales, store.totalSales, 'td');
  }

}

//store object
function Store (location, min, max, avgCookie) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.hourlySales = [];
  this.totalSales = 0;
  stores.push(this);
  this.salesPerHour();
  console.log('what store: ', this);
}

//OBJECT METHODS
//create daily Sales
Store.prototype.cookiesPerHour = function () {
  return Math.round (this.avgCookie * randNum(this.min, this.max));
};
//create hourly Sales
Store.prototype.salesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlySales.push (this.cookiesPerHour());//pushing product to the array 'hourlySales'
    this.totalSales += this.hourlySales[i];
  }
};

//EVENT OBJECT
function onSubmit(event) {//event is a predefined function!
  event.preventDefault();//no lose data on refresh
  var newStore = {
    location: event.target.location.value,
    min: parseInt(event.target.min.value, 10),
    max: parseInt(event.target.max.value, 10),
    avgCookie: parseFloat(event.target.avgCookie.value),
  };
  new Store (newStore.location, newStore.min, newStore.max, newStore.avgCookie);
  table.innerHTML = '';
  printTable(' ', hours, 'TOTAL', 'th');
  printRow('Hourly Totals', hours, 'TOTAL SALES ACCROSS STORES', 'td')
}

function prepareEventListener () {
  var formEl = document.getElementById('main-form');
  formEl.addEventListener('submit', onSubmit);
}

//developement final total row:
function calculateHourlyTotals (){
  for (var i = 0; i < stores.length; i++) {
    hourlyTotals.push (hourlyTotals[i] += Store.hourlySales[i]);
  }
}


//EXECUTION_________________________________________________________________
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [];
var table = document.getElementById('tbl-body');
var hourlyTotals = [];

//ESTABLISHED STORES
new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//Attaching Event Listener
prepareEventListener ();

//established store PRINT TO PAGE CALLS

printTable (' ', hours, 'TOTAL', 'th');
