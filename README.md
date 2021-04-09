# Class Name Literal

Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to build out class names.

```js
const variant = "dark";
const classList = cn`button ${variant}`; // -> "button dark";
```

You can insert an object anywhere in the string to convert the keys of those objects into class names, depending on if the value was truthy or not.

```js
const classList = cn`button ${{ dark: true }}`; // -> "button dark";
```

```js
const classList = cn`button ${{ dark: false }}`; // -> "button";
```

If the object is directly next to a string (meaning no whitespace between it), the keys will all be prefixed with that string.

```js
const classList = cn`button button--${{ dark: true, disabled: true }}`;
// -> "button button--dark button--disabled";
```

Note, that you can specify any separator (instead of "--") or no separator at all for the modifiers. It just repeats the previous string it sees as the prefix.

## Examples

```js
cn`item item--${{ selected: true }}`; // -> "item item--selected"
cn`item ${{ selected: true }}`; // -> "item selected"
cn`item ${{ selected: false }}`; // -> "item"
```

## Installation

`npm install class-name-literal`

`yarn add class-name-literal`

## Usage

```js
import cn from "class-name-literal";

const selected = true;

const classList = cn`item item--${{
	selected,
	hovered: false,
}}`; // item item--selected
```
