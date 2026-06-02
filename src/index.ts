// global functions 
declare global {
  function query(selector: string): HTMLElement | null;
  //function _all(selector: string);
  function id(selector: string): HTMLElement | null;
}

// describe the global functions
// Query Selector
export const query = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

// Id Selector
export const id = (selector: string): HTMLElement | null => {
  return document.getElementById(selector);
};

// use for browser and frontend 
if (typeof window !== "undefined"){
  (window as any).query = query;
  (window as any).id = id;
}


// ES modules
import * as mathfunc from "./math";
export * from "./types";
export { event } from "./events";
export { make } from "./make";


export { mathfunc };

// math object
export const lightMath = {
  randNum: mathfunc.random,
}
