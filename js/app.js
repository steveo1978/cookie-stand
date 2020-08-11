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

var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerHour: 1.2,
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

var dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerHour: 3.7,
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

var paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerHour: 2.3,
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

var lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerHour: 4.6,
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

var cities = [seattle, tokyo, dubai, paris, lima];
for (var j = 0; j < cities.length; j++) {
  cities[j].calcCustPerHour();


  //console.log(seattle.custPerHourArray);
  //seattle.calcCustPerHour();

  var section = document.getElementById('stores');
  var h2Ele = document.createElement('h2');
  h2Ele.textContent = cities[j].name;
  section.append(h2Ele);

  var ulEle = document.createElement('ul');
  section.append(ulEle);


  for (var i = 0; i < cities[j].custPerHourArray.length; i++) {
    var liEle = document.createElement('li');
    liEle.textContent = `${hours[i]}: ${cities[j].custPerHourArray[i]} cookies`;
    ulEle.appendChild(liEle);
  }
  var liEleTotal = document.createElement('li');
  liEleTotal.textContent = `Total: ${cities[j].totalDailySales}`;
  ulEle.appendChild(liEleTotal);
}






