import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bike from './bike.js';

//Business Logic


async function getBike(zipCode) {
  const response = await Bike.getBike(zipCode)
    // .then(function (response) {
    //   console.log(response);
      if (response.bikes) {
        printElements(response, zipCode);
      } else {
        printError(response, zipCode);
      }
//     });
}
// UI js goes here

function printError(request, response) {
  document.querySelector('#errorContainer').innerText = `There was an error accessing the bike location data for ${getBike}: ${request.status} ${request.statusText}: ${response.message}`;
}

//function printError(error, zipCode) {
//document.querySelector('#errorContainer').innerText = `There was an error accessing the stolen bike data for ${zipCode}: ${error}.`;
//}

function printElements(bikes) {
  // const container = document.querySelector('#results');
  bikes.forEach(bike => {
    return console.log(bike.bikes)
    // return container.innerHTML += `ID: ${bike.id}, URL: ${bike.url}<br>`;
  });
}

//function printElements(response) {
//const container = document.getElementById("results");
//   const arr = Array.from(response);
//   arr.forEach((element) => {
//container.innerHTML += `${response[0]}`;
//}

// }

function handleForm(event) {
  event.preventDefault();
  const zipCode = parseInt(document.querySelector('#location').value);
  document.querySelector('#location').value = null;
  getBike(zipCode);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleForm);
});
