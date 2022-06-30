const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
 ];

// ham e tao nhanh cac the
function e(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
};

// khai bao ham de tao ra danh sach
function createFruitList(fruits) {

  // tao ra the ul rong co class la fruit-list
  const list = e("ul", { className: "fruit-list" });

  // lap qua tung phan tu trong danh sach fruits
  for (let fruit of fruits) {
    // tao ra the li co class la fruit
    let item = e ("li", {className: "fruit"}, fruit);

    // them vao the ul tung cai li
    list.append(item);
  }
  //tra ve ul va nhieu li ben trong
  return list;
}


app.append(createFruitList(fruitList));
