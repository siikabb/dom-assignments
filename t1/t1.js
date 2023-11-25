'use strict';

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

const ul = document.querySelector('ul');

for (const item of todoList) {
  if (item.completed) {
    ul.insertAdjacentHTML(
      'beforeend',
      `<li><input type="checkbox" id="todo-${item.id}" checked><label for="todo-${item.id}">${item.task}</label></li>`
    );
  } else {
    ul.insertAdjacentHTML(
      'beforeend',
      `<li><input type="checkbox" id="todo-${item.id}"><label for="todo-${item.id}">${item.task}</label></li>`
    );
  }
}
