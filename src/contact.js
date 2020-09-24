export const contact = (() => {

  const _contactContent = {
    title: "Don't be a stranger",
    contact: {
      mail: "reservation@rhodes.com",
      tel: "+33 (0)1 25 63 45 89",
      fax: "+33 (0)1 56 89 51 37"
    },
    address: {
      street: "15 Boulevard Saint-Martin",
      city: "Paris",
      zip: "75 010",
      country: "France"
    }
  }

  const background = "../assets/contact.jpg";

  const display = (content) => {

    const contact = document.createElement("div");
    contact.classList.add("contact");
    content.append(contact);

    const title = document.createElement("h1");
    title.innerHTML = _contactContent.title;
    contact.append(title);

    for (let contactInformation in _contactContent.contact) {
      let information = document.createElement("div");
      information.innerHTML = `${contactInformation} ${_contactContent.contact[contactInformation]}`;
      contact.append(information);
    }

    const address = document.createElement("div");
    address.innerHTML = `${_contactContent.address.street}<br>${_contactContent.address.zip} ${_contactContent.address.city}<br>${_contactContent.address.country}`;
    contact.append(address);
  }

  return { display, background };

})();