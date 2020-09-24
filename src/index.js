import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { header, footer } from "./persistent.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

header.createHeader();
footer.createFooter();

const displayContent = (() => {

  const content = document.querySelector("#content");

  const changeBackground = (src) => {
    document.body.style.backgroundImage = `url('${src}')`;
  }

  const _changeContent = (event) => {

    switch (event.target.innerHTML.toLowerCase()) {

      case 'home':
        home.display(content);
        changeBackground(home.background);
        break;
      
      case 'menu':
        menu.display(content);
        changeBackground(menu.background);
        break;

      case 'contact':
        contact.display(content);
        changeBackground(contact.background);
        break;

    }

  }

  const _removeContent = () => {
    content.innerHTML = "";
  }

  const enableChange = () => {
    for (let link of document.querySelectorAll(".nav-link")) {
      link.addEventListener("click", _removeContent);
      link.addEventListener("click", _changeContent);
    }
  }

  return { content, enableChange, changeBackground };

})();

displayContent.enableChange();
window.addEventListener("load", () => { home.display(displayContent.content); displayContent.changeBackground(home.background); });