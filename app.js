var storePike = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  total: 0,

  custPerHour: function getRandomArbitrary() {//getting random number of customers that vist per hour
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {//multiplying the number of customers by the avg cookie sale/customer
    //console.log(this.avgCookie);
    for (var i = 0; i <= this.hours.length; i++) {
      this.output.push (Math.round (this.avgCookie * this.custPerHour()));//pushing product to the array 'output'
    }
  },
  /*calcTotal: function () {
    for (var i = 0; i <= this.hours.length; i++) {
      this.output[i] += this.output[i];
    }
  },*/
  total: output.reduce( function(total, amount){//trying to add up all places in output
    return total + amount
  }),
  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('pike');//where we put
      var child = document.createElement('li');//what we add, a <li> element with....
      child.textContent = this.hours[j] + ': ' + this.output[j];//this content
      parent.appendChild(child);//now add the <li>text elements succesively to the parent element
    }
  }

};
storePike.salesPerHour();//need to call functions for them to run
storePike.writeToPage();

var storeSeaTac = {
  min: 3,
  max: 24,
  avgCookie: 1.2,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {
    //console.log(this.avgCookie);
    for (var i = 0; i <= this.hours.length; i++) {
      this.output.push (Math.round (this.avgCookie * this.custPerHour()));
    }
  },

  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('seatac');
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
  }

};
storeSeaTac.salesPerHour();
storeSeaTac.writeToPage();

var storeSeaCent = {
  min: 11,
  max: 38,
  avgCookie: 3.7,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {
    //console.log(this.avgCookie);
    for (var i = 0; i <= this.hours.length; i++) {
      this.output.push (Math.round (this.avgCookie * this.custPerHour()));
    }
  },

  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('seacent');
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
  }
};
storeSeaCent.salesPerHour();
storeSeaCent.writeToPage();

var storeCapHill = {
  min: 20,
  max: 38,
  avgCookie: 2.3,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {
    //console.log(this.avgCookie);
    for (var i = 0; i <= this.hours.length; i++) {
      this.output.push (Math.round (this.avgCookie * this.custPerHour()));
    }
  },

  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('caphill');
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
  }
};
storeCapHill.salesPerHour();
storeCapHill.writeToPage();

var storeAlki = {
  min: 2,
  max: 16,
  avgCookie: 4.6,
  output: [],
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {
    //console.log(this.avgCookie);
    for (var i = 0; i <= this.hours.length; i++) {
      this.output.push (Math.round (this.avgCookie * this.custPerHour()));
    }
  },

  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('alki');
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
  }
};
storeAlki.salesPerHour();
storeAlki.writeToPage();
