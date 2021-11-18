const shoppingList = [
  {
    id: 1,
    item: "milk",
    price: "2.99",
  },
  {
    id: 2,
    item: "eggs",
    price: "1.99",
  },
  {
    id: 3,
    item: "pizza rolls",
    price: "10.99",
  },
  {
    id: 4,
    item: "apples",
    price: "4.99",
  },
  {
    id: 5,
    item: "sandwich buns",
    price: "9.99",
  },
];

shoppingList.forEach((item) => (item.dateCreated = new Date()));

const bananas = {
  item: "bananas",
  price: 1.49,
};

addToShoppingList(bananas);

console.log(shoppingList);
console.log("items over $8:", filterExpensiveItems());

//functions

function addToShoppingList(shopItem) {
  // get id
  const idsArray = shoppingList.map((item) => item.id);
  const id = Math.max(...idsArray) + 1;
  shopItem.id = id;
  const today = new Date();
  // const date = `${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

  shopItem.dateCreated = today;

  shoppingList.push(shopItem);
}

function filterExpensiveItems() {
  const expensiveItems = [];
  for (const item of shoppingList) {
    if (item.price >= 8) {
      expensiveItems.push(item);
    }
  }
  return expensiveItems;
}
