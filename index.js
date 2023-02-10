let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");
let addButton = document.getElementById("addButton");
function deleteButton(toDo) {
  const deleteToDoButton = document.createElement("button");
  deleteToDoButton.innerText = "Delete";
  deleteToDoButton.classList.add("buttonStyling");
  deleteToDoButton.addEventListener("click", function () {
    toDoContainer.removeChild(toDo);
  });
  return deleteToDoButton;
}

function createEditButton(newToDo, toDo, buttons) {
  const editButton = document.createElement("button");
  editButton.classList.add("buttonStyling");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    const inputField = document.createElement("input");
    inputField.value = newToDo.innerText;
    inputField.classList.add("inputField", "editField");
    toDo.replaceChild(inputField, newToDo);
    inputField.focus();
    inputField.addEventListener("blur", function () {
      newToDo.innerText = inputField.value;
      toDo.replaceChild(newToDo, inputField);
      buttons.removeChild(editButton);
      butt.appendChild(createEditButton(newToDo, toDo, buttons));
    });
  });
  return editButton;
}

addButton.addEventListener("click", function () {
  if (inputField.value.trim() !== "") {
    const newToDo = document.createElement("p");
    newToDo.innerText = inputField.value;
    const toDoItemContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("modifyToDoButton");
    toDoItemContainer.classList.add("toDoItem");
    const editButton = createEditButton(
      newToDo,
      toDoItemContainer,
      buttonContainer
    );
    const deleteToDoButton = deleteButton(toDoItemContainer);
    buttonContainer.appendChild(deleteToDoButton);
    buttonContainer.appendChild(editButton);
    toDoItemContainer.appendChild(newToDo);
    toDoItemContainer.appendChild(buttonContainer);
    newToDo.classList.add("paragraphStyling");
    toDoContainer.appendChild(toDoItemContainer);
    inputField.value = " ";
  }
});
