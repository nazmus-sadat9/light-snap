# lighting.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. Event function
3. Make function
4. Selectors

## Math functions
```
// import math functions from lightingjs
import { lightMath } from "lightingjs";

// the arguments are type, minimum and maximum number.
const num = lightMath.randNum("int", 1, 15);

console.log(num);
```

## Event function
```
// import the event function
import { event } from "lightingjs";

// the arguments are element, event type, callback
event("#button", "click", () => {
  console.log("clicked!");
});
```

## Make function
```
// import the make function
import { make } from "lightingjs";

// this function is easier Version of 'document.createElement()'
const box = make("div", {
  text: "hello world", // inner text
  classes: ["box"] // multiple classes
});

document.body.appendChild(box); // add in body
```

## Selectors
```
// Selectors are built in functions 
// query selector 
query(".box");

// id selector
id("box");
```

## Installation
```
npm i lightingjs
```

## Update
```
npm update lightingjs
```

## Version
```
npm list lightingjs
```
