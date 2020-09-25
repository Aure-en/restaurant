import { utils } from "./utils.js";

export const contact = (() => {

  const _contactContent = {
    title: "Contact",
    subheads: {
      contact: "Let's talk",
      address: "Let's meet"
    },
    contact: {
      mail: "reservation@rhodes.com",
      tel: "Tel +33 (0)1 25 63 45 89",
      fax: "Fax +33 (0)1 56 89 51 37"
    },
    address: {
      street: "15 Boulevard Saint-Martin",
      city: "75 010 Paris - France"
    },
    hours: "We are ready to welcome you with open arms every week day, from 8 to 21."
  }

  const _reservationContent = {
    title: "Reservation"
  }

  const background = "assets/images/contact.jpg";

  const display = (content) => {

    const contact = document.createElement("div");
    contact.classList.add("contact", "col-12", "col-sm-5", "p-sm-5", "d-flex", "flex-column", "justify-content-between");
    content.append(contact);

    utils.createTitle(contact, _contactContent.title, "h1", true);
    utils.createInformations(contact, _contactContent.subheads.contact, _contactContent.contact);

    utils.createInformations(contact, _contactContent.subheads.address, _contactContent.address);

    const hours = document.createElement("div");
    hours.innerHTML = _contactContent.hours;
    hours.classList.add("mt-2");
    contact.append(hours);

    const reservation = document.createElement("div");
    reservation.classList.add("reservation", "col-12", "col-sm-5", "p-sm-5");
    content.append(reservation);

    utils.createTitle(reservation, _reservationContent.title, "h1", true);

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
    sendBtn.classList.add("mt-3", "align-self-center", "px-3");
    sendBtn.setAttribute("value", "Send");

  }

  return { display, background };

})();