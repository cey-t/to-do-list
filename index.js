let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");
let addButton = document.getElementById("addButton");
function deleteButton(newToDo, editToDo) {
  const deleteToDoButton = document.createElement("button");
  deleteToDoButton.innerText = "Delete";
  deleteToDoButton.classList.add("buttonStyling");
  deleteToDoButton.addEventListener("click", function () {
    toDoContainer.removeChild(newToDo);
    toDoContainer.removeChild(deleteToDoButton);
    toDoContainer.removeChild(editToDo);
  });
  return deleteToDoButton;
}
function createEditButton(newToDo) {
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("buttonStyling");
  editButton.addEventListener("click", function () {
    const inputEdit = document.createElement("input");
    console.log(inputEdit);
    inputEdit.value = newToDo.innerText;
    console.log(newToDo);
    toDoContainer.appendChild(inputEdit);
    console.log(toDoContainer);
    inputEdit.classList.add("inputField");
    toDoContainer.replaceChild(inputEdit, newToDo);
    inputEdit.addEventListener("blur", function () {
      newToDo.innerText = inputEdit.value;
      toDoContainer.replaceChild(newToDo, inputEdit);
    });
  });
  return editButton;
}

addButton.addEventListener("click", function () {
  if (inputField.value.trim() !== "") {
    const newToDo = document.createElement("p");
    newToDo.innerText = inputField.value;
    const editButton = createEditButton(newToDo);
    const deleteToDoButton = deleteButton(newToDo, editButton);
    newToDo.classList.add("paragraphStyling");
    toDoContainer.appendChild(newToDo);
    toDoContainer.appendChild(deleteToDoButton);
    toDoContainer.appendChild(editButton);
    inputField.value = " ";
  }
});
