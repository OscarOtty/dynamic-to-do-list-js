// Wait until the page content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign click event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to li, and li to the list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add event listener for button click
  addButton.addEventListener('click', addTask);

  // Add event listener for pressing "Enter"
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded (optional placeholder call)
  addTask();
});
