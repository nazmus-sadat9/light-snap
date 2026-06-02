type RandomType = "int" | "float";
type EventTargetEl = string | Element | null;
type EventCallback = (ev: Event) => void;
type ElementAttributes = Record<string, string | number | boolean>;
interface MakeOptions {
    classes?: string[];
    attributes?: ElementAttributes;
    text?: string;
    child?: HTMLElement[];
}

declare function random(type: RandomType, min: number, max: number): number;

declare const math_random: typeof random;
declare namespace math {
  export { math_random as random };
}

declare function event(element: EventTargetEl, // html target element
type: string, // event type
callback: EventCallback): void;

declare function make<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: MakeOptions): HTMLElementTagNameMap[K];

declare global {
    function query(selector: string): HTMLElement | null;
    function id(selector: string): HTMLElement | null;
}
declare const query: (selector: string) => HTMLElement | null;
declare const id: (selector: string) => HTMLElement | null;

declare const lightMath: {
    randNum: typeof random;
};

export { type ElementAttributes, type EventCallback, type EventTargetEl, type MakeOptions, type RandomType, event, id, lightMath, make, math as mathfunc, query };
