// define weather condition
var raining = true;
var temperature = 25;

// check if it is raining
if (raining) {
  console.log("Don't forget your umbrella!");
}

// check the temperature
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
