let historyData = [];

function addListItem(parentId, nameClass, defaultValue) { 
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

function initialListItem(parentId, nameClass, repeat) { 
  for (let i = 0; i < repeat; i++) {
    addListItem(parentId, nameClass, i + 1);
  }
}

function getInputArray(className, tagId, parentHistoryListId) { 
  const data = getDataFromDocument(className);
  const randomValue = getRandomData(data);
  document.getElementById(tagId).innerHTML = randomValue;
  const resultHistoryList = saveGetRandomValue(data, randomValue);
  showItemHistoryList(resultHistoryList, parentHistoryListId);
}

function showItemHistoryList(resultHistoryList, parentHistoryListId) { 
  const liId = 'li-his-' + document.getElementById(parentHistoryListId).childElementCount;
  const newLi = createLi(liId);
  const newParagraph = createParagraph(resultHistoryList);
  newLi.appendChild(newParagraph);
  document.getElementById(parentHistoryListId).appendChild(newLi);
}

function createParagraph(resultHistoryList) { 
  const newParagraph = document.createElement("p");
  const newSpanDetailBox = createNewSpan(resultHistoryList.detailBox);
  const newSpanRandomValue = createNewSpan(resultHistoryList.randomValue);
  newParagraph.append("For the inputs:");
  newParagraph.appendChild(newSpanDetailBox);
  newParagraph.append("the random result is: ");
  newParagraph.appendChild(newSpanRandomValue);
  return newParagraph;
}

function createNewSpan(data) { 
  const newSpan = document.createElement("span");
  if (data.isArray) {
    newSpan.append(data.join(","));
  }
  else { 
    newSpan.append(data);
  }
  return newSpan;
}

function getDataFromDocument(className) { 
  return document.querySelectorAll(className);
}

function getRandomData(data) { 
  return data[Math.floor(Math.random()*data.length)].value;
}

function saveGetRandomValue(data, randomValue){
  let detailBox = []
  data.forEach((element, index) => {
    detailBox[index] = element.value;
  });
  let history = { detailBox: detailBox, randomValue: randomValue };
  historyData.push(history);
  return history;
}