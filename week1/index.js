/* 
TASK 1
Define an object to represent a mobile phone.
It should have 5 properties: brand, model, color, battery size (in mAh), and price.
It should also perform 5 actions (methods): switch on, switch off, make phone call, send text message, and take photo.
The methods can simply log a message to the console based on what it does.
Name the properties and methods accordingly.
*/

// Task 1 Answer

const mobilePhone = {
  brand: "Toyota",
  model: "Camry 2024",
  color: "Gray",
  batterySize: "Est. MPG",
  price: 850000,
  switchOn: function () {
    console.log("Bootup Device!");
  },
  swithOff: function () {
    console.log("Shutdown Device!");
  },
  makeCall: function () {
    console.log("Make a phone call!");
  },
  sendMessage: function () {
    console.log("Send a tex message!");
  },
  takePhoto: function () {
    console.log("Snap a photograph!");
  }
};


// Testing method output
// let phone = Object.create(mobilePhone)
// phone.makeCall();



// console.log("node is working now");
// console.log("testing node js");






/*
TASK 2
Follow each comment below and write the JavaScript code that does what it describes
*/

// 1. DECLARE A VARIABLE TO STORE THE FIRST NAME OF A USER AS "Bart"

let firstName = "Bart";

// 2. DECLARE A VARIABLE TO STORE THE LAST NAME OF THE USER AS "Simpson"

let lastName = "Simpson";

// 3. DECLARE A VARIABLE TO STORE THE BIRTH YEAR OF THE USER AS 1979

let birthYear = 1979;

// 4. DECLARE A VARIABLE TO STORE THE AGE OF A USER, BY SUBTRACTING THEIR BIRTH YEAR FROM THE CURRENT YEAR (2023)

let age = 2023 - 1979;
//testing age output
// console.log(age);

// 5. DECLARE A VARIABLE TO STORE THE FULL NAME OF THE USER, BY CONCATENATING THEIR FIRST AND LAST NAMES

let fullName = firstName + ' ' + lastName;
//testing full Name output
// console.log(fullName);

// 6. LOG THE USER'S AGE TO THE CONSOLE
console.log("Your current Age is -> " + age);

// 7. LOG THE USER'S FULL NAME TO THE CONSOLE
console.log("Your Name is -> " + fullName);

/*
TASK 3
Show how you can use a for...in and a for...of loop to get all the car brands from the array below
*/
const cars = [
  { id: 1, color: "green", brand: "Mercedes", isInGoodCondition: false },
  { id: 2, color: "orange", brand: "Volkswagen", isInGoodCondition: true },
  { id: 3, color: "yellow", brand: "Toyota", isInGoodCondition: true },
  { id: 4, color: "red", brand: "Honda", isInGoodCondition: true },
  { id: 5, color: "white", brand: "Hyundai", isInGoodCondition: false },
];


//for....in loop
for (y in cars) {
  console.log(cars[y].brand);
}



//for.....of loop
for (x of cars) {
  console.log(x.brand);
}



/*
TASK 4
Using the cars array in TASK 3, write the code that corresponds to the following comments
*/

// 1. LOOP THROUGH ALL THE CARS IN THE CARS ARRAY

for (all of cars) {
  console.log(all);
}

// 2. CHECK IF EACH CAR IS IN GOOD CONDITION OR NOT}

for (let car of cars) {
  if ((car.isInGoodCondition) === true) {
    console.log("In good conditions " + car.brand);
  }
  else
    console.log("Not in good conditions " + car.brand);

}


// 3. IF THE CAR IS IN GOOD CONDITION, LOG "[brand] is in good condition", where [brand] is the brand of the car
for (let car of cars) {
  if ((car.isInGoodCondition) === true) {
    console.log(car.brand + " is in good conditions");
  }
}



// 4. IF THE CAR IS NOT IN GOOD CONDITION, LOG "[brand] needs to be fixed", where [brand] is the brand of the car

for (let car of cars) {
  if ((car.isInGoodCondition) === true) {
    console.log(car.brand + " needs to be fixed");
  }
}



// Hint: you can use string concatenation to combine the brand and the rest of the text

/*
TASK 5
Comment the most appropriate data type for each of the following variables and assign corresponding values.
I have assigned empty strings to all of them to prevent any errors. You must change the values to the appropriate data type.
*/

// Example - Scenario 1: User Information
const userName = "user3605"; // String
const userAge = 37; // Number
const isSubscribed = false; // Boolean

// Scenario 2: Product Details
const productName = "aquafina"; //String
const productPrice = "150"; //Number
const inStock = "true"; //Boolent
const features = {
  type: "plastic",
  color: "colorless"
}; //object

// Scenario 3: Weather Information
const temperature = "45"; //Number
const isSunny = "true"; //Boolean

// Scenario 4: Book Details
const bookTitle = "lastDaysAtForcados"; //String
const authorDetails = "mohammed"; // string
const isBestseller = "true"; //Boolean

// Scenario 5: User Preferences
const favoriteColors = "blue"; //stromg
const hasPets = "true"; //Boolean

// Scenario 6: Dynamic Content
let dynamicValue = [1, 2, "John", 3, "James"]; //array
