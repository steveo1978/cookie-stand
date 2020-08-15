'use strict';

//console.log('hello world');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomCustNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}

//create Seattle object literal
var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerHour: 6.3,
  custPerHourArray: [],
  cookiesPerHourArray: [], //sales array
  totalDailySales: 0,
  //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
  calcCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCust = getRandomCustNumber(this.minCust, this.maxCust);
      this.custPerHourArray.push(hourlyCust);
    }
  },
  //calc number of cookies per hour. Multiply customers at that hour by the avrage cookies per hour and push into cookies per hour array.
  calcCookiesPerHour: function () {
    this.calcCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.custPerHourArray[i] * this.avgCookiesPerHour);
      this.cookiesPerHourArray.push(hourlyCookies);
    }
  },
  render: function () {
    this.calcCookiesPerHour();


    var parentEl = document.getElementById('seattle');
    for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
      parentEl.appendChild(liEl);

    }
    //insert logic here.

    seattle = document.getElementById('seattle');
    for (i = 0; i < this.sales.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
      seattle.append(liEl);

    }
  }
};
seattle.render();
console.log(seattle.custPerHourArray);

//sourced from math.random doc's


