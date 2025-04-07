// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html


function myButtonClicked() {
 // input
 const TEMP_FAHRENHEIT = parseFloat(document.getElementById("fahrenheit-input").value)


 // process
 const TEMP_CELSIUS = Math.round((TEMP_FAHRENHEIT - 32) * 5/9).toFixed(2)


 // output
 document.getElementById('answer').innerHTML = "If the Temperature in Fahrenheit is " + TEMP_FAHRENHEIT + ", Then the temperature in calsius will be: " + TEMP_CELSIUS + "."
}
