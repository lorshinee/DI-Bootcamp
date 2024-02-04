const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];

taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      task_id: tasks.length,
      text: taskText,
      done: false
    };
    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
  }
}

function renderTask(task) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('taskItem');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.addEventListener('change', () => toggleDone(task.task_id));
  
  const taskLabel = document.createElement('label');
  taskLabel.textContent = task.text;
  
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('deleteTask');
  deleteButton.innerHTML = '&#10006;';
  deleteButton.addEventListener('click', () => deleteTask(task.task_id));
  
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);
  
  taskList.appendChild(taskItem);
}

function toggleDone(taskId) {
  tasks[taskId].done = !tasks[taskId].done;
}

function deleteTask(taskId) {
  tasks = tasks.filter((task, index) => index !== taskId);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    renderTask(task);
  });
}
