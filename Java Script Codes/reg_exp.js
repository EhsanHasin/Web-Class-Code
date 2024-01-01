//Write a regular expression to match a valid email address.
const regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log(regex1.test("fo.o@wassa.org.af"));

//Write a regular expression to match a string that contains a valid URL.
const regex2 = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;

//Write a regular expression to match a string that contains a valid date in the format "YYYY-MM-DD".
const regex3 = /^\d{4}-\d{2}-\d{2}$/;

//Write a regular expression to match a string that contains a valid phone number
const regex4 = /^\(\d{3}\) \d{3}-\d{4}$/
console.log(regex4.test("(393) 915-0859"));

// Write a regular expression to match a string that contains a valid IP address.
const regex5 = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

//Write a regular expression to match a string that contains a valid password, which must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.
const regex6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

//Write a regular expression to match a string that contains a valid file extension (e.g., ".txt", ".jpg").
const regex = /\.[a-zA-Z]{2,}$/;

