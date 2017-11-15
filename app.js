'use strict';

// first we define a variable for where we want browser to listen
var formEl = document.getElementById('main-form');

//here we are creating our handler
//and attaching the collection of data to an event, here: onSubmit, so when submit button is pressed, is our event
function onSubmit(event) {//event is a predefined function!
  event.preventDefault();//no lose data on refresh
  var newStore = {
    location: event.target.location.value,
    min: parseInt(event.target.min.value, 10),
    max: parseInt(event.target.max.value, 10),
    avgCookie: parseInt(event.target.avgCookie.value, 10),
  };

  console.log('my form data', newStore);//loggin info stored in newStore Array
}

formEl.addEventListener('submit', onSubmit);//we are calling and attaching browser's listener to formEl (so everything in our form will be piquing browsers interest)

//NOW ADDING OBJ CONSTRUCTOR

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];

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

//Store Info
new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//METHODS
//generate customer
Store.prototype.randNum = function () {
  return Math.random() * (this.max - this.min) + this.min;
};

//create daily Sales
Store.prototype.dailySales = function () {
  return Math.round (this.avgSales * this.randNum());
};

//create hourly Sales
Store.prototype.salesPerHour = function () {
  for (var i = 0; i <= hours.length; i++) {
    this.hourlySales.push (this.dailySales());//pushing product to the array 'hourlySales'
    this.totalSales += this.hourlySales[i];
  }
};

//populating my store cards
for (var i = 0; i < stores.length; i++) {
  stores[i].salesPerHour();
}
