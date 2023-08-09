import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike.js';

//Business 

function getBikes(zipCode) {
  BikeService.getBikes(zipCode)
    .then(function (response) {
      if (response.bikes) {
        //printElements(response, zipCode);
        printStolenBikes(response);
        //printFoundBikes(response);
      } else {
        printError(response, zipCode);
      }
    });
}

//UI

// Here
// VVVVVV
// function printElements(apiResponse) {
//   const container = document.querySelector('#gifContainer');
//   apiResponse.data.forEach((response) => {
//     container.innerHTML += `<img src="${response.bikes[0].url}">`;
//   });
// }

//function printElements(response) {
  //document.getElementById("results").innerText = `${response.bikes[0].status} ${response.bikes[0].url}`;
//}

function printStolenBikes(response) {
  const serial = document.querySelector("#serial");
  const date = document.querySelector("#date");
  const color = document.querySelector("#color");
  const img = document.querySelector("#img");
  let now = Date.now() / 1000;
  const week = 604800;
  response.bikes.forEach((bukket) => {
    if (now - bukket.date_stolen > week) {
      return "No image provided.";
    } else {
      //return bukket.large_img;
      serial.innerHTML += `${bukket.serial}`;
      date.innerText += `${bukket.date_stolen}`;
      color.innerText += `${bukket.frame_colors}`;
      img.innerHTML += `<img src="${bukket.large_img}">`;
    }

  });
}

function printError(error) {
  document.getElementById("results").innerText = `There was an error accessing the bike data: ${error}.`;
}

function handleForm(event) {
  event.preventDefault();
  const zipCode = document.getElementById("zip").value;
  document.getElementById("zip").value = null;
  getBikes(zipCode);
  //printBike(response);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleForm);
});