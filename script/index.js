const form = document.querySelector(".container__inputBar__form");
const input = document.querySelector(".container__inputBar__form__textField");
const addButton = document.querySelector(
  ".container__inputBar__form__addButton"
);
const ul = document.querySelector(".container__queue__list");
const removeButton = document.querySelector(
  ".container__inputBar__removeButton"
);

let itemsArray;
console.log(localStorage.getItem("items"));
if (localStorage.getItem("items")) {
  itemsArray = JSON.parse(localStorage.getItem("items"));
} else {
  itemsArray = [];
}
const data = itemsArray;
data.forEach((element) => {
  liMaker(element);
});

function liMaker(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (itemsArray.length <= 19) {
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));

    liMaker(input.value);
    input.value = "";
  } else {
    alert("Досягнуто максимальної кількості елементів!");
  }
});

removeButton.addEventListener("click", function () {
  let allElements = JSON.parse(localStorage.getItem("items"));
  if (allElements.length === 0) {
    alert("У черзі не залишилось елементів");
  } else {
    allElements.shift();
    localStorage.setItem("items", JSON.stringify(allElements));
    remove_first_child();
  }
});

function remove_first_child() {
  ul.removeChild(ul.firstChild);
}
