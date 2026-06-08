# quick-snap.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
1. snap utilities 
2. makeEvent function
3. makeTag function
4. Selectors

## randNum utility
```JavaScript
import { snap } from "quick-snap"; // ES Module
const { snap } = require("quick-snap"); // CommonJS

// the arguments are type, minimum and maximum number.
const num = snap.randNum("int", 1, 15);

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
// the arguments are html tag name and object 
const box = makeTag("div", {
  text: "hello world", // inner text
  classes: ["box"] // class names 
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
import { snap } from "quick-snap"; // ES Module
const { snap } = require("quick-snap"); // CommonJS

// make a button tag 
const btn = makeTag("button", {
  text: "copy"
});

// async function
makeEvent(btn, "click", async () => {

  const result = await snap.copy("hello world"); // return true or false

});
```

## Installation
```
npm install quick-snap
```

## CDNs 
```html
<script src="https://unpkg.com/quick-snap"></script> 

<!-- or --> 

<script src="https://cdn.jsdelivr.net/npm/quick-snap"></script>
```

## Update
```
npm install quick-snap
```
