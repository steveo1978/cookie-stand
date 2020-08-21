'use strict';

//console.log('hello world');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var store = [];
console.log(store);

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
  this.calcCustPerHour();
  store.push(this);
}

Store.prototype.calcCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCust = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookiesPerHour);
    this.custPerHourArray.push(hourlyCust);
    this.totalDailySales = hourlyCust + this.totalDailySales;
  }
};

new Store('seattle', 23, 65, 6.3);

new Store('tokyo', 3, 24, 1.2);

new Store('dubai', 11, 38, 3.7);

new Store('paris', 20, 38, 2.3);

new Store('lima', 2, 16, 4.6);

// var cities = [seattle, tokyo, dubai, paris, lima];
// for (var j = 0; j < cities.length; j++) {
//   cities[j].calcCustPerHour();

//   var section = document.getElementById('stores');
//   var h2Ele = document.createElement('h2');
//   h2Ele.textContent = cities[j].name;
//   section.append(h2Ele);

//   var ulEle = document.createElement('ul');
//   section.append(ulEle);

//   for (var i = 0; i < cities[j].custPerHourArray.length; i++) {
//     var liEle = document.createElement('li');
//     liEle.textContent = `${hours[i]}: ${cities[j].custPerHourArray[i]} cookies`;
//     ulEle.appendChild(liEle);
//   }
//   var liEleTotal = document.createElement('li');
//   liEleTotal.textContent = `Total: ${cities[j].totalDailySales}`;
//   ulEle.appendChild(liEleTotal);
// }

function createElement(element, textContent, parent) {
  var newElement = document.createElement(element);
  newElement.textContent = textContent;
  parent.appendChild(newElement);
  return newElement;
}

var tableHead = document.getElementById('thead');
var tableBody = document.getElementById('tbody');
var tableFoot = document.getElementById('tfoot');

function renderHeader() {
  var trHeaderEl = createElement('tr', '', tableHead);
  createElement('th', '', trHeaderEl);
  for (var i = 0; i < hours.length; i++) {
    createElement('th', hours[i], trHeaderEl);

  }
  createElement('th', 'Daily Location Total', trHeaderEl);
}
renderHeader();

function renderTable() {
  for (var i = 0; i < store.length; i++) {
    var tableBodyEl = createElement('tr', '', tableBody);
    createElement('td', store[i].name, tableBodyEl);
    for (var j = 0; j < hours.length; j++) {
      createElement('td', store[i].custPerHourArray[j], tableBodyEl);
    }
    createElement('td', store[i].totalDailySales, tableBodyEl);
  }
}
renderTable();

function renderFooter() {
  var trFooterEl = createElement('tr', '', tableFoot);
  createElement('td', 'totals', trFooterEl);
  var grandTot = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotals = 0;
    for (var j = 0; j < store.length; j++) {
      hourlyTotals += store[j].custPerHourArray[i];
      grandTot += store[j].custPerHourArray[i];
    }
    createElement('td', hourlyTotals, trFooterEl);
  }
  createElement('td', grandTot, trFooterEl);
}
renderFooter();




