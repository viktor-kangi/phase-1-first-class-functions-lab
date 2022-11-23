// Code your solution in this file!
const drivers = ['Viktor', 'Levy', 'Lincoln', 'Kate'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
  return function(value) {
    return fareMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func) {
  return func(drivers);
}

function selectDifferentDrivers(driversArray, fn) {
  return fn(driversArray);
}