var storePike = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalSales: 0,

  custPerHour: function getRandomArbitrary() {//getting random number of customers that vist per hour
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    for (var i = 0; i <= this.hours.length; i++) {
      var outputProduct = Math.round (this.avgCookie * this.custPerHour());
      //console.log('outputProduct: ', outputProduct);
      this.output.push (outputProduct);//pushing product to the array 'output'
      this.totalSales += outputProduct;
    }
  },
  writeToPage: function () {
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

};
storePike.salesPerHour();//need to call functions for them to run
storePike.writeToPage();

var storeSeaTac = {
  min: 3,
  max: 24,
  avgCookie: 1.2,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalSales: 0,
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    for (var i = 0; i <= this.hours.length; i++) {
      var outputProduct = Math.round (this.avgCookie * this.custPerHour());
      //console.log('outputProduct: ', outputProduct);
      this.output.push (outputProduct);//pushing product to the array 'output'
      this.totalSales += outputProduct;
    }
  },
  writeToPage: function () {
    var parent = document.getElementById('seatac');
    var childTotal = document.createElement('li');

    for (var j = 0; j < this.hours.length; j++) {
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
    childTotal.textContent = 'TOTAL: ' + this.totalSales;
    child.appendChild(childTotal);
  },

};
storeSeaTac.salesPerHour();
storeSeaTac.writeToPage();

var storeSeaCent = {
  min: 11,
  max: 38,
  avgCookie: 3.7,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalSales: 0,
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    for (var i = 0; i <= this.hours.length; i++) {
      var outputProduct = Math.round (this.avgCookie * this.custPerHour());
      //console.log('outputProduct: ', outputProduct);
      this.output.push (outputProduct);//pushing product to the array 'output'
      this.totalSales += outputProduct;
    }
  },
  writeToPage: function () {
    var parent = document.getElementById('seacent');
    var childTotal = document.createElement('li');

    for (var j = 0; j < this.hours.length; j++) {
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
    childTotal.textContent = 'TOTAL: ' + this.totalSales;
    child.appendChild(childTotal);
  },
};
storeSeaCent.salesPerHour();
storeSeaCent.writeToPage();

var storeCapHill = {
  min: 20,
  max: 38,
  avgCookie: 2.3,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalSales: 0,
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    for (var i = 0; i <= this.hours.length; i++) {
      var outputProduct = Math.round (this.avgCookie * this.custPerHour());
      //console.log('outputProduct: ', outputProduct);
      this.output.push (outputProduct);//pushing product to the array 'output'
      this.totalSales += outputProduct;
    }
  },
  writeToPage: function () {
    var parent = document.getElementById('caphill');
    var childTotal = document.createElement('li');

    for (var j = 0; j < this.hours.length; j++) {
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
    childTotal.textContent = 'TOTAL: ' + this.totalSales;
    child.appendChild(childTotal);
  },
};
storeCapHill.salesPerHour();
storeCapHill.writeToPage();

var storeAlki = {
  min: 2,
  max: 16,
  avgCookie: 4.6,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalSales: 0,
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    for (var i = 0; i <= this.hours.length; i++) {
      var outputProduct = Math.round (this.avgCookie * this.custPerHour());
      //console.log('outputProduct: ', outputProduct);
      this.output.push (outputProduct);//pushing product to the array 'output'
      this.totalSales += outputProduct;
    }
  },
  writeToPage: function () {
    var parent = document.getElementById('alki');
    var childTotal = document.createElement('li');

    for (var j = 0; j < this.hours.length; j++) {
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
    childTotal.textContent = 'TOTAL: ' + this.totalSales;
    child.appendChild(childTotal);
  },
};
storeAlki.salesPerHour();
storeAlki.writeToPage();
