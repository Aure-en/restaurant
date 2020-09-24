import { isEmptyObject } from "jquery";

export const contact = (() => {

  const _contactContent = {
    title: "Don't be a stranger",
    contact: {
      mail: "reservation@rhodes.com",
      tel: "Tel +33 (0)1 25 63 45 89",
      fax: "Fax +33 (0)1 56 89 51 37"
    },
    address: {
      street: "15 Boulevard Saint-Martin",
      city: "Paris",
      zip: "75 010",
      country: "France"
    }
  }

  const _reservationContent = {
    title: "Reservation"
  }

  const background = "../assets/images/contact.jpg";

  const display = (content) => {

    const contact = document.createElement("div");
    contact.classList.add("contact");
    content.append(contact);

    const contactTitle = document.createElement("h1");
    contactTitle.innerHTML = _contactContent.title;
    contact.append(contactTitle);

    for (let contactInformation in _contactContent.contact) {
      let information = document.createElement("div");
      information.innerHTML = `${_contactContent.contact[contactInformation]}`;
      contact.append(information);
    }

    const address = document.createElement("div");
    address.innerHTML = `${_contactContent.address.street}<br>${_contactContent.address.zip} ${_contactContent.address.city}<br>${_contactContent.address.country}`;
    contact.append(address);

    const reservation = document.createElement("div");
    reservation.classList.add("reservation");
    content.append(reservation);

    const reservationTitle = document.createElement("h1");
    reservationTitle.innerHTML = _reservationContent.title;
    reservation.append(reservationTitle);

    const form = document.createElement("form");
    form.classList.add("d-flex", "flex-column");
    reservation.append(form);

    for (let information of _reservationContent.inputs) {
      let label = document.createElement("label");
      label.setAttribute("for", information.toLowerCase());
      label.innerHTML = information;
      form.append(label);

      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", information);
      input.setAttribute("id", information);
      form.append(input);
    }

  }

  return { display, background };

})();