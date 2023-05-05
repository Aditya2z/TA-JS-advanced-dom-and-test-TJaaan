// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`
function getFullName(firstName = "", lastName = "") {
    if(typeof firstName !== 'string' || typeof lastName !== 'string') {
      return undefined;
    }
  
    if(firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    if(firstName) return firstName;
    if(lastName) return lastName;
  }  

// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.
function isPalindrome(value) {
  if (typeof value !== "string") {
    return false;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return false;
  }
  const cleanValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedValue = cleanValue.split("").reverse().join("");
  return cleanValue === reversedValue;
}

// 3. Create 2 functions that calculate properties of a circle, using the definitions here.

// - Create a function called `getCircumfrence`:

// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.
function getCircumfrence(radius) {
  if (typeof radius !== "number" || radius < 0) return undefined;
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

// - Create a function called `getArea`:

// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.
function getArea(radius) {
  if (typeof radius !== "number" || radius < 0) return undefined;
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
