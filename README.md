# Springboard - Predictive Text Project (Fruit Search)

## Table of contents

- [Springboard - Predictive Text Project (Fruit Search)](#springboard---predictive-text-project-fruit-search)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Acknowledgments](#acknowledgments)
  - [Time estimate](#time-estimate)

## Overview

Plan and build an Autofill Search Bar for various types of fruit with suggestions based on user input. A list of fruits and a mock up is provided. 

If a user's typed input is contained anywhere in one of the fruits in the list, then a drop down will appear containing all the fruits which match. 

As a user continues to add letters to their input, new dropdowns will populate. 

When a user clicks on one of these options, it will populate in the search bar. 

### The challenge

- Filter The List Based On User Input
- Replaces all occurrences within the string with the matched substring 

## My process

1. Planning
  - What HTML to use for the search bar? How about the drop down, the search button, and the filler text which will appear on the page?
    - Search bar: `<input type="text">`
    - Drop down: `<option>` within `<select>`.
    - Filler text: `placeholder="filler text"`
  - What CSS to use to create the color gradient on the page?
    - `background: linear-gradient(color, color)`
  - What type of JavaScript event listeners would be needed to add to refresh the drop-down as a user types?
    - `input` event
  - How to populate the search bar with an option from the drop down list? What event would trigger this action?
    - `click` event on dropdown list
  - How would you structure your functions?
    - When users click on search bar, it gets focused. 
    - Users start typing 
    - Dropdown menu shows up with a list of suggestion 
    - As user continues to add letters to their input, new dropdowns will populate. 
    - populate the search bar with a click on suggested word

2. Read the Starter Code
  - HTML, a `input` element and `.suggestions` nested in `.search-container`.
  - JavaScript
    - `input` and `suggestions` variables are created. An array of fruit is given.
    - Four functions need to be completed. 
    - One `click` event listener, one `keyup` event listener. 
      - When the keyup event is fired (a key is released), `searchHandler()` is called.
      - When users click on a suggestion, `useSuggestion()` is called

3. Create a Search Bar On Screen (Provided)
4. Add Placeholder Text Into The Search Bar (Provided)
5. Add An Event Listener For Key Strokes (Provided)
6. Filter The List Based On User Input
7. Display The Results List As A Drop Down 
   - clear the results array before populating it with new suggestions.
8. Highlight the suggestion below a user’s cursor (Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.) - For learning purpose.
9. Populate the search box with a user’s selected suggestion
    - When a user clicks on a suggestion, that string should fill the Search Bar. Add an event listener which triggers when a user clicks. Write a function useSuggestion() to populate the Search Bar with the suggestion. Add this function to the event listener.
10. Style the Page

### Built with
- HTML
- CSS
- JavaScript

### What I learned
Mistake - pushing a filterd array into array resulting an array of arrays
``` JS
function search(str) {
  let results = [];
  results.push(
    fruit.filter((el) => el.toLowerCase().includes(str.toLowerCase()))
  );

  return results;
}
```

Regular Expression
```JS
// search patterns used to match character
const regex = new RegExp(inputLower, "i");
let fruit = el.replace(regex, "<strong>$&</strong>");
```
This code replaces all occurrences of the case-insensitive pattern stored in `inputLower` within the string `el` with the matched substring wrapped in `<strong>` tags. The result is stored in the variable fruit

## Acknowledgments

Springboard Software Engineering Mentor - Sonia

## Time estimate 

Springboard: 6 - 10 hours
Goal: 8 hours
Reality
-   Session 1: 150 mins
-   Session 2: 120 mins
-   Session 3: 140 mins
-   Session 4: 92 mins
-   Session 5: 120 mins

