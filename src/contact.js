import { utils } from "./utils.js";

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

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("m-auto", "d-flex", "justify-content-around");
    content.append(contactContainer);

    const contact = document.createElement("div");
    contact.classList.add("contact", "col-5", "p-5");
    contactContainer.append(contact);

    utils.createTitle(contact, _contactContent.title);

    for (let contactInformation in _contactContent.contact) {
      let information = document.createElement("div");
      information.innerHTML = `${_contactContent.contact[contactInformation]}`;
      contact.append(information);
    }

    const address = document.createElement("div");
    address.innerHTML = `${_contactContent.address.street}<br>${_contactContent.address.zip} ${_contactContent.address.city}<br>${_contactContent.address.country}`;
    contact.append(address);

    const reservation = document.createElement("div");
    reservation.classList.add("reservation", "col-5", "p-5");
    contactContainer.append(reservation);

    utils.createTitle(reservation, _reservationContent.title);

    const form = document.createElement("form");
    form.classList.add("d-flex", "flex-column");
    reservation.append(form);

    utils.createLabel(form, "Name");
    const inputName = document.createElement("input");
    utils.createInput(form, inputName, "text", "name", "name");

    utils.createLabel(form, "Phone");
    const inputTel = document.createElement("input");
    utils.createInput(form, inputTel, "tel", "phone", "phone");

    utils.createLabel(form, "Message");
    const inputMessage = document.createElement("textarea");
    inputMessage.setAttribute("id", "message");
    inputMessage.setAttribute("name", "message");
    form.append(inputMessage);

    const sendBtn = document.createElement("input");
    utils.createInput(form, sendBtn, "submit", "send", "send");
    sendBtn.setAttribute("value", "Send");

  }

  return { display, background };

})();