# light-kit.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. String functions
3. Array functions
4. Event function

## Math functions
```
// import math functions from light-kit js 
import { lightMath } from "light-kitjs";

// the arguments are type, minimum and maximum number.
const num = lightMath.randNum("int", 1, 15);

console.log(num);
```

## Event function
```
// import the event function
import { event } from "light-kitjs";

// the arguments are element, event type, callback
event("#button", "click", () => {
  console.log("clicked!");
});
```

## Make function
```
// import the make function
import { make } from "light-kitjs";

// this function is easier Version of 'document.createElement()'
const box = make("div", {
  text: "hello world", // inner text
  classes: ["box"] // multiple classes
});
```

## Installation
```
npm i light-kitjs
```

## Update
```
npm update light-kitjs
```

## Version
```
npm list light-kitjs
```
