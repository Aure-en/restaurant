import { utils } from "./utils.js";

export const menu = (() => {

  const _menuContent = {
    title: "Menu",
    subhead: "Explore our delicious and handcrafted beverages. Make your break perfect by savoring them with a simple, yet delicious pastry. For longer breaks, feel free to try one of our salads or sandwiches, both made with the freshest organic ingredients.",
  
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

  const display = (content) => {

    //Menu container
    const menu = document.createElement("div");
    menu.classList.add("menu", "m-auto", "col-12", "col-sm-10", "col-md-8", "col-lg-6", "p-4", "p-sm-5");
    content.append(menu);
  
    //Menu header (title and short description)
    utils.createTitle(menu, _menuContent.title, "h1", true);
  
    const subhead = document.createElement("div");
    subhead.innerHTML = _menuContent.subhead;
    subhead.classList.add("mb-5", "text-justify");
    menu.append(subhead);
  
    //Actual menu content (drinks and food lists)
    const menuList = document.createElement("div");
    menuList.classList.add("menu__list", "row");
    menu.append(menuList);
  
    //1. Drinks
    const drinks = document.createElement("div");
    drinks.classList.add("menu__drinks", "col-12", "col-sm-6");
    menuList.append(drinks);
  
    //For each drink category, create the title of the category, followed by the list of items in this category.
    utils.createList(drinks, _menuContent.drinksCategories, _menuContent.drinks);
    
    //2. Food
    const food = document.createElement("div");
    food.classList.add("menu__food", "col-12", "col-sm-6", "d-flex", "flex-column", "justify-content-between");
    menuList.append(food);
  
    //For each food category, create the title of the category, followed by the list of items in this category.
    utils.createList(food, _menuContent.foodCategories, _menuContent.food);
  
  }

  return { display, background }

})();