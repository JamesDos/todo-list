import {Todo} from './todo';
import {Project} from './project';
import { formatDistance, subDays } from "date-fns";

const createTodo = (title, description, dueDate, priority, isComplete) => {
  let todo = new Todo(title, description, dueDate, priority, isComplete);
  // Initilize DOM elements
  const todoContainer = document.createElement('div');
  const titleLabel = document.createElement('h4');
  const descriptionLabel = document.createElement('p');
  const dateLabel = document.createElement('p');
  const priorityBtn = document.createElement('button');
  const isCompleteBtn = document.createElement('button');
  const editButton = document.createElement('select');
  const editSelection = document.createElement('option');
  const deleteSelection = document.createElement('option');
  // Set text content
  titleLabel.textContent = todo.title;
  descriptionLabel.textContent = todo.description;
  dateLabel.textContent = todo.date;
  priorityBtn.textContent = todo.priority;
  isCompleteBtn.textContent = todo.isComplete;
  editButton.textContent = '...'
  editSelection.textContent = 'Edit';
  deleteSelection.textContent = 'Delete';
  // Set classes
  todoContainer.classList.add('todo-container');
  titleLabel.classList.add('title-label');
  descriptionLabel.classList.add('description-label');
  dateLabel.classList.add('date-label');
  priorityLabel.classList.add('priority-label');
  isCompleteLabel.classList.add('is-complete-label');
  editButton.classList.add('edit-btn');
  // Append Children
  editButton.appendChild(editSelection);
  editButton.appendChild(deleteSelection);
  const childrenArr = [titleLabel, descriptionLabel, dateLabel, priorityBtn, isCompleteBtn, editButton, editSelection];
  todoContainer.append(...childrenArr);
  return todoContainer;
}

const createProject = (todoList) => {
  let project = new Project(todoList);
  let todoArr = project.todoList;

}

export default {createTodo}