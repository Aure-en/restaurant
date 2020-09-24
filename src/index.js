import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { header, footer } from "./persistent.js";

header.createHeader();
footer.createFooter();

const displayContent = (() => {

  const _content = document.querySelector("#content");

  const _changeContent = (event) => {

    console.log(event.target.innerHTML);

    switch (event.target.innerHTML.toLowerCase()) {

      case 'home':
        home.display(_content);
        break;
      
      case 'menu':
        menu.display(_content);
        break;

      case 'contact':
        contact.display(_content);
        break;

    }

  }

  const _removeContent = () => {
    _content.innerHTML = "";
  }

  const enableChange = () => {
    for (let link of document.querySelectorAll(".nav-link")) {
      link.addEventListener("click", _removeContent);
      link.addEventListener("click", _changeContent);
    }
  }

  return { enableChange };

})();

displayContent.enableChange();