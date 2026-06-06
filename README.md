# efficiency.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. makeEvent function
3. makeTag function
4. Selectors

## randNum utility
```JavaScript
import { efficiency } from "efficiency"; // ES Module
const { efficiency } = require("efficiency"); // CommonJS

// the arguments are type, minimum and maximum number.
const num = efficiency.randNum("int", 1, 15);

console.log(num);
```

## makeEvent function
```JavaScript
// the arguments are element, event type, callback
makeEvent("#button", "click", () => {
  console.log("clicked!");
});
```

## makeTag function
```JavaScript
// this function is easier Version of 'document.createElement()'
const box = makeTag("div", {
  text: "hello world", // inner text
  classes: ["box"] // add multiple class name
});

document.body.appendChild(box); // add in body
```

## Selectors
```JavaScript
// query selector 
query(".box");

// id selector
id("box");
```

## copy utility
```JavaScript
import { efficiency } from "efficiency"; // ES Module
const { efficiency } = require("efficiency"); // CommonJS

// make a button tag 
const btn = makeTag("button", {
  text: "copy"
});

makeEvent(btn, "click", async () => {

  const result = await efficiency.copy("hello world"); // return true or false

});
```

## Installation
```
npm i efficiency
```

## CDNs 
```html
<script src="https://unpkg.com/efficiency"></script> 

<!-- or --> 

<script src="https://cdn.jsdelivr.net/npm/efficiency"></script>
```

