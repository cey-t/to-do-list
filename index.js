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

function createEditButton(newToDo, toDo) {
  const editButton = document.createElement("button");
  editButton.classList.add("buttonStyling");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    const inputField = document.createElement("input");
    inputField.value = newToDo.innerText;
    inputField.classList.add("inputField");
    toDo.replaceChild(inputField, newToDo);
    inputField.focus();
    inputField.addEventListener("blur", function () {
      newToDo.innerText = inputField.value;
      toDo.replaceChild(newToDo, inputField);
      toDo.removeChild(editButton);
      toDo.appendChild(createEditButton(newToDo));
    });
  });
  return editButton;
}

addButton.addEventListener("click", function () {
  if (inputField.value.trim() !== "") {
    const newToDo = document.createElement("p");
    newToDo.innerText = inputField.value;
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("toDoItem");
    const editButton = createEditButton(newToDo, toDoItem);
    const deleteToDoButton = deleteButton(toDoItem);
    toDoItem.appendChild(newToDo);
    toDoItem.appendChild(deleteToDoButton);
    toDoItem.appendChild(editButton);
    newToDo.classList.add("paragraphStyling");
    toDoContainer.appendChild(toDoItem);
    inputField.value = " ";
  }
});
