const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require("./index");

describe("getFullName", () => {
  test("returns full name when given first and last name", () => {
    const firstName = "John";
    const lastName = "Doe";
    const expectedFullName = "John Doe";
    expect(getFullName(firstName, lastName)).toBe(expectedFullName);
  });

  test("returns only first name when last name is not provided", () => {
    const firstName = "John";
    const expectedFullName = "John";
    expect(getFullName(firstName)).toBe(expectedFullName);
  });

  test("returns only last name when first name is not provided", () => {
    const lastName = "Doe";
    const expectedFullName = "Doe";
    expect(getFullName(undefined, lastName)).toBe(expectedFullName);
  });

  test("returns undefined when neither first nor last name are provided", () => {
    expect(getFullName()).toBeUndefined();
  });

  test("returns undefined when first name is not a string", () => {
    expect(getFullName(123, "Doe")).toBeUndefined();
  });

  test("returns undefined when last name is not a string", () => {
    expect(getFullName("John", {})).toBeUndefined();
  });
});

describe("isPalindrome", () => {
  test("returns true for palindrome strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("returns false for non-palindrome strings", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("not a palindrome")).toBe(false);
  });

  test("returns false for non-string values", () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
  });

  test("returns false for strings containing only whitespace", () => {
    expect(isPalindrome("   ")).toBe(false);
  });
});

describe("getCircumfrence", () => {
  test("returns correct circumference for positive radius", () => {
    const radius1 = 1;
    const radius5 = 5;
    const expectedCircumference1 = "The circumference is 6.283185307179586";
    const expectedCircumference5 = "The circumference is 31.41592653589793";
    expect(getCircumfrence(radius1)).toBe(expectedCircumference1);
    expect(getCircumfrence(radius5)).toBe(expectedCircumference5);
  });

  test("returns undefined for null radius", () => {
    expect(getCircumfrence(null)).toBeUndefined();
  });

  test("returns undefined for negative radius", () => {
    expect(getCircumfrence(-5)).toBeUndefined();
  });

  test("returns undefined for non-numeric radius", () => {
    expect(getCircumfrence("not a number")).toBeUndefined();
  });
});

describe("getArea", () => {
  test("returns correct area for positive radius", () => {
    const radius1 = 1;
    const radius5 = 5;
    const expectedArea1 = "The area is 3.141592653589793";
    const expectedArea5 = "The area is 78.53981633974483";
    expect(getArea(radius1)).toBe(expectedArea1);
    expect(getArea(radius5)).toBe(expectedArea5);
  });

  test("returns undefined for null radius", () => {
    expect(getArea(null)).toBeUndefined();
  });

  test("returns undefined for negative radius", () => {
    expect(getArea(-5)).toBeUndefined();
  });

  test("returns undefined for non-numeric radius", () => {
    expect(getArea("foo")).toBeUndefined();
    expect(getArea({})).toBeUndefined();
    expect(getArea([])).toBeUndefined();
  });
});
