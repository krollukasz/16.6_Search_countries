"use strict";

// Variables
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById("countries");

document.getElementById("search").addEventListener("click", searchCountries);

// Search countries function
function searchCountries() {
  var countryName = document.getElementById("country-name").value;

  if (!countryName.length) countryName = "Poland";

  fetch(url + countryName)
    .then(function(resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

// Show countries function
function showCountriesList(resp) {
  countriesList.innerHTML = "";
  resp.forEach(function(item) {
    var listElement = document.createElement("li");
    listElement.innerText = item.name;
    countriesList.appendChild(listElement);
  });
}