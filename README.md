# lighting.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. makeEvent function
3. makeTag function
4. Selectors

## Math functions
```
// import math functions from lightingjs
import { lightMath } from "lightingjs";

// the arguments are type, minimum and maximum number.
const num = lightMath.randNum("int", 1, 15);

console.log(num);
```

## makeEvent function
```
// import the makeEvent function
import { makeEvent } from "lightingjs";

// the arguments are element, event type, callback
makeEvent("#button", "click", () => {
  console.log("clicked!");
});
```

## makeTag function
```
// import the makeTag function
import { makeTag } from "lightingjs";

// this function is easier Version of 'document.createElement()'
const box = makeTag("div", {
  text: "hello world", // inner text
  classes: ["box"] // add multiple class name
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
