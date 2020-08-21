'use strict';

//console.log('hello world');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function getRandomCustNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}

function Store(name, minCust, maxCust, avgCookiesPerHour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.custPerHourArray = [];
  this.totalDailySales = 0;
  //this.calcCustPerHour();
}

var seattle = new Store('seattle', 23, 65, 6.3);
Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
  }
};

var tokyo = new Store('tokyo', 3, 24, 1.2);
Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
  }
  var liEleTotal = document.createElement('li');
  liEleTotal.textContent = `Total: ${cities[j].totalDailySales}`;
  ulEle.appendChild(liEleTotal);
};


var dubai = new Store('dubai', 11, 38, 3.7);
Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
  }
};

var paris = new Store('paris', 20, 38, 2.3);
Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
  }
};

var lima = new Store('lima', 2, 16, 4.6);
Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
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


