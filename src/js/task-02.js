const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listItemOne = document.createElement("li");
listItemOne.classList.add("item");
listItemOne.textContent = `${ingredients[0]}`;

const listItemTwo = document.createElement("li");
listItemTwo.classList.add("item");
listItemTwo.textContent = `${ingredients[1]}`;

const listItemThree = document.createElement("li");
listItemThree.classList.add("item");
listItemThree.textContent = `${ingredients[2]}`;

const listItemFour = document.createElement("li");
listItemFour.classList.add("item");
listItemFour.textContent = `${ingredients[3]}`;

const listItemFive = document.createElement("li");
listItemFive.classList.add("item");
listItemFive.textContent = `${ingredients[4]}`;

const listItemSix = document.createElement("li");
listItemSix.classList.add("item");
listItemSix.textContent = `${ingredients[5]}`;

list.append(
  listItemOne,
  listItemTwo,
  listItemThree,
  listItemFour,
  listItemFive,
  listItemSix
);

console.log(list);
