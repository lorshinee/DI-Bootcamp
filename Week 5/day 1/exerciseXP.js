// Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol
// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?


// ANSWER : http://example.com/form-handler?name=John&message=Hello%20world
// The form was submitted to http://example.com/form-handler.
// The data includes name=John and message=Hello%20world, where %20 is the URL-encoded representation of a space character.

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const formData = new FormData(event.target);

//     // Convert form data to JSON object
//     const jsonData = {};
//     formData.forEach((value, key) => {
//         jsonData[key] = value;
//     });

//     // Display form data in console
//     console.log(jsonData);

//     // You can also send the form data to a server using fetch or XMLHttpRequest
// });