// Variables
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// An array of fruit
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

let results = [];

// Filter The List Based On User Input
function search(str) {
  results = [
    ...fruit.filter((el) => el.toLowerCase().includes(str.toLowerCase())),
  ];

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.trim();

  // Clear the previous suggestions.
  results = [];
  suggestions.textContent = "";

  showSuggestions(search(inputVal), inputVal);
}

// Display The Results List As A Drop Down
function showSuggestions(results, inputVal) {
  const inputLower = inputVal.toLowerCase();
  for (let el of results) {
    const elLower = el.toLowerCase();
    const li = document.createElement("li");

    // search `inputLower` patterns used to match character
    // `"i"`, search should be case-insensitive - match both uppercase and lowercase
    const regex = new RegExp(inputLower, "i");
    // Replace all occurences of `regex` with `<strong>$&</strong>`
    // `$&` represents the matched substring
    let fruit = el.replace(regex, "<strong>$&</strong>");

    // Alternative to find match
    // const index = elLower.indexOf(inputLower);
    // const match = el.substring(index, index + inputVal.length);
    // const fruit = el.replace(match, "<strong>" + match + "</strong>");
    li.innerHTML = fruit;
    suggestions.append(li);
  }

  // Hide suggestions
  if (inputVal === "") {
    suggestions.textContent = "";
  }

  li.addEventListener("mouseover", highSuggestion);
  li.addEventListener("mouseout", removeHighlight);
}

function useSuggestion(e) {
  // Populate the search bar.
  input.value = e.target.textContent;
  suggestions.textContent = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

// Step 8. add event listener hover. function that highlights suggestion. showSuggestion.
//.css is hover. .js is mouseover
function highSuggestion(e) {
  const element = e.target;
  element.classList.add("highlight");
  element.classList.remove("remove-highlight");
}

function removeHighlight(e) {
  const element = e.target;
  element.classList.add("remove-highlight");
  element.classList.remove("highlight");
}
