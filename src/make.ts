import { MakeOptions } from "./types";

// make function 
export function makeTag<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: MakeOptions = {}
):HTMLElementTagNameMap[K]{

  // create the main element 
  const element = document.createElement(tagName);

  // add classes if provided
  if (options.classes && options.classes.length > 0){
    element.classList.add(...options.classes.filter(Boolean));
  }


  // add attributes if provided


  // add text if provided
  if (options.text !== undefined) {
    element.textContent = options.text;
  }

  // add childs if provided
  
  return element;
}
