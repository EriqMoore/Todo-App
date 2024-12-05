const addButton = document.querySelector('.add-btn');
const input = document.querySelector('#todo-input');
const taskList = document.querySelector('#task-list');
const itemsLeft = document.querySelector("#items-left");
function updateItemsLeft() {
  const uncheckedTasks = taskList.querySelectorAll('li input[type="checkbox"]:not(:checked)').length;
  itemsLeft.textContent = `${uncheckedTasks} items left`;
  
}

addButton.addEventListener('click', () => {


  const task = input.value.trim();

  if (task === '') {
    alert('Task cannot be empty!');
    return;
  }
  

  // Create list item
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;

  // Create checkbox
  const checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute('aria-label', 'Mark task as complete');
  checkBox.addEventListener('change', () => {
    taskText.classList.toggle("strike-through", checkBox.checked);
    updateItemsLeft();

  });
  

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem); // Remove the task when button clicked
    updateItemsLeft();
  });

  // Append elements in the correct order
  listItem.appendChild(checkBox);   // 1. Add the checkbox
  listItem.appendChild(taskText);   // 2. Add the task text
  listItem.appendChild(deleteButton); // 3. Add the delete button

  // Append the list item to the task list
  taskList.appendChild(listItem);
  // Updates the number of items left

  updateItemsLeft();
  input.value = ''; // Clear input
});

updateItemsLeft();


