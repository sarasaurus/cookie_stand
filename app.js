'use strict';

// first we define a variable for where we want browser to listen
var formEl = document.getElementById('main-form');

//here we are creating our handler
//and attaching the collection of data to an event, here onSubmit, so when submit button is pressed, is our event
function onSubmit(event) {//event is a predefined function!
  event.preventDefault();//no lose data on refresh
  console.log('submit event', event.target.name.value);
  console.log('submit event', event.target.min.value);
  console.log('submit event', event.target.max.value);
  console.log('submit event', event.target.avgCookie.value);//are we trying to log collected data here?
  console.log('the form was submitted');//click happened bro

  var myFormData = {
    name: event.target.name.value,
    min: event.target.min.value,
    max: event.target.max.value,
    avgCookie: event.target.avgCookie.value,

  };

  // myFormData.num = event.target.num.value;
  // myFormData.em = event.target.em.value;
  // myFormData.pw = event.target.pw.value;
  // myFormData.rad = event.target.rad.value;
  // myFormData.check = event.target.check.value;

  console.log('my form data', myFormData);
}

formEl.addEventListener('submit', onSubmit);//we are calling and attaching browser's listener to formEl (so everything in our form will be piquing browsers interest)
