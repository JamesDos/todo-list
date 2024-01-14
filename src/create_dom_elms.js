import {Todo} from './todo';
import {Project} from './project';
import { add, formatDistance, subDays } from "date-fns";

const CreateDomElms = (() => {
  const createTodo = (title, description, dueDate, priority, isComplete) => {
    let todo = new Todo(title, description, dueDate, priority, isComplete);
    // Initilize DOM elements
    const todoContainer = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const titleLabel = document.createElement('h4');
    const descriptionLabel = document.createElement('p');
    const dateLabel = document.createElement('p');
    const priorityBtnContainer = document.createElement('div');
    const isCompleteBtn = document.createElement('div');
    const editButton = document.createElement('select');
    const editSelection = document.createElement('option');
    const deleteSelection = document.createElement('option');
    // Set text content
    titleLabel.textContent = todo.title;
    descriptionLabel.textContent = todo.description;
    dateLabel.textContent = todo.date;
    editButton.textContent = '...'
    editSelection.textContent = 'Edit';
    deleteSelection.textContent = 'Delete';
    // Set classes
    todoContainer.classList.add('todo-container');
    descriptionContainer.classList.add('todo-description-container');
    titleLabel.classList.add('title-label');
    descriptionLabel.classList.add('description-label');
    dateLabel.classList.add('date-label');
    priorityBtnContainer.classList.add('priority-btn-container');
    isCompleteBtn.classList.add('is-complete-label', 'unchecked');
    editButton.classList.add('edit-btn');
    editSelection.classList.add('selection-item');
    deleteSelection.classList.add('selection-item');
    // Set attributes
    editSelection.setAttribute('value', 'edit');
    deleteSelection.setAttribute('value', 'delete');
    // Append Children
    descriptionContainer.appendChild(titleLabel);
    descriptionContainer.appendChild(descriptionLabel);
    editButton.appendChild(editSelection);
    editButton.appendChild(deleteSelection);
    const childrenArr = [isCompleteBtn, descriptionContainer, dateLabel, priorityBtnContainer, editButton];
    todoContainer.append(...childrenArr);
    return todoContainer;
  }
  
  const createAddTaskBtn = () => {
    // Initilize DOM elements
    const addTask = document.createElement('div');
    // Set text content
    addTask.textContent = '+ Add Task'
    // Set classes
    addTask.classList.add('add-task-btn', 'hover-highlight');
    // Set attributes
    // Append children
    return addTask;
  }
  
  const createProject = (projName, todoList) => {
    let project = new Project(projName, todoList);
    let todoArr = project.todoList;
    // Initilize DOM elements
    const projectContainer = document.createElement('div');
    const addTaskLabel = document.createElement('p');
    const todoListContainer = document.createElement('div');
    // Set text content
    addTaskLabel.text = '+ Add Task';
    todoArr.forEach((todo, i) => todo.setAttribute('data-place',String(i)));
    // Set classes
    projectContainer.classList.add('project-container');
    addTaskLabel.classList.add('add-task-label');
    todoListContainer.classList.add('todo-list-container');
    // Append children
    projectContainer.appendChild(addTaskLabel);
    projectContainer.appendChild(todoListContainer);
    return projectContainer;
  }
  
  const createProjectSidebarElement = (projectTitle) => {
    // Initilize DOM elements
    const projectSidebarContainer = document.createElement('div');
    const projectNameLabel = document.createElement('h4');
    const editButton = document.createElement('select');
    const renameSelection = document.createElement('option');
    const deleteSelection = document.createElement('option');
    // Set text content
    projectNameLabel.textContent = projectTitle;
    renameSelection.textContent = 'Rename';
    deleteSelection.textContent = 'Delete';
    // Set classes
    projectSidebarContainer.classList.add('side-bar-item', 'project', 'hover-highlight');
    editButton.classList.add('edit-btn');
    renameSelection.classList.add('selection-item');
    deleteSelection.classList.add('selection-item');
    // Set attributes
    projectSidebarContainer.setAttribute('data-place', String(0));
    renameSelection.setAttribute('value', 'rename');
    deleteSelection.setAttribute('value', 'delete');
    // Append children
    editButton.appendChild(renameSelection);
    editButton.appendChild(deleteSelection);
    projectSidebarContainer.appendChild(projectNameLabel);
    projectSidebarContainer.appendChild(editButton);
    return projectSidebarContainer;
  }
  
  const createNewTodoForm = () => {
    // Initilize DOM elements
    const todoFormContainer = document.createElement('div');
    const formElementContainer1 = document.createElement('div');
    const formElementContainer2 = document.createElement('div');
    const formElementContainer3 = document.createElement('div');
    const formElementContainer4 = document.createElement('div');
    const todoForm = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleField = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionField = document.createElement('input');
    const dateLabel = document.createElement('label');
    const dateField = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    // Set text content
    titleLabel.textContent = 'Title: ';
    descriptionLabel.textContent = 'Details: ';
    dateLabel.textContent = 'Date: ';
    addBtn.textContent = 'Add';
    cancelBtn.textContent = 'Cancel';
    // Set classes and ids
    titleField.id = 'title-field';
    descriptionField.id = 'description-field';
    dateField.id = 'date-field';
    addBtn.id = 'todo-form-add-btn';
    cancelBtn.id = 'todo-form-cancel-btn';
    addBtn.classList.add('add-btn');
    cancelBtn.classList.add('cancel-btn');
    formElementContainer1.classList.add('form-element-container');
    formElementContainer2.classList.add('form-element-container');
    formElementContainer3.classList.add('form-element-container');
    formElementContainer4.classList.add('form-element-container', 'add-cancel-btn-container');
    todoForm.classList.add('todo-form');
    todoFormContainer.classList.add('todo-form-container');
    // Set attributes
    titleField.setAttribute('type', 'text');
    titleField.setAttribute('placeholder', 'Enter Title');
    titleField.setAttribute('name', 'user-title');
    descriptionField.setAttribute('type', 'text');
    descriptionField.setAttribute('placeholder', 'Enter Details');
    descriptionField.setAttribute('name', 'user-description');
    dateField.setAttribute('type', 'date');
    dateField.setAttribute('name', 'user-date');
    
    addBtn.setAttribute('type', 'submit');
    titleLabel.setAttribute('for', 'title-field');
    descriptionLabel.setAttribute('for', 'description-field');
    dateLabel.setAttribute('for', 'date-field');
    // Append children
    formElementContainer1.appendChild(titleLabel);
    formElementContainer1.appendChild(titleField);
    formElementContainer2.appendChild(descriptionLabel);
    formElementContainer2.appendChild(descriptionField);
    formElementContainer3.appendChild(dateLabel);
    formElementContainer3.appendChild(dateField);
    formElementContainer4.appendChild(addBtn);
    formElementContainer4.appendChild(cancelBtn);
    todoForm.appendChild(formElementContainer1);
    todoForm.appendChild(formElementContainer2);
    todoForm.appendChild(formElementContainer3);
    todoForm.appendChild(formElementContainer4);
    todoFormContainer.appendChild(todoForm);
    return todoFormContainer;
  }
  
  const createNewProjectForm = () => {
    // Initilize DOM elements
    const projectFormContainer = document.createElement('div');
    const formElementContainer1 = document.createElement('div');
    const formElementContainer2 = document.createElement('div');
    const projectForm = document.createElement('form');
    const projectTitleField = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    // Set text content
    addBtn.textContent = 'Add';
    cancelBtn.textContent = 'Cancel';
    // Set classes and ids
    addBtn.id = 'project-form-add-btn';
    cancelBtn.id = 'project-form-cancel-btn';
    projectTitleField.id = 'project-title-field';
    addBtn.classList.add('add-btn');
    cancelBtn.classList.add('cancel-btn');
    formElementContainer1.classList.add('form-element-container');
    formElementContainer2.classList.add('form-element-container', 'add-cancel-btn-container');
    projectFormContainer.classList.add('project-form-container');
    // Set attributes
    projectTitleField.setAttribute('type', 'text');
    projectTitleField.setAttribute('name', 'project-name');
    projectTitleField.setAttribute('placeholder', 'Enter Project Name');
    // Append children
    formElementContainer1.appendChild(projectTitleField);
    formElementContainer2.appendChild(addBtn);
    formElementContainer2.appendChild(cancelBtn);
    projectForm.appendChild(formElementContainer1);
    projectForm.appendChild(formElementContainer2);
    projectFormContainer.appendChild(projectForm);
    return projectFormContainer;
  }

  return {
    createTodo,
    createAddTaskBtn,
    createProject,
    createProjectSidebarElement,
    createNewTodoForm,
    createNewProjectForm,
  }
})()



export {CreateDomElms};