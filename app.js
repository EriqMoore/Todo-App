const addButton = document.querySelector('.add-btn');
const input = document.querySelector('#todo-input');
const taskList = document.querySelector('#task-list');

addButton.addEventListener('click', () => {
  const task = input.value.trim();

  if (task === '') {
    alert('Task cannot be empty!');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');

  // Create checkbox
  let checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
   checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = '';
    }
  });
  const taskText = document.createElement('span');
  taskText.textContent = task;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem); // Remove the task when button clicked
  });

  // Append elements in the correct order
  listItem.appendChild(checkBox);   // 1. Add the checkbox
  listItem.appendChild(taskText);   // 2. Add the task text
  listItem.appendChild(deleteButton); // 3. Add the delete button

  // Append the list item to the task list
  taskList.appendChild(listItem);

  input.value = ''; // Clear input
});

