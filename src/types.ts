// MATH_TYPES
export type RandomType = "int" | "float";

// EVENT_TYPES
export type EventTargetEl = string | Element | null;
export type EventCallback = (ev: Event) => void;


// MAKE_TYPES 
export type ElementAttributes = Record<string, string | number | boolean>;

export interface MakeOptions {
  classes?: string[];
  attributes?: ElementAttributes;
  text?: string;
  child?: HTMLElement[];
}
