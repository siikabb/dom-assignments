// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

for (const item of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${item.id}`;
  const label = document.createElement('label');
  label.for = `todo-${item.id}`;
  label.innerText = item.task;

  if (item.completed) {
    input.checked = true;
  }
  li.appendChild(input);
  li.appendChild(label);

  ul.appendChild(li);
}
