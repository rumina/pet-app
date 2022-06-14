function addBox(parentId, nameClass, defaultValue) { 
  const liId = 'li-' + document.getElementById(parentId).childElementCount;
  const newLi = createLi(liId);
  const newTextInput = createTextInput(nameClass,defaultValue);
  if (!defaultValue) {
    newLi.appendChild(newTextInput);
    newLi.append(" ");
    const newRemoveButton = createRemoveButton(liId);
    newLi.appendChild(newRemoveButton);
  } else { 
    newLi.appendChild(newTextInput);
  }
  document.getElementById(parentId).appendChild(newLi);
}

function createLi(id){
  const newLi = document.createElement("li");
  newLi.setAttribute("id", id);
  return newLi;
}

function createTextInput(nameClass, defaultValue) { 
  const newTextInput = document.createElement("input");
  newTextInput.setAttribute('type', 'text');
  newTextInput.setAttribute('class', nameClass);
  if (!defaultValue) {
    newTextInput.setAttribute('placeholder', 'new value');
  }
  else { 
    newTextInput.setAttribute('value', defaultValue);
  }
  return newTextInput;
}

function createRemoveButton(id) { 
  const newRemoveButton = document.createElement("input");
  newRemoveButton.setAttribute('type', 'button');
  newRemoveButton.setAttribute('value', 'x');
  newRemoveButton.setAttribute('onclick', 'removeBox("' + id + '")');
  return newRemoveButton;
}

function removeBox(id) { 
  document.getElementById(id).remove();
}

function initialBox(parentId, nameClass, repeat) { 
  for (let i = 0; i < repeat; i++) {
    addBox(parentId, nameClass, i + 1);
  }
}

function getInputArray(className, tagId) { 
  const data = getDataFromDocument(className);
  const randomValue = getRandomData(data);
  document.getElementById(tagId).innerHTML = randomValue;
}

function getDataFromDocument(className) { 
  return document.querySelectorAll(className);
}

function getRandomData(data) { 
  return data[Math.floor(Math.random()*data.length)].value;
}
