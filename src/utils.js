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

      let title = document.createElement("h3");
      title.innerHTML = category[i];
      categoryBox.append(title);
  
      let list = document.createElement("ul");

      for (let j = 0 ; j < items[i].length ; j++) {
        let item = document.createElement("li");
        item.innerHTML = items[i][j];
        list.append(item);
      }

      categoryBox.append(list);

    }
  };

  const createTitle = (container, titleContent, center) => {
    const title = document.createElement("h1");
    title.innerHTML = titleContent;
    title.classList.add("mb-4");

    if (center) {
      title.classList.add("text-center");
    }

    container.append(title);
  }

  return {
    createLabel,
    createInput,
    createList,
    createTitle
  }

})()