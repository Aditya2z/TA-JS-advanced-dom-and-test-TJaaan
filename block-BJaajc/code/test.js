const {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea,
} = require("./index");

describe("getFullName", () => {
    const firstName = "John";
    const lastName = "Doe";
  
    test("returns full name when given first and last name", () => {
      const expectedFullName = "John Doe";
      expect(getFullName(firstName, lastName)).toBe(expectedFullName);
    });
  
    test("returns only first name when last name is not provided", () => {
      const expectedFullName = "John";
      expect(getFullName(firstName)).toBe(expectedFullName);
    });
  
    test("returns only last name when first name is not provided", () => {
      const expectedFullName = "Doe";
      expect(getFullName(undefined, lastName)).toBe(expectedFullName);
    });
  });
  
  describe("isPalindrome", () => {
    const palindrome = "racecar";
    const nonPalindrome = "hello";
  
    test.each([
      [palindrome, true],
      [nonPalindrome, false],
      ["", true],
    ])("returns correct result for %s", (input, expectedOutput) => {
      expect(isPalindrome(input)).toBe(expectedOutput);
    });
  });
  
  describe("getCircumfrence", () => {
    const radius1 = 1;
    const radius5 = 5;
  
    test.each([
      [radius1, 2 * Math.PI],
      [radius5, 2 * Math.PI * radius5],
      [0, 0],
    ])("returns correct circumference for radius %d", (radius, expectedCircumference) => {
      expect(getCircumfrence(radius)).toBe(expectedCircumference);
    });
  });
  
  describe("getArea", () => {
    const radius1 = 1;
    const radius5 = 5;
  
    test.each([
      [radius1, Math.PI],
      [radius5, Math.PI * radius5 * radius5],
      [0, 0],
    ])("returns correct area for radius %d", (radius, expectedArea) => {
      expect(getArea(radius)).toBe(expectedArea);
    });
  });
  