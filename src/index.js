document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission behavior

    // Get the task description input value
    const taskInput = document.querySelector('#new-task-description');
    const taskDescription = taskInput.value.trim();

    // Add the new task to the task list
    const newTask = document.createElement('li');
    newTask.innerText = taskDescription;
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  });

  taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.remove();
    }
  });
});
