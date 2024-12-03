
const addButton = document.querySelector('.add-btn');
const input = document.querySelector('#todo-input');
const taskList = document.querySelector('#task-list');
addButton.addEventListener('click', () => {
    const task = input.value.trim();
  
    if (task === '') {
      alert('Task cannot be empty!');
      return;
    }
  
    const listItem = document.createElement('li');
    listItem.textContent = task;
  
    const deleteButton = document.createElement('button'); // Create delete button
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem); // Remove the task when button clicked
    });
  
    listItem.appendChild(deleteButton); // Add delete button to the task
    taskList.appendChild(listItem);
  
    input.value = ''; // Clear input
  });
