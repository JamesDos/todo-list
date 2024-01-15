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
  const createTodo = todo => {
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
    priorityBtnContainer.classList.add('priority-btn-container', 'incomplete');
    isCompleteBtn.classList.add('is-complete-label', 'unchecked');
    editButton.classList.add('edit-btn');
    editSelection.classList.add('selection-item');
    deleteSelection.classList.add('selection-item');
    // Set attributes
    editSelection.setAttribute('value', 'edit');
    deleteSelection.setAttribute('value', 'delete');
    todoContainer.setAttribute('data-complete', String(todo.isComplete));
    todoContainer.setAttribute('data-priority', String(todo.priority));
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
    projectSidebarContainer.classList.add('side-bar-item', 'project-item', 'hover-highlight');
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

  // Helper Functions
  const clearElement = element => {
    element.innerHTML = '';
  }

  const removeChildElmement = (child, parent) => {
    parent.removeChild(child);
  }

  // Main content functions
  const updateMainContentTitle = newTitle => {
    mainContentTitle.textContent = newTitle;
  }

  const switchSideBarItem = newSideBarItem => { 
    let name = newSideBarItem.textContent;
    updateMainContentTitle(name);
    clearElement(taskContainer);
  }

  //Task container functions
  const displayTodoList = todoList => {
    todoList.forEach(todo => {
      displayTodo(todo);
    })
  }


  const displayAddTaskBtn = () => {
    let addTaskBtn = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createAddTaskBtn();
    taskContainer.appendChild(addTaskBtn);
  }

  const displayAddTodoForm = () => {
    const todoForm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createNewTodoForm();
    taskContainer.appendChild(todoForm);
  }

  const displayTodo = todo => {
    // const todo = CreateDomElms.createTodo('Test Title', 'Test Description', 'Test Date', true, true);
    taskContainer.appendChild(todo);
  }

    
  const deleteTodo = todo => {
    taskContainer.removeChild(todo);
  }

    
  const editTodo = todo => {
  }

  //Sidebar display functions
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
    displayAddTodoForm,
    displayTodoList,
    displayTodo,
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
/* harmony import */ var _create_dom_elms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_dom_elms */ "./src/create_dom_elms.js");


class Project {
  constructor(name, todoList, todoElmList) {
    this.name = name;
    this.todoList = todoList;
    this.todoElmList = todoElmList;
  }

  get name () {
    return this._name;
  }

  get todoList() {
    return this._todoList;
  }

  get todoElmList() {
    return this._todoElmList;
  }

  set name(newName) {
    this._name = newName;
  }

  set todoList(newTodoList) {
    this._todoList = newTodoList;
  }

  set todoElmList(newTodoElmList) {
    this._todoElmList = newTodoElmList;
  }

  appendTodo(todo) {
    this.todoList.push(todo);
  }

  appendTodoElm(todoElm) {
    this.todoElmList.push(todoElm);
  }

  popTodo() {
    this.todoList.pop();
  }

  popTodoElm() {
    this.todoElmList.pop();
  }

  removeTodo(n) {
    this.todoList.splice(n, 1);
  }

  removeTodoElm(n) {
    this.todoElmList.splice(n, 1);
  }

  getTodo(n) {
    return this.todoList[n];
  }

  getTodoElm(n) {
    return this.todoElmList[n];
  }

  printProject() {
    console.log(this);
    console.log(this.todoList);
  }

  // getTodoListElms() {
  //   return this.todoList.map((todo, place) => {
  //     let todoElm = CreateDomElms.createTodo(todo);
  //     todoElm.setAttribute('data-place', place);
  //     return todoElm;
  //   });
  // }
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_dom_elms */ "./src/create_dom_elms.js");
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_listeners */ "./src/event_listeners.js");





const DisplayController = (() => {
  // Variables and DOM Elements
  const homeItem = document.querySelector('#home-label ~ div');
  const projectsSection = document.querySelector('.projects-section');
  const taskContainer = document.querySelector('.task-container');
  const addProjectBtn = document.querySelector('#add-project-btn');
  const homeItems = Array.from(document.querySelectorAll('.home-item'));
  // const projectItems = Array.from(document.querySelectorAll('.project-item'));
  const mainContent = document.querySelector('.main-content');

  let prevTab;
  let currTab = homeItem;
  let currProject;
  let allProjects = [];


  mainContent.addEventListener('click', (e) => {
    console.log('main-content-clicked');
    console.log(e.target)
  });

  // Functions

  const addTodoToProject = (todo, project) => {
    project.appendTodo(todo);
  }

  const addTodoElmToProject = (todoElm, project) => {
    project.appendTodoElm(todoElm);
  }


  const getTodoFromTodoElm = (todoElm) => {
    return currProject.todoList[todoElm.dataset.place];
  }

  const updateCurrTab = newTab => {
    if (newTab !== currTab) {
      // console.trace('in updateCurrTab');
      prevTab = currTab;
      currTab = newTab;
      prevTab.classList.remove('selected');
      currTab.classList.add('selected');
    }
  }

  const updateCurrProject = newProj => {
    currProject = newProj;
  }

  const isChildPresent = (childClass, parent) => {
    return parent.querySelector(childClass) !== null;
  }

  const isCompleteBtnEl = isCompleteBtn => {
    console.log('isCompleteBtn is clicked');
    let todoElm = isCompleteBtn.parentNode;
    let todo = getTodoFromTodoElm(todoElm);
    todo.isComplete = !todo.isComplete;
    if(todoElm.dataset.complete === 'true') {
      todoElm.setAttribute('data-complete', 'false');
      const checkBtn = todoElm.querySelector('.is-complete-label');
      checkBtn.classList.remove('checked');
      checkBtn.classList.add('unchecked');
    } else {
      todoElm.setAttribute('data-complete', 'true');
      const checkBtn = todoElm.querySelector('.is-complete-label');
      checkBtn.classList.remove('unchecked');
      checkBtn.classList.add('checked');
    }
  }

  const priorityBtnEL = prorityBtn => {
    console.log('priorityBtn clicked');
    let todoElm = prorityBtn.parentNode;
    let todo = getTodoFromTodoElm(todoElm);
    todo.priority = !todo.priority;
    if(todoElm.dataset.priority === 'true') {
      todoElm.setAttribute('data-priority', 'false');
      const priorityBtn = todoElm.querySelector('.priority-btn-container');
      priorityBtn.classList.remove('complete');
      priorityBtn.classList.add('incomplete');
    } else {
      todoElm.setAttribute('data-priority', 'true');
      const priorityBtn = todoElm.querySelector('.priority-btn-container');
      priorityBtn.classList.remove('incomplete');
      priorityBtn.classList.add('complete');
    }
  }

  const addTodoBtnEL = () => {
    const titleFieldVal = document.querySelector('#title-field').value;
    const descriptionFieldVal = document.querySelector('#description-field').value;
    const dateVal = document.querySelector('#date-field').value;
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(titleFieldVal, descriptionFieldVal, dateVal, false, false);
    const newTodoElm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createTodo(newTodo);
    console.log(currProject);
    newTodoElm.setAttribute('data-place', String(currProject.todoList.length));
    const isCompleteBtn = newTodoElm.querySelector('.is-complete-label');
    const prorityBtn = newTodoElm.querySelector('.priority-btn-container');
    isCompleteBtn.addEventListener('click', (event, btn) => {
      event.preventDefault();
      isCompleteBtnEl(isCompleteBtn);
    });
    prorityBtn.addEventListener('click', (event, btn) => {
      event.preventDefault();
      priorityBtnEL(prorityBtn);
    });
    addTodoToProject(newTodo, currProject);
    _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodo(newTodoElm);
  }

  const addTaskBtnEL = () => {
    if(!(isChildPresent('.todo-form-container', taskContainer))) {
      _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayAddTodoForm();
      const todoForm = document.querySelector('.todo-form-container');
      const addTodoBtn = document.querySelector('#todo-form-add-btn');
      const cancelTodoBtn = document.querySelector('#todo-form-cancel-btn');
      addTodoBtn.addEventListener('click', event => {
        event.preventDefault();
        addTodoBtnEL();
        taskContainer.removeChild(todoForm);
      });
      cancelTodoBtn.addEventListener('click', event => {
        event.preventDefault();
        taskContainer.removeChild(todoForm);
      });
    }
  }

  const addAddTaskBtn = () => {
    if(!(isChildPresent('.add-task-btn', taskContainer))) {
      _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayAddTaskBtn();
      const addTaskBtn = document.querySelector('.add-task-btn');
      addTaskBtn.addEventListener('click', event => {
        event.preventDefault();
        addTaskBtnEL();
      })
    }
  }

  const addProjectBtnEL = () => {
    if(document.querySelector('.project-form-container') !== null) {
      const projectTitleField = document.querySelector('#project-title-field');
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitleField.value, []);
      const newProjectElm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createProjectSidebarElement(projectTitleField.value);
      newProjectElm.setAttribute('data-place', allProjects.length);
      allProjects.push(newProject);
      updateCurrProject(newProject);
      _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.addProjectToSidebar(newProjectElm);
      newProjectElm.addEventListener('click', () => switchProjectTab(newProjectElm));
      console.table(allProjects); 
    }
  }

  const addProjectForm = () => {
    if (!(isChildPresent('.project-form-container', projectsSection))) {
      _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.addProjectForm();
      const projectForm = document.querySelector('.project-form-container');
      const addProjectBtn = document.querySelector('#project-form-add-btn');
      const cancelProjectBtn = document.querySelector('#project-form-cancel-btn');
      addProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        addProjectBtnEL();
        projectsSection.removeChild(projectForm);
      });
      cancelProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        // console.log('cancel-project');
        projectsSection.removeChild(projectForm);
      })
    }
  }

  const switchHomeTab = item => {
    updateCurrTab(item);
    _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.switchSideBarItem(item);
    if (item.textContent === 'All Tasks') {
      allProjects.forEach(project =>  _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodoList(project.getTodoListElms()));
    }
  }

  const switchProjectTab = item => {
    updateCurrTab(item);
    updateCurrProject(allProjects[item.dataset.place]);
    _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.switchSideBarItem(item);
    addAddTaskBtn();
    _event_listeners__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodoList(currProject.getTodoListElms());
  }


  // Add event listeners

  addProjectBtn.addEventListener('click', addProjectForm);

  homeItems.forEach(item => item.addEventListener('click', () => switchHomeTab(item)));


  
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ007QUFDc0I7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNOMkI7QUFDTTtBQUNjO0FBQ1E7O0FBRXhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSxxQkFBcUIsMkRBQWE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkd3Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzVFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ007QUFDYztBQUNHOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUIsdUJBQXVCLDJEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksOERBQWdCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw4REFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQU87QUFDcEMsNEJBQTRCLDJEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhEQUFnQjtBQUNwQjtBQUNBLHNDQUFzQyw4REFBZ0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFnQjtBQUNwQjtBQUNBLElBQUksOERBQWdCO0FBQ3BCOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZV9kb21fZWxtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RvZG99IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBhZGQsIGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IENyZWF0ZURvbUVsbXMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUb2RvID0gdG9kbyA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXNDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBlZGl0U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgZGVsZXRlU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgLy8gU2V0IHRleHQgY29udGVudFxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJy4uLidcbiAgICBlZGl0U2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGRlbGV0ZVNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIC8vIFNldCBjbGFzc2VzXG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1sYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGF0ZS1sYWJlbCcpO1xuICAgIHByaW9yaXR5QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ0bi1jb250YWluZXInLCAnaW5jb21wbGV0ZScpO1xuICAgIGlzQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtY29tcGxldGUtbGFiZWwnLCAndW5jaGVja2VkJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGVkaXRTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICBkZWxldGVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGVkaXRTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdlZGl0Jyk7XG4gICAgZGVsZXRlU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVsZXRlJyk7XG4gICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcGxldGUnLCBTdHJpbmcodG9kby5pc0NvbXBsZXRlKSk7XG4gICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCBTdHJpbmcodG9kby5wcmlvcml0eSkpO1xuICAgIC8vIEFwcGVuZCBDaGlsZHJlblxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdFNlbGVjdGlvbik7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVTZWxlY3Rpb24pO1xuICAgIGNvbnN0IGNoaWxkcmVuQXJyID0gW2lzQ29tcGxldGVCdG4sIGRlc2NyaXB0aW9uQ29udGFpbmVyLCBkYXRlTGFiZWwsIHByaW9yaXR5QnRuQ29udGFpbmVyLCBlZGl0QnV0dG9uXTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCguLi5jaGlsZHJlbkFycik7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH1cbiAgXG4gIGNvbnN0IGNyZWF0ZUFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJ1xuICAgIC8vIFNldCBjbGFzc2VzXG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nLCAnaG92ZXItaGlnaGxpZ2h0Jyk7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICByZXR1cm4gYWRkVGFzaztcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvTGlzdDtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBhZGRUYXNrTGFiZWwudGV4dCA9ICcrIEFkZCBUYXNrJztcbiAgICB0b2RvQXJyLmZvckVhY2goKHRvZG8sIGkpID0+IHRvZG8uc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlJyxTdHJpbmcoaSkpKTtcbiAgICAvLyBTZXQgY2xhc3Nlc1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICBhZGRUYXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stbGFiZWwnKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrTGFiZWwpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3RDb250YWluZXIpO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9XG4gIFxuICBjb25zdCBjcmVhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnQgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RTaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IHJlbmFtZVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIHJlbmFtZVNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuICAgIGRlbGV0ZVNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIC8vIFNldCBjbGFzc2VzXG4gICAgcHJvamVjdFNpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXItaXRlbScsICdwcm9qZWN0LWl0ZW0nLCAnaG92ZXItaGlnaGxpZ2h0Jyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIHJlbmFtZVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24taXRlbScpO1xuICAgIGRlbGV0ZVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24taXRlbScpO1xuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgcHJvamVjdFNpZGViYXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlJywgU3RyaW5nKDApKTtcbiAgICByZW5hbWVTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZW5hbWUnKTtcbiAgICBkZWxldGVTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdkZWxldGUnKTtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKHJlbmFtZVNlbGVjdGlvbik7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVTZWxlY3Rpb24pO1xuICAgIHByb2plY3RTaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIHByb2plY3RTaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0U2lkZWJhckNvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlTmV3VG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHRvZG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlsczogJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAvLyBTZXQgY2xhc3NlcyBhbmQgaWRzXG4gICAgdGl0bGVGaWVsZC5pZCA9ICd0aXRsZS1maWVsZCc7XG4gICAgZGVzY3JpcHRpb25GaWVsZC5pZCA9ICdkZXNjcmlwdGlvbi1maWVsZCc7XG4gICAgZGF0ZUZpZWxkLmlkID0gJ2RhdGUtZmllbGQnO1xuICAgIGFkZEJ0bi5pZCA9ICd0b2RvLWZvcm0tYWRkLWJ0bic7XG4gICAgY2FuY2VsQnRuLmlkID0gJ3RvZG8tZm9ybS1jYW5jZWwtYnRuJztcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInLCAnYWRkLWNhbmNlbC1idG4tY29udGFpbmVyJyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJyk7XG4gICAgdG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtLWNvbnRhaW5lcicpO1xuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBUaXRsZScpO1xuICAgIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXItdGl0bGUnKTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIERldGFpbHMnKTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyLWRlc2NyaXB0aW9uJyk7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyLWRhdGUnKTtcbiAgICBcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUtZmllbGQnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uLWZpZWxkJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtZmllbGQnKTtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIxLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIzLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIzLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXI0LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXI0LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRDb250YWluZXIxKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudENvbnRhaW5lcjIpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50Q29udGFpbmVyMyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRDb250YWluZXI0KTtcbiAgICB0b2RvRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgcmV0dXJuIHRvZG9Gb3JtQ29udGFpbmVyO1xuICB9XG4gIFxuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gU2V0IHRleHQgY29udGVudFxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIC8vIFNldCBjbGFzc2VzIGFuZCBpZHNcbiAgICBhZGRCdG4uaWQgPSAncHJvamVjdC1mb3JtLWFkZC1idG4nO1xuICAgIGNhbmNlbEJ0bi5pZCA9ICdwcm9qZWN0LWZvcm0tY2FuY2VsLWJ0bic7XG4gICAgcHJvamVjdFRpdGxlRmllbGQuaWQgPSAncHJvamVjdC10aXRsZS1maWVsZCc7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInLCAnYWRkLWNhbmNlbC1idG4tY29udGFpbmVyJyk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgcHJvamVjdFRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1uYW1lJyk7XG4gICAgcHJvamVjdFRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBQcm9qZWN0IE5hbWUnKTtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRmllbGQpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50Q29udGFpbmVyMSk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRDb250YWluZXIyKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgcmV0dXJuIHByb2plY3RGb3JtQ29udGFpbmVyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUb2RvLFxuICAgIGNyZWF0ZUFkZFRhc2tCdG4sXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjcmVhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnQsXG4gICAgY3JlYXRlTmV3VG9kb0Zvcm0sXG4gICAgY3JlYXRlTmV3UHJvamVjdEZvcm0sXG4gIH1cbn0pKClcblxuXG5cbmV4cG9ydCB7Q3JlYXRlRG9tRWxtc307IiwiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtDcmVhdGVEb21FbG1zfSBmcm9tICcuL2NyZWF0ZV9kb21fZWxtcyc7XG5pbXBvcnQgeyBhZGQsIGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IERpc3BsYXlGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IG1haW5Db250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50LXRpdGxlJyk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbicpO1xuXG4gIC8vIEhlbHBlciBGdW5jdGlvbnNcbiAgY29uc3QgY2xlYXJFbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUNoaWxkRWxtZW1lbnQgPSAoY2hpbGQsIHBhcmVudCkgPT4ge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cblxuICAvLyBNYWluIGNvbnRlbnQgZnVuY3Rpb25zXG4gIGNvbnN0IHVwZGF0ZU1haW5Db250ZW50VGl0bGUgPSBuZXdUaXRsZSA9PiB7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuICB9XG5cbiAgY29uc3Qgc3dpdGNoU2lkZUJhckl0ZW0gPSBuZXdTaWRlQmFySXRlbSA9PiB7IFxuICAgIGxldCBuYW1lID0gbmV3U2lkZUJhckl0ZW0udGV4dENvbnRlbnQ7XG4gICAgdXBkYXRlTWFpbkNvbnRlbnRUaXRsZShuYW1lKTtcbiAgICBjbGVhckVsZW1lbnQodGFza0NvbnRhaW5lcik7XG4gIH1cblxuICAvL1Rhc2sgY29udGFpbmVyIGZ1bmN0aW9uc1xuICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSB0b2RvTGlzdCA9PiB7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGRpc3BsYXlUb2RvKHRvZG8pO1xuICAgIH0pXG4gIH1cblxuXG4gIGNvbnN0IGRpc3BsYXlBZGRUYXNrQnRuID0gKCkgPT4ge1xuICAgIGxldCBhZGRUYXNrQnRuID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVBZGRUYXNrQnRuKCk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlBZGRUb2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IENyZWF0ZURvbUVsbXMuY3JlYXRlTmV3VG9kb0Zvcm0oKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gdG9kbyA9PiB7XG4gICAgLy8gY29uc3QgdG9kbyA9IENyZWF0ZURvbUVsbXMuY3JlYXRlVG9kbygnVGVzdCBUaXRsZScsICdUZXN0IERlc2NyaXB0aW9uJywgJ1Rlc3QgRGF0ZScsIHRydWUsIHRydWUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH1cblxuICAgIFxuICBjb25zdCBkZWxldGVUb2RvID0gdG9kbyA9PiB7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKTtcbiAgfVxuXG4gICAgXG4gIGNvbnN0IGVkaXRUb2RvID0gdG9kbyA9PiB7XG4gIH1cblxuICAvL1NpZGViYXIgZGlzcGxheSBmdW5jdGlvbnNcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9IHByb2plY3RTaWRlYmFyQ29udGFpbmVyID0+IHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZWJhckNvbnRhaW5lcik7XG4gIH1cbiAgXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhciA9IHByb2plY3RTaWRlYmFyQ29udGFpbmVyID0+IHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0U2lkZWJhckNvbnRhaW5lcik7XG4gIH1cbiAgXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gcHJvamVjdFNpZGViYXJDb250YWluZXIgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXNlY3Rpb24nKTtcbiAgXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFyRWxlbWVudCxcbiAgICBzd2l0Y2hTaWRlQmFySXRlbSxcbiAgICBkaXNwbGF5QWRkVGFza0J0bixcbiAgICBkaXNwbGF5QWRkVG9kb0Zvcm0sXG4gICAgZGlzcGxheVRvZG9MaXN0LFxuICAgIGRpc3BsYXlUb2RvLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgZWRpdFRvZG8sXG4gICAgYWRkUHJvamVjdEZvcm0sXG4gICAgYWRkUHJvamVjdFRvU2lkZWJhcixcbiAgICBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIsXG4gICAgZWRpdFByb2plY3RcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge0Rpc3BsYXlGdW5jdGlvbnN9O1xuXG4iLCJpbXBvcnQgeyBDcmVhdGVEb21FbG1zIH0gZnJvbSBcIi4vY3JlYXRlX2RvbV9lbG1zXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvTGlzdCwgdG9kb0VsbUxpc3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgICB0aGlzLnRvZG9FbG1MaXN0ID0gdG9kb0VsbUxpc3Q7XG4gIH1cblxuICBnZXQgbmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9MaXN0O1xuICB9XG5cbiAgZ2V0IHRvZG9FbG1MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl90b2RvRWxtTGlzdDtcbiAgfVxuXG4gIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIHNldCB0b2RvTGlzdChuZXdUb2RvTGlzdCkge1xuICAgIHRoaXMuX3RvZG9MaXN0ID0gbmV3VG9kb0xpc3Q7XG4gIH1cblxuICBzZXQgdG9kb0VsbUxpc3QobmV3VG9kb0VsbUxpc3QpIHtcbiAgICB0aGlzLl90b2RvRWxtTGlzdCA9IG5ld1RvZG9FbG1MaXN0O1xuICB9XG5cbiAgYXBwZW5kVG9kbyh0b2RvKSB7XG4gICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9XG5cbiAgYXBwZW5kVG9kb0VsbSh0b2RvRWxtKSB7XG4gICAgdGhpcy50b2RvRWxtTGlzdC5wdXNoKHRvZG9FbG0pO1xuICB9XG5cbiAgcG9wVG9kbygpIHtcbiAgICB0aGlzLnRvZG9MaXN0LnBvcCgpO1xuICB9XG5cbiAgcG9wVG9kb0VsbSgpIHtcbiAgICB0aGlzLnRvZG9FbG1MaXN0LnBvcCgpO1xuICB9XG5cbiAgcmVtb3ZlVG9kbyhuKSB7XG4gICAgdGhpcy50b2RvTGlzdC5zcGxpY2UobiwgMSk7XG4gIH1cblxuICByZW1vdmVUb2RvRWxtKG4pIHtcbiAgICB0aGlzLnRvZG9FbG1MaXN0LnNwbGljZShuLCAxKTtcbiAgfVxuXG4gIGdldFRvZG8obikge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0W25dO1xuICB9XG5cbiAgZ2V0VG9kb0VsbShuKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0VsbUxpc3Rbbl07XG4gIH1cblxuICBwcmludFByb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5sb2codGhpcy50b2RvTGlzdCk7XG4gIH1cblxuICAvLyBnZXRUb2RvTGlzdEVsbXMoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9kb0xpc3QubWFwKCh0b2RvLCBwbGFjZSkgPT4ge1xuICAvLyAgICAgbGV0IHRvZG9FbG0gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZVRvZG8odG9kbyk7XG4gIC8vICAgICB0b2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZScsIHBsYWNlKTtcbiAgLy8gICAgIHJldHVybiB0b2RvRWxtO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG5cbmV4cG9ydCB7UHJvamVjdH07IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NvbXBsZXRlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdUaXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdUaXRsZSBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdEZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdEZXNjcmlwdGlvbiBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIGlmICh0eXBlb2YgbmV3RHVlRGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25ld0R1ZURhdGUgaXMgbm90IHN0cmluZycpXG4gICAgfVxuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgaWYgKHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3UHJpb3JpdHkgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaXNDb21wbGV0ZShjb21wbGV0ZVN0YXR1cykge1xuICAgIGlmICh0eXBlb2YgY29tcGxldGVTdGF0dXMgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IGNvbXBsZXRlU3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tcGxldGVTdGF0dXMgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBwcmludFRvZG8oKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IHtUb2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7Q3JlYXRlRG9tRWxtc30gZnJvbSAnLi9jcmVhdGVfZG9tX2VsbXMnO1xuaW1wb3J0IHtEaXNwbGF5RnVuY3Rpb25zfSBmcm9tICcuL2V2ZW50X2xpc3RlbmVycyc7XG5cbmNvbnN0IERpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy8gVmFyaWFibGVzIGFuZCBET00gRWxlbWVudHNcbiAgY29uc3QgaG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1sYWJlbCB+IGRpdicpO1xuICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbicpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG4gIGNvbnN0IGhvbWVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUtaXRlbScpKTtcbiAgLy8gY29uc3QgcHJvamVjdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJykpO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuICBsZXQgcHJldlRhYjtcbiAgbGV0IGN1cnJUYWIgPSBob21lSXRlbTtcbiAgbGV0IGN1cnJQcm9qZWN0O1xuICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuXG4gIG1haW5Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWFpbi1jb250ZW50LWNsaWNrZWQnKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgfSk7XG5cbiAgLy8gRnVuY3Rpb25zXG5cbiAgY29uc3QgYWRkVG9kb1RvUHJvamVjdCA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hcHBlbmRUb2RvKHRvZG8pO1xuICB9XG5cbiAgY29uc3QgYWRkVG9kb0VsbVRvUHJvamVjdCA9ICh0b2RvRWxtLCBwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hcHBlbmRUb2RvRWxtKHRvZG9FbG0pO1xuICB9XG5cblxuICBjb25zdCBnZXRUb2RvRnJvbVRvZG9FbG0gPSAodG9kb0VsbSkgPT4ge1xuICAgIHJldHVybiBjdXJyUHJvamVjdC50b2RvTGlzdFt0b2RvRWxtLmRhdGFzZXQucGxhY2VdO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlQ3VyclRhYiA9IG5ld1RhYiA9PiB7XG4gICAgaWYgKG5ld1RhYiAhPT0gY3VyclRhYikge1xuICAgICAgLy8gY29uc29sZS50cmFjZSgnaW4gdXBkYXRlQ3VyclRhYicpO1xuICAgICAgcHJldlRhYiA9IGN1cnJUYWI7XG4gICAgICBjdXJyVGFiID0gbmV3VGFiO1xuICAgICAgcHJldlRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgY3VyclRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUN1cnJQcm9qZWN0ID0gbmV3UHJvaiA9PiB7XG4gICAgY3VyclByb2plY3QgPSBuZXdQcm9qO1xuICB9XG5cbiAgY29uc3QgaXNDaGlsZFByZXNlbnQgPSAoY2hpbGRDbGFzcywgcGFyZW50KSA9PiB7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKGNoaWxkQ2xhc3MpICE9PSBudWxsO1xuICB9XG5cbiAgY29uc3QgaXNDb21wbGV0ZUJ0bkVsID0gaXNDb21wbGV0ZUJ0biA9PiB7XG4gICAgY29uc29sZS5sb2coJ2lzQ29tcGxldGVCdG4gaXMgY2xpY2tlZCcpO1xuICAgIGxldCB0b2RvRWxtID0gaXNDb21wbGV0ZUJ0bi5wYXJlbnROb2RlO1xuICAgIGxldCB0b2RvID0gZ2V0VG9kb0Zyb21Ub2RvRWxtKHRvZG9FbG0pO1xuICAgIHRvZG8uaXNDb21wbGV0ZSA9ICF0b2RvLmlzQ29tcGxldGU7XG4gICAgaWYodG9kb0VsbS5kYXRhc2V0LmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgIHRvZG9FbG0uc2V0QXR0cmlidXRlKCdkYXRhLWNvbXBsZXRlJywgJ2ZhbHNlJyk7XG4gICAgICBjb25zdCBjaGVja0J0biA9IHRvZG9FbG0ucXVlcnlTZWxlY3RvcignLmlzLWNvbXBsZXRlLWxhYmVsJyk7XG4gICAgICBjaGVja0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCd1bmNoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0VsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcGxldGUnLCAndHJ1ZScpO1xuICAgICAgY29uc3QgY2hlY2tCdG4gPSB0b2RvRWxtLnF1ZXJ5U2VsZWN0b3IoJy5pcy1jb21wbGV0ZS1sYWJlbCcpO1xuICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgndW5jaGVja2VkJyk7XG4gICAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJpb3JpdHlCdG5FTCA9IHByb3JpdHlCdG4gPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwcmlvcml0eUJ0biBjbGlja2VkJyk7XG4gICAgbGV0IHRvZG9FbG0gPSBwcm9yaXR5QnRuLnBhcmVudE5vZGU7XG4gICAgbGV0IHRvZG8gPSBnZXRUb2RvRnJvbVRvZG9FbG0odG9kb0VsbSk7XG4gICAgdG9kby5wcmlvcml0eSA9ICF0b2RvLnByaW9yaXR5O1xuICAgIGlmKHRvZG9FbG0uZGF0YXNldC5wcmlvcml0eSA9PT0gJ3RydWUnKSB7XG4gICAgICB0b2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScsICdmYWxzZScpO1xuICAgICAgY29uc3QgcHJpb3JpdHlCdG4gPSB0b2RvRWxtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idG4tY29udGFpbmVyJyk7XG4gICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnaW5jb21wbGV0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScsICd0cnVlJyk7XG4gICAgICBjb25zdCBwcmlvcml0eUJ0biA9IHRvZG9FbG0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ0bi1jb250YWluZXInKTtcbiAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luY29tcGxldGUnKTtcbiAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkVG9kb0J0bkVMID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRmllbGRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtZmllbGQnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLWZpZWxkJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWZpZWxkJykudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlRmllbGRWYWwsIGRlc2NyaXB0aW9uRmllbGRWYWwsIGRhdGVWYWwsIGZhbHNlLCBmYWxzZSk7XG4gICAgY29uc3QgbmV3VG9kb0VsbSA9IENyZWF0ZURvbUVsbXMuY3JlYXRlVG9kbyhuZXdUb2RvKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgbmV3VG9kb0VsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2UnLCBTdHJpbmcoY3VyclByb2plY3QudG9kb0xpc3QubGVuZ3RoKSk7XG4gICAgY29uc3QgaXNDb21wbGV0ZUJ0biA9IG5ld1RvZG9FbG0ucXVlcnlTZWxlY3RvcignLmlzLWNvbXBsZXRlLWxhYmVsJyk7XG4gICAgY29uc3QgcHJvcml0eUJ0biA9IG5ld1RvZG9FbG0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ0bi1jb250YWluZXInKTtcbiAgICBpc0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50LCBidG4pID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpc0NvbXBsZXRlQnRuRWwoaXNDb21wbGV0ZUJ0bik7XG4gICAgfSk7XG4gICAgcHJvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCwgYnRuKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJpb3JpdHlCdG5FTChwcm9yaXR5QnRuKTtcbiAgICB9KTtcbiAgICBhZGRUb2RvVG9Qcm9qZWN0KG5ld1RvZG8sIGN1cnJQcm9qZWN0KTtcbiAgICBEaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUb2RvKG5ld1RvZG9FbG0pO1xuICB9XG5cbiAgY29uc3QgYWRkVGFza0J0bkVMID0gKCkgPT4ge1xuICAgIGlmKCEoaXNDaGlsZFByZXNlbnQoJy50b2RvLWZvcm0tY29udGFpbmVyJywgdGFza0NvbnRhaW5lcikpKSB7XG4gICAgICBEaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlBZGRUb2RvRm9ybSgpO1xuICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tYWRkLWJ0bicpO1xuICAgICAgY29uc3QgY2FuY2VsVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tY2FuY2VsLWJ0bicpO1xuICAgICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkVG9kb0J0bkVMKCk7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgfSk7XG4gICAgICBjYW5jZWxUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Gb3JtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZEFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgaWYoIShpc0NoaWxkUHJlc2VudCgnLmFkZC10YXNrLWJ0bicsIHRhc2tDb250YWluZXIpKSkge1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5QWRkVGFza0J0bigpO1xuICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZFRhc2tCdG5FTCgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRQcm9qZWN0QnRuRUwgPSAoKSA9PiB7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1jb250YWluZXInKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvamVjdFRpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1maWVsZCcpO1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZUZpZWxkLnZhbHVlLCBbXSk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0RWxtID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnQocHJvamVjdFRpdGxlRmllbGQudmFsdWUpO1xuICAgICAgbmV3UHJvamVjdEVsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2UnLCBhbGxQcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHVwZGF0ZUN1cnJQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3RFbG0pO1xuICAgICAgbmV3UHJvamVjdEVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFByb2plY3RUYWIobmV3UHJvamVjdEVsbSkpO1xuICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7IFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGlmICghKGlzQ2hpbGRQcmVzZW50KCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicsIHByb2plY3RzU2VjdGlvbikpKSB7XG4gICAgICBEaXNwbGF5RnVuY3Rpb25zLmFkZFByb2plY3RGb3JtKCk7XG4gICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1hZGQtYnRuJyk7XG4gICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1jYW5jZWwtYnRuJyk7XG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuRUwoKTtcbiAgICAgICAgcHJvamVjdHNTZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbiAgICAgIH0pO1xuICAgICAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhbmNlbC1wcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN3aXRjaEhvbWVUYWIgPSBpdGVtID0+IHtcbiAgICB1cGRhdGVDdXJyVGFiKGl0ZW0pO1xuICAgIERpc3BsYXlGdW5jdGlvbnMuc3dpdGNoU2lkZUJhckl0ZW0oaXRlbSk7XG4gICAgaWYgKGl0ZW0udGV4dENvbnRlbnQgPT09ICdBbGwgVGFza3MnKSB7XG4gICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gIERpc3BsYXlGdW5jdGlvbnMuZGlzcGxheVRvZG9MaXN0KHByb2plY3QuZ2V0VG9kb0xpc3RFbG1zKCkpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0VGFiID0gaXRlbSA9PiB7XG4gICAgdXBkYXRlQ3VyclRhYihpdGVtKTtcbiAgICB1cGRhdGVDdXJyUHJvamVjdChhbGxQcm9qZWN0c1tpdGVtLmRhdGFzZXQucGxhY2VdKTtcbiAgICBEaXNwbGF5RnVuY3Rpb25zLnN3aXRjaFNpZGVCYXJJdGVtKGl0ZW0pO1xuICAgIGFkZEFkZFRhc2tCdG4oKTtcbiAgICBEaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUb2RvTGlzdChjdXJyUHJvamVjdC5nZXRUb2RvTGlzdEVsbXMoKSk7XG4gIH1cblxuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdEZvcm0pO1xuXG4gIGhvbWVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaEhvbWVUYWIoaXRlbSkpKTtcblxuXG4gIFxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==