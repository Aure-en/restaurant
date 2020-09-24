export const header = (() => {

  const _headerContent = {
    logo: "",
    nav: ["Home", "Menu", "Contact"]
  }

  const createHeader = () => {

    const nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg");
    document.body.prepend(nav);

    const navBrand = document.createElement("a");
    navBrand.classList.add("navbar-brand");
    navBrand.setAttribute("href", "#");
    navBrand.innerHTML = "Rhodes";
    nav.append(navBrand);

    const navToggle = document.createElement("button");
    navToggle.classList.add("navbar-toggler");
    navToggle.setAttribute("type", "button");
    navToggle.setAttribute("data-toggle", "collapse");
    navToggle.setAttribute("data-target", "#nav-links");
    nav.append(navToggle);

    const navLinks = document.createElement("div");
    navLinks.setAttribute("id", "nav-links");
    nav.append(navLinks);

    const navLinkList = document.createElement("ul");
    navLinkList.classList.add("navbar-nav", "mr-auto");
    navLinks.append(navLinkList);

    for (let link of _headerContent.nav) {
      let navLink = document.createElement("button");
      navLink.classList.add("nav-link");
      navLink.innerHTML = link;
      navLinkList.append(navLink);
    }
  }

  return { createHeader };

})();

export const footer = (() => {

  const _footerContent = {
    mail: "reservation@rhodes.com",
    tel: "+33 (0)1 25 63 45 89",
    fax: "+33 (0)1 56 89 51 37",
    address: {
      street: "15 Boulevard Saint-Martin",
      city: "75 010 Paris",
      country: "France"
    }
  };

  const createFooter = () => {

    const footer = document.createElement("footer");
    document.body.append(footer);

    for (let footerInformation in _footerContent) {
      let information = document.createElement("div");
      information.innerHTML = footerInformation;
      footer.append(information);
    }
  }

  return { createFooter };

})();