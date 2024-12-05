// Setting variables
const addButton = document.querySelector('.add-btn');
const input = document.querySelector('#todo-input');
const taskList = document.querySelector('#task-list');
const itemsLeft = document.querySelector("#items-left");

// Updates Items Left
function updateItemsLeft() {
  const uncheckedTasks = taskList.querySelectorAll('li input[type="checkbox"]:not(:checked)').length;
  itemsLeft.textContent = `${uncheckedTasks} items left`;

  
}

// Event Listener for add tasks
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
  listItem.append(checkBox, taskText, deleteButton);

  // Append the list item to the task list
  taskList.appendChild(listItem);
  // Updates the number of items left

  updateItemsLeft();
  input.value = ''; // Clear input
});


// Filter variables
const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const completedBtn = document.getElementById('completed-btn');

// Filters li items to show all
function filterAll() {
  const tasks = taskList.querySelectorAll('li');
  tasks.forEach(task => {
    task.style.display = 'flex'; // Show all tasks
  });
}
//Filters li items with the input checkbox 
function filterActive() {
  const tasks = taskList.querySelectorAll('li');
  tasks.forEach(task => {
    const checkBox = task.querySelector('input[type="checkbox"]');
    if (checkBox.checked) {
      task.style.display = 'none'; // Hide completed tasks
    } else {
      task.style.display = 'flex'; // Show active tasks
    }
  });
}
//Filters li items with the input checkbox 
function filterCompleted() {
  const tasks = taskList.querySelectorAll('li');
  tasks.forEach(task => {
    const checkBox = task.querySelector('input[type="checkbox"]');
    if (checkBox.checked) {
      task.style.display = 'flex'; // Show completed tasks
    } else {
      task.style.display = 'none'; // Hide active tasks
    }
  });
}

// Event listeners for the filter buttons
allBtn.addEventListener('click', filterAll);
activeBtn.addEventListener('click', filterActive);
completedBtn.addEventListener('click', filterCompleted);