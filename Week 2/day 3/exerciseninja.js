// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.

// Exercise 1 : Checking The BMI


let person1 = {
    fullName: "John",
    mass: 75, // in kilograms
    height: 1.75, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  let person2 = {
    fullName: "Jane",
    mass: 65, // in kilograms
    height: 1.65, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  // Function to compare the BMI of both persons and display the name of the person with the largest BMI
  function compareBMI(person1, person2) {
    let bmiPerson1 = person1.calculateBMI();
    let bmiPerson2 = person2.calculateBMI();
  
    if (bmiPerson1 > bmiPerson2) {
      console.log(`${person1.fullName} has the largest BMI.`);
    } else if (bmiPerson2 > bmiPerson1) {
      console.log(`${person2.fullName} has the largest BMI.`);
    } else {
      console.log("Both persons have the same BMI.");
    }
  }
  
  compareBMI(person1, person2);


// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.



    let total = 0;
    for (let i = 0; i < gradesList.length; i++) {
      total += gradesList[i];
    }
    let average = total / gradesList.length;
    console.log(`The average grade is: ${average}`);
  
    if (average > 65) {
      console.log("Congratulations! You passed.");
    } else {
      console.log("Unfortunately, you failed and must repeat the course.");
    }
  
  // Example usage of the findAvg function
  let grades = [80, 75, 90, 85, 70];
  findAvg(grades);