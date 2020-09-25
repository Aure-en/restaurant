export const utils = (() => {

  const createLabel = (form, information) => {
    let label = document.createElement("label");
    label.setAttribute("for", information.toLowerCase());
    label.innerHTML = information;
    form.append(label);
  }

  const createInput = (form, input, type, id, name) => {
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    form.append(input);
  }
  
  const createList = (container, category, items) => {

    for (let i = 0 ; i < category.length ; i++) {

      let categoryBox = document.createElement("div");
      container.append(categoryBox);

      createTitle(categoryBox, category[i], "h2", false);
  
      let list = document.createElement("ul");

      for (let j = 0 ; j < items[i].length ; j++) {
        let item = document.createElement("li");
        item.innerHTML = items[i][j];
        list.append(item);
      }

      categoryBox.append(list);

    }
  };

  const createTitle = (container, titleContent, titleLevel, center) => {
    const title = document.createElement(titleLevel);
    title.innerHTML = titleContent;

    if (titleLevel == "h1") title.classList.add("mb-4");
    if (titleLevel == "h4") title.classList.add("mb-0");
    if (center) title.classList.add("text-center");

    container.append(title);
  }

  const createInformations = (container, subhead, content) => {

    const informationBox = document.createElement("div");
    container.append(informationBox);

    createTitle(informationBox, subhead, "h4", false);

    for (let contentInformation in content) {
      let information = document.createElement("div");
      information.innerHTML = `${content[contentInformation]}`;
      informationBox.append(information);
    }
  }

  return {
    createLabel,
    createInput,
    createList,
    createTitle,
    createInformations
  }

})()