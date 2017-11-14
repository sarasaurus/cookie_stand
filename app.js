var storePike = {
  min: 23,
  max: 65,
  output: [],
  avgCookie: 6.3,
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
      var parent = document.getElementById('pike');
      var child = document.createElement('li');
      child.textContent = this.hours[j] + ': ' + this.output[j];
      parent.appendChild(child);
    }
  }

};
storePike.salesPerHour();
storePike.writeToPage();

var storeSeaTac = {
  min: 23,
  max: 65,
  output: [],
  avgCookie: 6.3,
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
  min: 23,
  max: 65,
  output: [],
  avgCookie: 6.3,
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
  min: 23,
  max: 65,
  output: [],
  avgCookie: 6.3,
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
  min: 23,
  max: 65,
  output: [],
  avgCookie: 6.3,
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
