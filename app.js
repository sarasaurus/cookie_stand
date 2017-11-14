var storePike = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
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

};

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
