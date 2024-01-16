import {Todo} from './todo';
import {Project} from './project';
import { isToday, parse, differenceInDays } from "date-fns";

const CreateDomElms = (() => {
  const createTodo = todo => {
    // Initilize DOM elements
    const todoContainer = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const titleLabel = document.createElement('h4');
    const descriptionLabel = document.createElement('p');
    const dateLabel = document.createElement('p');
    const priorityBtnContainer = document.createElement('div');
    const isCompleteBtn = document.createElement('div');
    const editButton = document.createElement('div');
    // const editSelection = document.createElement('button');
    // const deleteSelection = document.createElement('button');
    // Set text content
    titleLabel.textContent = todo.title;
    descriptionLabel.textContent = todo.description;
    if (todo.dueDate === "") {
      dateLabel.textContent = 'No Due Date';
    } else {
      dateLabel.textContent = todo.dueDate;
    }
    // editSelection.textContent = 'Edit';
    // deleteSelection.textContent = 'Delete';
    // Set classes
    todoContainer.classList.add('todo-container');
    descriptionContainer.classList.add('todo-description-container');
    titleLabel.classList.add('title-label');
    descriptionLabel.classList.add('description-label');
    dateLabel.classList.add('date-label');
    priorityBtnContainer.classList.add('priority-btn-container', 'incomplete');
    isCompleteBtn.classList.add('is-complete-label', 'unchecked');
    editButton.classList.add('edit-btn');
    // editSelection.classList.add('selection-item');
    // deleteSelection.classList.add('selection-item');
    // Set attributes
    // editSelection.setAttribute('value', 'edit');
    // deleteSelection.setAttribute('value', 'delete');
    todoContainer.setAttribute('data-todo', 'true');
    todoContainer.setAttribute('data-complete', String(todo.isComplete));
    todoContainer.setAttribute('data-priority', String(todo.priority));
    const inputtedDueDate = parse(todo.dueDate, 'yyyy-MM-dd', new Date());
    todoContainer.setAttribute('data-today', String(isToday(inputtedDueDate)));
    todoContainer.setAttribute('data-this-week', String((differenceInDays(inputtedDueDate, new Date())) <= 7 && (differenceInDays(inputtedDueDate, new Date())) >= 0));
    // Event Listeners
    // editButton.addEventListener('click', () => {
    //   let selectionContainer = document.createElement('div');
    //   selectionContainer.classList.add('selection-container');
    //   selectionContainer.appendChild(editButton);
    //   selectionContainer.appendChild(deleteSelection);
    // })
    // Append Children
    descriptionContainer.append(titleLabel, descriptionLabel);
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
  
  const createProject = project => {
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
    projectContainer.append(addTaskLabel, todoListContainer);
    return projectContainer;
  }
  
  const createProjectSidebarElement = (projectTitle) => {
    // Initilize DOM elements
    const projectSidebarContainer = document.createElement('div');
    const projectNameLabel = document.createElement('h4');
    const editButton = document.createElement('div');
    // Set text content
    projectNameLabel.textContent = projectTitle;
    // Set classes
    projectNameLabel.classList.add('project-name-label');
    projectSidebarContainer.classList.add('side-bar-item', 'project-item', 'hover-highlight');
    editButton.classList.add('edit-btn');
    // Set attributes
    projectSidebarContainer.setAttribute('data-place', String(0));
    // Append children
    projectSidebarContainer.append(projectNameLabel, editButton);
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
    formElementContainer1.append(titleLabel, titleField);
    formElementContainer2.append(descriptionLabel, descriptionField);
    formElementContainer3.append(dateLabel, dateField);
    formElementContainer4.append(addBtn, cancelBtn);
    todoForm.append(formElementContainer1, formElementContainer2, formElementContainer3, formElementContainer4);
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
    formElementContainer2.append(addBtn, cancelBtn);
    projectForm.append(formElementContainer1, formElementContainer2);
    projectFormContainer.appendChild(projectForm);
    return projectFormContainer;
  }


  const createEditOptions = optionsType => {
    const editOptionsContainer = document.createElement('div');
    const editSelection = document.createElement('button');
    const deleteSelection = document.createElement('button');
    const cancelSelection = document.createElement('button');
    if (optionsType === 'todo') {
      editSelection.textContent = 'Edit';
    } if (optionsType === 'proj') {
      editSelection.textContent = 'Rename';
    }
    deleteSelection.textContent = 'Delete';
    cancelSelection.textContent = 'Cancel';
    editOptionsContainer.classList.add('edit-options-container');
    editSelection.classList.add('selection-item');
    deleteSelection.classList.add('selection-item');
    cancelSelection.classList.add('selection-item');
    if (optionsType === 'todo') {
      editSelection.classList.add('edit-todo');
      deleteSelection.classList.add('delete-todo');
      cancelSelection.classList.add('cancel-todo');
    } if (optionsType === 'proj') {
      editSelection.classList.add('edit-proj');
      deleteSelection.classList.add('delete-proj');
      cancelSelection.classList.add('cancel-edit-proj');
    }
    return {editOptionsContainer, editSelection, deleteSelection, cancelSelection};
  }

  const createEditTodoForm = todo => {
    const todoForm = createNewTodoForm();
    const titleField = todoForm.querySelector('#title-field');
    const descriptionField = todoForm.querySelector('#description-field');
    const dateField = todoForm.querySelector('#date-field');
    titleField.textContent = todo.title;
    descriptionField.textContent = todo.description;
    dateField.textContent = todo.dueDate;
    return todoForm;
  }

  const createEditProjectForm = project => {
    const projectForm = createNewProjectForm();
    const projectTitleField = projectForm.querySelector('input');
    const addBtn = projectForm.querySelector('#project-form-add-btn');
    const cancelBtn = projectForm.querySelector('#project-form-cancel-btn');
    addBtn.id = 'edit-project-form-rename-btn';
    cancelBtn.id = 'edit-project-form-cancel-btn';
    projectTitleField.id = 'edit-project-title-field';
    projectTitleField.setAttribute('value', project.name);
    return projectForm;
  }

  return {
    createTodo,
    createAddTaskBtn,
    createProject,
    createProjectSidebarElement,
    createNewTodoForm,
    createNewProjectForm,
    createEditOptions,
    createEditTodoForm,
    createEditProjectForm,
  }
})()



export {CreateDomElms};