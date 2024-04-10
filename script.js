// ************************************************
// built-in class: .search-container, .suggestions
// added class: .has-suggestions
// ************************************************

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

function search(str) {
  // TODO
  // filter the fruit list based on whatever user input is in the search box.
  // If the string in the user input appears ANYWHERE in the fruit name,
  // it should be added to results list.
  // It also should not matter if a user types upper or lower case letters.
  // That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list.
  results = [
    ...fruit.filter((el) => el.toLowerCase().includes(str.toLowerCase())),
  ];

  return results;
}

function searchHandler(e) {
  // TODO
  // Reset
  results = [];
  suggestions.textContent = "";

  showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
  // TODO
  // Add item to suggestions
  for (let el of results) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.className = "has-suggestions";

    // for each character that matches, style it bold
    li.textContent = el;

    li.append(span); // <li><span></span></li>
    suggestions.append(li);
    console.log(li.innerHTML);
  }
}

function useSuggestion(e) {
  // TODO
  // Populate the search bar.
  input.value = e.target.textContent;
  suggestions.textContent = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
