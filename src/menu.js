export const menu = (() => {

  const _menuContent = {
    title: "Menu",
    subhead: "Explore our delicious and handcrafted beverages. Make your break perfect by savoring them with a simple, yet delicious pastry.",
  
    headings: ["Drinks", "Food"],
    descriptions: ["Professionally crafted coffee, prepared with love by passionate baristas. Whether hot or cold, its taste is guaranteed to bloom in your mouth.",
    "Our pastries and sandwiches are made with high-quality, simple ingredients. So all the goodness you taste is real food, simply delicious."],
  
    drinksCategories: ["Expresso & More", "Iced Coffee"],
    drinks: [
      ["Caffè Latte", "Cappucino", "Caramel Macchiato", "Espresso", "White Caffè Mocha", "Caffè Americano", "Hot Chocolates"],
      ["Cold Brew", "Cold Brew Latte", "Iced Cappucino with Cold Foam"]
    ],
  
    foodCategories: ["Cakes", "Sandwiches & Salads"],
    food: [
      ["Lemon Loaf Cake", "Banana Bread", "Marble Cake", "Raspberry Cheesecake"],
      ["Croissant Roll - Bacon & Egg", "Mozzarella & Grilled Veggie Focaccia", "Chicken, Tomato and Mozzarella Ciabatta", "Italian Roast Veggie & Pasta Salad"]
    ]
  };

  const background = "../assets/images/menu.jpg";

  const _listCategory = (container, category, items) => {

    for (let i = 0 ; i < category.length ; i++) {
      let title = document.createElement("h3");
      title.innerHTML = category[i];
      container.append(title);
  
      let list = document.createElement("ul");

      for (let j = 0 ; j < items[i].length ; j++) {
        let item = document.createElement("li");
        item.innerHTML = items[i][j];
        list.append(item);
      }

      container.append(list);

    }
  };

  const display = (content) => {

    //Menu container
    const menu = document.createElement("div");
    menu.classList.add("menu", "m-auto", "col-6", "p-5");
    content.append(menu);
  
    //Menu header (title and short description)
    const title = document.createElement("h1");
    title.innerHTML = _menuContent.title;
    menu.append(title);
  
    const subhead = document.createElement("div");
    subhead.innerHTML = _menuContent.subhead;
    subhead.classList.add("mb-5");
    menu.append(subhead);
  
    //Actual menu content (drinks and food lists)
    const menuList = document.createElement("div");
    menuList.classList.add("menu__list", "row");
    menu.append(menuList);
  
    //1. Drinks
    const drinks = document.createElement("div");
    drinks.classList.add("menu__drinks", "col-6");
    menuList.append(drinks);
  
    //For each drink category, create the title of the category, followed by the list of items in this category.
    _listCategory(drinks, _menuContent.drinksCategories, _menuContent.drinks);
    
    //2. Food
    const food = document.createElement("div");
    food.classList.add("menu__food", "col-6", "d-flex", "flex-column", "justify-content-between");
    menuList.append(food);
  
    //For each food category, create the title of the category, followed by the list of items in this category.
    _listCategory(food, _menuContent.foodCategories, _menuContent.food);
  
  }

  return { display, background }

})();