import { utils } from "./utils.js";

export const home = (() => {

  const _homeContent = {
    title: "Welcome to the Rhodes Café",
    text: [
    "Located in the heart of Paris, the Rhodes Café has always aspired to become a comfortable place where one can take a well-deserved break from the common hustle and bustle of city life.",
    "Our reclaimed wood countertops, vintage chairs and wide windows that let natural light pour in offer a nostalgic environment where the mind can relax while enjoying the soft fragrance of coffee.",
    "Take a sit on our cosy sofas, and read a few pages of one of our hundred novels while sipping on your favorite drink (made with ♥)."]
    };

  const background = "assets/images/home.jpg";

  const display = (content) => {

    const home = document.createElement("div");
    home.classList.add("home", "col-md-6", "offset-md-5", "col-lg-4", "offset-lg-6", "p-5");
    content.append(home);
    
    utils.createTitle(home, _homeContent.title, "h1", false);

    for (let i = 0 ; i < _homeContent.text.length ; i++) {
      let paragraph = document.createElement("p");
      paragraph.classList.add("text-justify");
      paragraph.innerHTML = _homeContent.text[i];
      home.append(paragraph);
    }
  }

  return { display, background };

})();