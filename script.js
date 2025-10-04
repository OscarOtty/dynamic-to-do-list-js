// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

  // Select important DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim the input text
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove the task
    removeButton.onclick = function() {
      taskList.removeChild(li);
    };

    // Append button to li and li to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Event listener for button click
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" key
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally invoke addTask on page load if needed
  // (You can remove this if not required)
  addTask();
});
