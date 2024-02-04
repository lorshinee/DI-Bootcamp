// Exercise 1 : Calculate The Tip
// Instructions
// Clone or Download this repository.
// Follow the instructions below :
// In this exercise you will calculate how much your tip would be after eating in a restaurant.

// First Part :
// Create a js file name main.js.

// Create a function called calculateTip() that takes no parameter.

// Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.

// Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.

// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.

// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.

// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).

// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

// Use the toFixed method to round total to two decimal points.

// Add the CSS property “display:block” to the tag which id is totalTip.

// Display the variable total in the tag which id is tip.


// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.

function calculateTip() {
    let billAmount = document.getElementById('billAmt').value;
    let serviceQuality = document.getElementById('serviceQual').value;
    let numberOfPeople = document.getElementById('numOfPeople').value;

    if (serviceQuality === "0" || billAmount === "") {
        alert("Please enter valid values for bill amount and service quality.");
        return;
    }

    if (numberOfPeople === "" || parseInt(numberOfPeople) < 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    let total = (billAmount * serviceQuality) / numberOfPeople;
    total = total.toFixed(2);

    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}

document.getElementById('calculate').onclick = calculateTip;


// Exercise 2 : Validate The Email
// Instructions
// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.

function validateEmail() {
    let email = document.getElementById('email').value;
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validEmailRegex.test(email)) {
        alert("Valid email address.");
    } else {
        alert("Invalid email address.");
    }
}

document.getElementById('validateEmail').addEventListener('click', validateEmail);


// Exercise 3 : Get The User’s Geolocation Coordinates
// Instructions
// Hint/tip

// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button
// For example, after the user clicks on the button, the output of your code should be as seen below :

// Latitude: 32.179346699999996
// Longitude: 34.871555

function getUserGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

document.getElementById('getUserLocation').addEventListener('click', getUserGeolocation);