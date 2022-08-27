let arr = [1, 2, 3, 4, 5];

// iterate over an array as long as a defined condition evaluates as true. You can also use a break to exit the for loop if a certain condition is met
const forLoop = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// the for each loop will iterate over every element in an array once, and execute the callback function for each element.
const forEachLoop = () => {
  arr.forEach((item) => {
    console.log(item);
  });
};

// the for of loop is similar to the for each in the way it operates but can also work on strings and other iterables.
const forOfLoop = () => {
  for (const item of arr) {
    console.log(item);
  }
};

// the for in loop will iterate over every property in an object.
const forInLoop = () => {
  for (const item in arr) {
    console.log(item);
  }
};

// the while loop will execute a block of code as long as a certain condition is true.
const whileLoop = () => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};

// the do while loop will execute a block of code at least once, and then check the condition.
const doWhileLoop = () => {
  let i = 0;
  do {
    console.log(arr[i]);
    i++;
  } while (i < arr.length);
};
