const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
 ];


function e(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
};

function createFruitList(fruitlist) {
  return e(
    "div",
    { className: "fruit-title" },
    e(
      "ul",
      {className: "Fruit-list"},
      e(
        "li",
      ),
      e(
        "li",

      ),
      e(
        "li",
      ),
      e(
        "li",
      ),
      e(
        "li",
      ),
      e(
        "li",
      ),
      e(
        "li",
      ),
    ), 
  );
}

const app = document.getElementById("app");

fruitList.forEach(function (fruitlist) {
    app.append(createFruitList(fruitlist));
});