/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create_dom_elms.js":
/*!********************************!*\
  !*** ./src/create_dom_elms.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDomElms: () => (/* binding */ CreateDomElms)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");




const CreateDomElms = (() => {
  const createTodo = (title, description, dueDate, priority, isComplete) => {
    let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority, isComplete);
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
    let project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projName, todoList);
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





/***/ }),

/***/ "./src/event_listeners.js":
/*!********************************!*\
  !*** ./src/event_listeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayFunctions: () => (/* binding */ DisplayFunctions)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_dom_elms */ "./src/create_dom_elms.js");





const DisplayFunctions = (() => {

  const mainContentTitle = document.querySelector('#main-content-title');
  const taskContainer = document.querySelector('.task-container');
  const projectsContainer = document.querySelector('.projects-section');

  const clearElement = (element) => {
    element.innerHTML = '';
  }




  const switchSideBarItem = newSideBarItem => {
    console.log('here');
    let name = newSideBarItem.name;
    mainContentTitle.textContent = name;
    clearElement(taskContainer);
  }

  const displayAddTaskBtn = () => {
    let addTaskBtn = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createAddTaskBtn();
    taskContainer.appendChild(addTaskBtn);
  }
  
  const addTaskOpen = () => {
    const todoForm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createNewTodoForm();
    taskContainer.appendChild(todoForm);
  }

  const addTodo = () => {
    const todo = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createTodo('Test Title', 'Test Description', 'Test Date', true, true);
    taskContainer.appendChild(todo);
  }
  
  const deleteTodo = todo => {
    taskContainer.removeChild(todo);
  }
  
  const editTodo = todo => {
  }

  const addProjectForm = () => {
    const projectForm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createNewProjectForm();
    projectsContainer.appendChild(projectForm);
  }
  
  const addProjectToSidebar = projectSidebarContainer => {
    projectsContainer.appendChild(projectSidebarContainer);
  }
  
  const deleteProjectFromSidebar = projectSidebarContainer => {
    projectsContainer.removeChild(projectSidebarContainer);
  }
  
  const editProject = projectSidebarContainer => {
    const projectsContainer = document.querySelector('.projects-section');
  
  }

  return {
    clearElement,
    switchSideBarItem,
    displayAddTaskBtn,
    addTaskOpen,
    addTodo,
    deleteTodo,
    editTodo,
    addProjectForm,
    addProjectToSidebar,
    deleteProjectFromSidebar,
    editProject
  }

})();





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name, todoList) {
    this.name = name;
    this.todoList = todoList;
  }

  get todoList() {
    return this.todoList
  }

  set todoList(newTodoList) {
    this.todoList = newTodoList;
  }

  appendTodo(todo) {
    this.todoList.push(todo);
  }

  popTodo() {
    this.todoList.pop();
  }

  removeTodo(n) {
    this.todoList.splice(n, 1);
  }

  getTodo(n) {
    return this.todoList[n];
  }

  printProject() {
    console.log(this);
    console.log(this.todoList);
  }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, isComplete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get isComplete() {
    return this._isComplete;
  }

  set title(newTitle) {
    if (typeof newTitle === 'string') {
      this._title = newTitle;
    } else {
      console.log('newTitle is not string');
    }
  }

  set description(newDescription) {
    if (typeof newDescription === 'string') {
      this._description = newDescription;
    } else {
      console.log('newDescription is not string');
    }
  }

  set dueDate(newDueDate) {
    if (typeof newDueDate === 'string') {
      if (newDueDate !== "") {
        this._dueDate = newDueDate;
      } else {
        this._dueDate = "No Due Date";
      }
    } else {
      console.log('newDueDate is not string')
    }
  }

  set priority(newPriority) {
    if (typeof newPriority === 'boolean') {
      this._priority = newPriority;
    } else {
      console.log('newPriority is not bool');
    }
  }

  set isComplete(completeStatus) {
    if (typeof completeStatus === 'boolean') {
      this._isComplete = completeStatus;
    } else {
      console.log('completeStatus is not bool');
    }
  }

  printTodo() {
    console.log(this);
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _create_dom_elms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_dom_elms */ "./src/create_dom_elms.js");
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_listeners */ "./src/event_listeners.js");

// import {Project} from './project';



const DisplayController = (() => {
  let currTab = "All Tasks";
  let projects = [];

  const projectsSection = document.querySelector('.projects-section');
  const addProjectBtn = document.querySelector('#add-project-btn');
  const isChildPresent = (childClass, parent) => {
    return parent.querySelector(childClass) !== null;
  }

  const addProjectForm = () => {
    if (!(isChildPresent('.project-form-container', projectsSection))) {
      _event_listeners__WEBPACK_IMPORTED_MODULE_2__.DisplayFunctions.addProjectForm();
      const projectForm = document.querySelector('.project-form-container');
      const projectTitleField = document.querySelector('#project-title-field');
      const addProjectBtn = document.querySelector('#project-form-add-btn');
      const cancelProjectBtn = document.querySelector('#project-form-cancel-btn');  
      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('add-project');
        const newProject = _create_dom_elms__WEBPACK_IMPORTED_MODULE_1__.CreateDomElms.createProjectSidebarElement(projectTitleField.value);
        _event_listeners__WEBPACK_IMPORTED_MODULE_2__.DisplayFunctions.addProjectToSidebar(newProject);
        projectsSection.removeChild(projectForm);
      });
      cancelProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('cancel-project');
        projectsSection.removeChild(projectForm);
      })
    }
  }

  addProjectBtn.addEventListener('click', addProjectForm);

  const homeItems = Array.from(document.querySelectorAll('.home-item'));
  homeItems.forEach(item => item.addEventListener('click', _event_listeners__WEBPACK_IMPORTED_MODULE_2__.DisplayFunctions.switchSideBarItem));



  
})();

//const taskContainer = document.querySelector('.task-container');


// DisplayFunctions.addTask();

// DisplayFunctions.addProject();
// DisplayFunctions.addTaskOpen();
// DisplayFunctions.displayAddTaskBtn();
// DisplayFunctions.addTodo();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ007QUFDc0I7O0FBRXhEO0FBQ0E7QUFDQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTjJCO0FBQ007QUFDYztBQUNROztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDJEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwyREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQzVCLFdBQVcsU0FBUztBQUM0QjtBQUNHOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw4REFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQWE7QUFDeEMsUUFBUSw4REFBZ0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJEQUEyRCw4REFBZ0I7Ozs7QUFJM0U7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVfZG9tX2VsbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50X2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgYWRkLCBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBDcmVhdGVEb21FbG1zID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSA9PiB7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHlCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpc0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGVkaXRTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBkZWxldGVTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnLi4uJ1xuICAgIGVkaXRTZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZGVsZXRlU2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgLy8gU2V0IGNsYXNzZXNcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWxhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1sYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkYXRlLWxhYmVsJyk7XG4gICAgcHJpb3JpdHlCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuLWNvbnRhaW5lcicpO1xuICAgIGlzQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtY29tcGxldGUtbGFiZWwnLCAndW5jaGVja2VkJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGVkaXRTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICBkZWxldGVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGVkaXRTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdlZGl0Jyk7XG4gICAgZGVsZXRlU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVsZXRlJyk7XG4gICAgLy8gQXBwZW5kIENoaWxkcmVuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0U2VsZWN0aW9uKTtcbiAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZVNlbGVjdGlvbik7XG4gICAgY29uc3QgY2hpbGRyZW5BcnIgPSBbaXNDb21wbGV0ZUJ0biwgZGVzY3JpcHRpb25Db250YWluZXIsIGRhdGVMYWJlbCwgcHJpb3JpdHlCdG5Db250YWluZXIsIGVkaXRCdXR0b25dO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKC4uLmNoaWxkcmVuQXJyKTtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlQWRkVGFza0J0biA9ICgpID0+IHtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snXG4gICAgLy8gU2V0IGNsYXNzZXNcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicsICdob3Zlci1oaWdobGlnaHQnKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIHJldHVybiBhZGRUYXNrO1xuICB9XG4gIFxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2pOYW1lLCB0b2RvTGlzdCkgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvak5hbWUsIHRvZG9MaXN0KTtcbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0xpc3Q7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgYWRkVGFza0xhYmVsLnRleHQgPSAnKyBBZGQgVGFzayc7XG4gICAgdG9kb0Fyci5mb3JFYWNoKCh0b2RvLCBpKSA9PiB0b2RvLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZScsU3RyaW5nKGkpKSk7XG4gICAgLy8gU2V0IGNsYXNzZXNcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgYWRkVGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWxhYmVsJyk7XG4gICAgdG9kb0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0LWNvbnRhaW5lcicpO1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0xhYmVsKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlUHJvamVjdFNpZGViYXJFbGVtZW50ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIC8vIEluaXRpbGl6ZSBET00gZWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0U2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCByZW5hbWVTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBkZWxldGVTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICByZW5hbWVTZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICBkZWxldGVTZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAvLyBTZXQgY2xhc3Nlc1xuICAgIHByb2plY3RTaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLWl0ZW0nLCAncHJvamVjdCcsICdob3Zlci1oaWdobGlnaHQnKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgcmVuYW1lU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1pdGVtJyk7XG4gICAgZGVsZXRlU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1pdGVtJyk7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBwcm9qZWN0U2lkZWJhckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2UnLCBTdHJpbmcoMCkpO1xuICAgIHJlbmFtZVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3JlbmFtZScpO1xuICAgIGRlbGV0ZVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlbGV0ZScpO1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQocmVuYW1lU2VsZWN0aW9uKTtcbiAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZVNlbGVjdGlvbik7XG4gICAgcHJvamVjdFNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gICAgcHJvamVjdFNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgcmV0dXJuIHByb2plY3RTaWRlYmFyQ29udGFpbmVyO1xuICB9XG4gIFxuICBjb25zdCBjcmVhdGVOZXdUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgdG9kb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gU2V0IHRleHQgY29udGVudFxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzOiAnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOiAnO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIC8vIFNldCBjbGFzc2VzIGFuZCBpZHNcbiAgICB0aXRsZUZpZWxkLmlkID0gJ3RpdGxlLWZpZWxkJztcbiAgICBkZXNjcmlwdGlvbkZpZWxkLmlkID0gJ2Rlc2NyaXB0aW9uLWZpZWxkJztcbiAgICBkYXRlRmllbGQuaWQgPSAnZGF0ZS1maWVsZCc7XG4gICAgYWRkQnRuLmlkID0gJ3RvZG8tZm9ybS1hZGQtYnRuJztcbiAgICBjYW5jZWxCdG4uaWQgPSAndG9kby1mb3JtLWNhbmNlbC1idG4nO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idG4nKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIzLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicsICdhZGQtY2FuY2VsLWJ0bi1jb250YWluZXInKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKTtcbiAgICB0b2RvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0tY29udGFpbmVyJyk7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFRpdGxlJyk7XG4gICAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndXNlci10aXRsZScpO1xuICAgIGRlc2NyaXB0aW9uRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgRGV0YWlscycpO1xuICAgIGRlc2NyaXB0aW9uRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXItZGVzY3JpcHRpb24nKTtcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXItZGF0ZScpO1xuICAgIFxuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1maWVsZCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24tZmllbGQnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZS1maWVsZCcpO1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjQuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudENvbnRhaW5lcjEpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50Q29udGFpbmVyMik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRDb250YWluZXIzKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudENvbnRhaW5lcjQpO1xuICAgIHRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICByZXR1cm4gdG9kb0Zvcm1Db250YWluZXI7XG4gIH1cbiAgXG4gIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIC8vIEluaXRpbGl6ZSBET00gZWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50Q29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgLy8gU2V0IGNsYXNzZXMgYW5kIGlkc1xuICAgIGFkZEJ0bi5pZCA9ICdwcm9qZWN0LWZvcm0tYWRkLWJ0bic7XG4gICAgY2FuY2VsQnRuLmlkID0gJ3Byb2plY3QtZm9ybS1jYW5jZWwtYnRuJztcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC5pZCA9ICdwcm9qZWN0LXRpdGxlLWZpZWxkJztcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicsICdhZGQtY2FuY2VsLWJ0bi1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3RUaXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFByb2plY3QgTmFtZScpO1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVGaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRDb250YWluZXIxKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudENvbnRhaW5lcjIpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICByZXR1cm4gcHJvamVjdEZvcm1Db250YWluZXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRvZG8sXG4gICAgY3JlYXRlQWRkVGFza0J0bixcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNyZWF0ZVByb2plY3RTaWRlYmFyRWxlbWVudCxcbiAgICBjcmVhdGVOZXdUb2RvRm9ybSxcbiAgICBjcmVhdGVOZXdQcm9qZWN0Rm9ybSxcbiAgfVxufSkoKVxuXG5cblxuZXhwb3J0IHtDcmVhdGVEb21FbG1zfTsiLCJpbXBvcnQge1RvZG99IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge0NyZWF0ZURvbUVsbXN9IGZyb20gJy4vY3JlYXRlX2RvbV9lbG1zJztcbmltcG9ydCB7IGFkZCwgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgRGlzcGxheUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQtdGl0bGUnKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1zZWN0aW9uJyk7XG5cbiAgY29uc3QgY2xlYXJFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cblxuXG5cbiAgY29uc3Qgc3dpdGNoU2lkZUJhckl0ZW0gPSBuZXdTaWRlQmFySXRlbSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICBsZXQgbmFtZSA9IG5ld1NpZGVCYXJJdGVtLm5hbWU7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tDb250YWluZXIpO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheUFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgbGV0IGFkZFRhc2tCdG4gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZUFkZFRhc2tCdG4oKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICB9XG4gIFxuICBjb25zdCBhZGRUYXNrT3BlbiA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IENyZWF0ZURvbUVsbXMuY3JlYXRlTmV3VG9kb0Zvcm0oKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IENyZWF0ZURvbUVsbXMuY3JlYXRlVG9kbygnVGVzdCBUaXRsZScsICdUZXN0IERlc2NyaXB0aW9uJywgJ1Rlc3QgRGF0ZScsIHRydWUsIHRydWUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH1cbiAgXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSB0b2RvID0+IHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pO1xuICB9XG4gIFxuICBjb25zdCBlZGl0VG9kbyA9IHRvZG8gPT4ge1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICB9XG4gIFxuICBjb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyID0gcHJvamVjdFNpZGViYXJDb250YWluZXIgPT4ge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTaWRlYmFyQ29udGFpbmVyKTtcbiAgfVxuICBcbiAgY29uc3QgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyID0gcHJvamVjdFNpZGViYXJDb250YWluZXIgPT4ge1xuICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RTaWRlYmFyQ29udGFpbmVyKTtcbiAgfVxuICBcbiAgY29uc3QgZWRpdFByb2plY3QgPSBwcm9qZWN0U2lkZWJhckNvbnRhaW5lciA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbicpO1xuICBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xlYXJFbGVtZW50LFxuICAgIHN3aXRjaFNpZGVCYXJJdGVtLFxuICAgIGRpc3BsYXlBZGRUYXNrQnRuLFxuICAgIGFkZFRhc2tPcGVuLFxuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBlZGl0VG9kbyxcbiAgICBhZGRQcm9qZWN0Rm9ybSxcbiAgICBhZGRQcm9qZWN0VG9TaWRlYmFyLFxuICAgIGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcixcbiAgICBlZGl0UHJvamVjdFxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7RGlzcGxheUZ1bmN0aW9uc307XG5cbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvTGlzdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0O1xuICB9XG5cbiAgZ2V0IHRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0XG4gIH1cblxuICBzZXQgdG9kb0xpc3QobmV3VG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gbmV3VG9kb0xpc3Q7XG4gIH1cblxuICBhcHBlbmRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XG4gIH1cblxuICBwb3BUb2RvKCkge1xuICAgIHRoaXMudG9kb0xpc3QucG9wKCk7XG4gIH1cblxuICByZW1vdmVUb2RvKG4pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShuLCAxKTtcbiAgfVxuXG4gIGdldFRvZG8obikge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0W25dO1xuICB9XG5cbiAgcHJpbnRQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb0xpc3QpO1xuICB9XG59XG5cbmV4cG9ydCB7UHJvamVjdH07IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NvbXBsZXRlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdUaXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdUaXRsZSBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdEZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdEZXNjcmlwdGlvbiBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIGlmICh0eXBlb2YgbmV3RHVlRGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25ld0R1ZURhdGUgaXMgbm90IHN0cmluZycpXG4gICAgfVxuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgaWYgKHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3UHJpb3JpdHkgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaXNDb21wbGV0ZShjb21wbGV0ZVN0YXR1cykge1xuICAgIGlmICh0eXBlb2YgY29tcGxldGVTdGF0dXMgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IGNvbXBsZXRlU3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tcGxldGVTdGF0dXMgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBwcmludFRvZG8oKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IHtUb2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvJztcbi8vIGltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7Q3JlYXRlRG9tRWxtc30gZnJvbSAnLi9jcmVhdGVfZG9tX2VsbXMnO1xuaW1wb3J0IHtEaXNwbGF5RnVuY3Rpb25zfSBmcm9tICcuL2V2ZW50X2xpc3RlbmVycyc7XG5cbmNvbnN0IERpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJUYWIgPSBcIkFsbCBUYXNrc1wiO1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpO1xuICBjb25zdCBpc0NoaWxkUHJlc2VudCA9IChjaGlsZENsYXNzLCBwYXJlbnQpID0+IHtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoY2hpbGRDbGFzcykgIT09IG51bGw7XG4gIH1cblxuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoIShpc0NoaWxkUHJlc2VudCgnLnByb2plY3QtZm9ybS1jb250YWluZXInLCBwcm9qZWN0c1NlY3Rpb24pKSkge1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJvamVjdFRpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1maWVsZCcpO1xuICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tYWRkLWJ0bicpO1xuICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY2FuY2VsLWJ0bicpOyAgXG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IENyZWF0ZURvbUVsbXMuY3JlYXRlUHJvamVjdFNpZGViYXJFbGVtZW50KHByb2plY3RUaXRsZUZpZWxkLnZhbHVlKTtcbiAgICAgICAgRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0c1NlY3Rpb24ucmVtb3ZlQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgICAgfSk7XG4gICAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsLXByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHNTZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RGb3JtKTtcblxuICBjb25zdCBob21lSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lLWl0ZW0nKSk7XG4gIGhvbWVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlGdW5jdGlvbnMuc3dpdGNoU2lkZUJhckl0ZW0pKTtcblxuXG5cbiAgXG59KSgpO1xuXG4vL2NvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcblxuXG4vLyBEaXNwbGF5RnVuY3Rpb25zLmFkZFRhc2soKTtcblxuLy8gRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0KCk7XG4vLyBEaXNwbGF5RnVuY3Rpb25zLmFkZFRhc2tPcGVuKCk7XG4vLyBEaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlBZGRUYXNrQnRuKCk7XG4vLyBEaXNwbGF5RnVuY3Rpb25zLmFkZFRvZG8oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=