// Wait for the entire HTML document to fully load before running any script
document.addEventListener('DOMContentLoaded', function () {
    // --- Step 1: Select DOM Elements ---
    const addButton = document.getElementById('add-task'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // --- Step 2: Define addTask Function ---
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task before adding.");
            return;
        }

        // --- Step 3: Create and Add Task ---
        const li = document.createElement('li'); // Create list item
        li.textContent = taskText; // Set its text

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When remove button is clicked → remove this task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);
        // Append list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // --- Step 4: Attach Event Listeners ---
    addButton.addEventListener('click', addTask); // Add when button clicked

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Add when Enter key is pressed
        }
    });
});
