var storePike = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  hours:['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  custPerHour: function getRandomArbitrary() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  salesPerHour: function () {
    //console.log(this.avgCookie);
    var output = [];
    for (var i = 0; i <= this.hours.length; i++) {
      output.push (Math.round (this.avgCookie * this.custPerHour()));
    }
    return output;
  },

  writeToPage: function () {
    for (var j = 0; j < this.hours.length; j++) {
      var parent = document.getElementById('parent');
      var child = document.createElement('li');
      child.textContent = this.hours[j];
      parent.appendChild(child);
    }
  }
};



/*document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv); */






var storeSeaTac = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,

};
var storeSeaCent = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,

};
var storeCapHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,

};
var storeAlki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,


};
