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
  totalDailySales: 0,
  //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
  calcCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
      this.custPerHourArray.push(hourlyCust);
      this.totalDailySales = hourlyCust + this.totalDailySales;
      //console.log(this.totalDailySales); 
    }
  }
};
console.log(seattle.custPerHourArray);
seattle.calcCustPerHour();

var section = document.getElementById('seattle');
var h2Ele = document.createElement('h2');
h2Ele.textContent = seattle.name;
section.append(h2Ele);

var ulEle = document.createElement('ul');
section.append(ulEle);


for (var i = 0; i < seattle.custPerHourArray.length; i++) {
  var liEle = document.createElement('li');
  liEle.textContent = seattle.custPerHourArray[i];
  ulEle.appendChild(liEle);
}
var liEleTotal = document.createElement('li');
liEleTotal.textContent = seattle.totalDailySales;
ulEle.appendChild(liEleTotal);




//     var parentEl = document.getElementById('Seattle');
//     for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       parentEl.appendChild(liEl);
//     //insert logic here.

//     seattle = document.getElementById('Seattle');
//     for (i = 0; i < this.sales.length; i++) {
//       liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       seattle.append(liEl);

// //     }
// };
//   seattle.render(); {
//     console.log(seattle.custPerHourArray);




// //sourced from math.random doc's

// var tokyo = {
//   name: 'Tokyo',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerHour: 6.3,
//   custPerHourArray: [],
//   cookiesPerHourArray: [], //sales array
//   totalDailySales: 0,
//   //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
//   calcCustPerHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCust = getRandomCustNumber(this.minCust, this.maxCust);
//       this.custPerHourArray.push(hourlyCust);
//     }
//   },
//   //calc number of cookies per hour. Multiply customers at that hour by the avrage cookies per hour and push into cookies per hour array.
//   calcCookiesPerHour: function () {
//     this.calcCustPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.custPerHourArray[i] * this.avgCookiesPerHour);
//       this.cookiesPerHourArray.push(hourlyCookies);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();


//     var parentEl = document.getElementById('Tokyo');
//     for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       parentEl.appendChild(liEl);

//     }
//     //insert logic here.

//     tokyo = document.getElementById('Tokyo');
//     for (i = 0; i < this.sales.length; i++) {
//       liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       tokyo.append(liEl);

//     }
//   }
// };
// tokyo.render();
// console.log(tokyo.custPerHourArray);

// //sourced from math.random doc's


// var dubai = {
//   name: 'Dubai',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerHour: 6.3,
//   custPerHourArray: [],
//   cookiesPerHourArray: [], //sales array
//   totalDailySales: 0,
//   //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
//   calcCustPerHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCust = getRandomCustNumber(this.minCust, this.maxCust);
//       this.custPerHourArray.push(hourlyCust);
//     }
//   },
//   //calc number of cookies per hour. Multiply customers at that hour by the avrage cookies per hour and push into cookies per hour array.
//   calcCookiesPerHour: function () {
//     this.calcCustPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.custPerHourArray[i] * this.avgCookiesPerHour);
//       this.cookiesPerHourArray.push(hourlyCookies);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();


//     var parentEl = document.getElementById('Dubai');
//     for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       parentEl.appendChild(liEl);

//     }
//     //insert logic here.

//     dubai = document.getElementById('Dubai');
//     for (i = 0; i < this.sales.length; i++) {
//       liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       dubai.append(liEl);

//     }
//   }
// };
// dubai.render();
// console.log(dubai.custPerHourArray);

// //sourced from math.random doc's



// var paris = {
//   name: 'Paris',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerHour: 6.3,
//   custPerHourArray: [],
//   cookiesPerHourArray: [], //sales array
//   totalDailySales: 0,
//   //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
//   calcCustPerHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCust = getRandomCustNumber(this.minCust, this.maxCust);
//       this.custPerHourArray.push(hourlyCust);
//     }
//   },
//   //calc number of cookies per hour. Multiply customers at that hour by the avrage cookies per hour and push into cookies per hour array.
//   calcCookiesPerHour: function () {
//     this.calcCustPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.custPerHourArray[i] * this.avgCookiesPerHour);
//       this.cookiesPerHourArray.push(hourlyCookies);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();


//     var parentEl = document.getElementById('Paris');
//     for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       parentEl.appendChild(liEl);

//     }
//     //insert logic here.

//     paris = document.getElementById('Paris');
//     for (i = 0; i < this.sales.length; i++) {
//       liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       paris.append(liEl);

//     }
//   }
// };
// paris.render();
// console.log(paris.custPerHourArray);

// //sourced from math.random doc's



// var lima = {
//   name: 'Lima',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerHour: 6.3,
//   custPerHourArray: [],
//   cookiesPerHourArray: [], //sales array
//   totalDailySales: 0,
//   //caluc number of customers per hour by generating a random number of customers and push that number of customers into cust per hour array.
//   calcCustPerHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCust = getRandomCustNumber(this.minCust, this.maxCust);
//       this.custPerHourArray.push(hourlyCust);
//     }
//   },
//   //calc number of cookies per hour. Multiply customers at that hour by the avrage cookies per hour and push into cookies per hour array.
//   calcCookiesPerHour: function () {
//     this.calcCustPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.custPerHourArray[i] * this.avgCookiesPerHour);
//       this.cookiesPerHourArray.push(hourlyCookies);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();


//     var parentEl = document.getElementById('Lima');
//     for (var i = 0; i < this.calcCookiesPerHourArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       parentEl.appendChild(liEl);

//     }
//     //insert logic here.

//     lima = document.getElementById('Lima');
//     for (i = 0; i < this.sales.length; i++) {
//       liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.sales[i]} cookies `;
//       lima.append(liEl);

//     }
//   }
// };
// lima.render();
// console.log(lima.custPerHourArray);

// //sourced from math.random doc's

