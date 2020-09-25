export const header = (() => {

  const _headerContent = {
    logo: "",
    nav: ["Home", "Menu", "Contact"]
  }

  const createHeader = () => {

    const header = document.createElement("header");
    document.body.prepend(header);

    const nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-sm", "navbar-light", "px-0");
    header.append(nav);

    const navBrand = document.createElement("a");
    navBrand.classList.add("navbar-brand");
    navBrand.setAttribute("href", "#");
    navBrand.innerHTML = `<img src="../assets/images/rhodes_brand.png" alt="Rhodes Logo">`;
    nav.append(navBrand);

    const navToggle = document.createElement("button");
    navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
    navToggle.classList.add("navbar-toggler", "mr-3");
    navToggle.setAttribute("type", "button");
    navToggle.setAttribute("data-toggle", "collapse");
    navToggle.setAttribute("data-target", "#nav-links");
    nav.append(navToggle);

    const navLinks = document.createElement("div");
    navLinks.setAttribute("id", "nav-links");
    navLinks.classList.add("collapse", "navbar-collapse");
    nav.append(navLinks);

    const navLinkList = document.createElement("ul");
    navLinkList.classList.add("navbar-nav", "ml-auto");
    navLinks.append(navLinkList);

    for (let link of _headerContent.nav) {
      let navLink = document.createElement("button");
      navLink.classList.add("nav-link", "mr-3");
      navLink.innerHTML = link;
      navLinkList.append(navLink);
    }
  }

  return { createHeader };

})();

export const footer = (() => {

  const _footerContent = {
    contact : {
      mail: "reservation@rhodes.com",
      tel: "+33 (0)1 25 63 45 89",
      fax: "+33 (0)1 56 89 51 37"
    },
    address: {
      street: "15 Boulevard Saint-Martin",
      city: "75 010 Paris - France"
    }
  };

  const createFooter = () => {

    const footer = document.createElement("footer");
    footer.classList.add("d-flex", "flex-column", "flex-md-row", "justify-content-center", "align-items-center", "p-3");
    document.body.append(footer);

    for (let footerInformation in _footerContent.contact) {
      let information = document.createElement("div");
      information.classList.add("px-1", "px-lg-3");
      information.innerHTML = _footerContent.contact[footerInformation];
      footer.append(information);
    }

    for (let footerInformation in _footerContent.address) {
      let information = document.createElement("div");
      information.classList.add("px-1");
      information.innerHTML = _footerContent.address[footerInformation];
      footer.append(information);
    }

  }

  return { createFooter };

})();