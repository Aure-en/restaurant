export const home = (() => {

  const _homeContent = {
    title: "Welcome to the Rhodes Coffee Shop",
    text: [
    "Located in the heart of Paris, the Rhodes Coffee Shop has always aspired to become a comfortable place where one can take a well-deserved break from the common hustle and bustle of city life.",
    "Our reclaimed wood countertops, vintage chairs and wide windows that let natural light pour in offer a nostalgic environment where the mind can relax while enjoying the soft fragrance of coffee.",
    "Take a sit on our cosy sofas, and read a few pages of one of our hundred novels while sipping on your favorite drink (made with ♥)."]
    };

  const displayHome = () => {

    const home = document.createElement("div");
    home.classList.add("home");
    content.append(home);
    
    const title = document.createElement("h1");
    title.innerHTML = _homeContent.title;
    home.append(title);

    for (let i = 0 ; i < _homeContent.text.length ; i++) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = _homeContent.text[i];
      home.append(paragraph);
    }
  }

  return { displayHome };

})();