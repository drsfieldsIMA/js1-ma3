//****************************************************************************************
// Question 1
// Convert the function below to an arrow function:
// function(a, b) {
//  return a - b;
// }
///////////////////////////////////////////////////////////////////////////////////////////
// Method 1 construct an arrow function and pass in the integers 120 and 1
const subtraction = (a, b) => a - b;
// 1st Answer         user input: subtraction(120,1)
//                    (Answer)                119                           shaun-fields-js1-ma3.js:7
//****************************************************************************************
// Question 2
// Refer: lesson 2 / 4
// Make a call to the URL below, pass the JSON it returns to a function and inside that function loop
// through the results and log each game's name.
// In the catch method of your code, redirect to error.html if there is an error.
// https://api.rawg.io/api/games?genres=sports
/////////////////////////////////////////////////////////////////////////////////////
// Method 2 Use the fetch command
fetch("https://api.rawg.io/api/games?genres=sports")
  .then(function(response) {
                            return response.json();
                           })

  .then(function(json) {
                       gamesName(json);
                       })
                    
  .catch(function(error) {
                       location.href = "error.html";
                       });

function gamesName(json) {
  // assign the results array to the variable sportGames
  const sportGames = json.results;

            for (let i = 0; i < sportGames.length; i++) {
                    // log the name of the games to the console
                console.log(sportGames[i].name);
                                                         }
}
// Answer 2
//   Rocket League                                                       shaun-fields-js1-ma3.js:40
//   GRID 2
//   DiRT Rally
//   Jet Set Radio
//   Race Driver: Grid
//   DiRT Showdown
//   F1 2015
//   Need For Speed: Hot Pursuit
//   Steep
//   SpeedRunners
//   DiRT 3
//   Poker Night at the Inventory
//   Sonic & All-Stars Racing Transformed
//   RaceRoom Racing Experience
//   VRChat
//   FIFA 18
//   Punch Club
//   Defy Gravity Extended
//   OlliOlli2: Welcome to Olliwood
//   EA SPORTS FIFA 17
//****************************************************************************************
// Question 3
// Replace the word cats with the word giraffes in the following sentence:
// These cats are outrageous.
//////////////////////////////////////////////////////////////////////////////////////////
// Method 3
// Select the h1 tag
const sentenceHeading = document.querySelector("h1");

let words = sentenceHeading.innerText;

// replace the innerText of the h1 tag with cats in a formattedSentence
const formattedSentence = words.replace("cats", "giraffes");

sentenceHeading.innerText = formattedSentence;

//   Answer 3
//    <h1>These cats are outrageous.</h1>  //transforms to//  <h1>These giraffes are outrageous.<h1>
//****************************************************************************************
// Question 4
// Refer: lesson 4
// Given the URL below, write code that checks if there is a userId parameter in the query string.
// If there is no userID parameter, redirect the browser to third.html.
// If there is a userID parameter and its value is less than 10, redirect to first.html.
// If there is a userID parameter and its value is 10 or greater, redirect to second.html.
//////////////////////////////////////////////////////////////////////////////////////////////
// Method 4 use the URLSearchParams and set the location.href to first.html, second or third
const queryString = "https://my.site.com?userId=7";

const params = new URLSearchParams(queryString);
let id;

if (params.has("userID")) {
  id = params.get("userID");

    if (id < 10) {
        location.href = "first.html";
        } else {
        location.href = "second.html";
    }

} else {
 // location.href = "third.html";
}

//************************************************************************************************
// Question 5
// Write code that removes the button, and only the button,
//  from its parent element in the HTML below:
// <div class="container">
//    <p>Lorem ipsum dolor</p>
//    <button class="btn">Click me</button>
//</div>
///////////////////////////////////////////////////////////////////////////////////////////////////
// Method 5 removeChild chain
// Select the class container
const container = document.querySelector(".container");
// Select the class .btn
const button = document.querySelector(".btn");

container.removeChild(button);

//****************************************************************************************
// Question 6
// Create an li element with a text value of Parrots and a class of parrots.
// Add the new item as the second item in the ul below (add it after Cows).
////////////////////////////////////////////////////////////////////////////////////////
// Method 6 create element li and .before chain
const bigAnimal = document.querySelector(".elephants");
// create a new element animalSmall
const animalSmall = document.createElement("li");

animalSmall.className = "parrots";
animalSmall.innerText = `Parrots`;

bigAnimal.before(animalSmall);
// Answer 6 
// Cows
// parrots
// Elephants
//****************************************************************************************
// Question 7
// Refer: lesson 4
// Make a call to the URL below and pass the JSON it returns to a function.
// Inside that function select the div from the HTML below and assign the rating
// property from the JSON object as it's text value.
// In the catch method, log the error that may be returned.
// https://api.rawg.io/api/games/3801
// <div class="rating"></div>
/////////////////////////////////////////////////////////////////////////////////////////////
// Method 7 Fetch and add text to the <div> tag
fetch("https://api.rawg.io/api/games/3801")
     .then(function(response) {
                  return response.json();
     })
     .then(function(json) {
                  generalRating(json);
     })
     .catch(function(error) {
                 console.dir(error);
      });

function generalRating(json) {
  // assign the result which is not an array but a single object to the variable general games
  const generalGames = json;

  let newhtml = "";
  let ratingValue = "Not rated";

                    if (generalGames.rating) {
                    // Use the specified rating from the returned object
                    ratingValue = generalGames.rating;
                    }

        newhtml += `<div class="rating"> ${generalGames.name} has a rating of ${ratingValue} </div>`;

// Select the class rating in the html file            
const ratingInner = document.querySelector(".rating");
ratingInner.innerHTML = newhtml;
}
// 7th Answer                                                                  shaun-fields-js1-ma3.js:40
// Assassin’s Creed Liberation HD has a rating of 3.01            