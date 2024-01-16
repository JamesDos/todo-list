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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");




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
    const inputtedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(todo.dueDate, 'yyyy-MM-dd', new Date());
    todoContainer.setAttribute('data-today', String((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(inputtedDueDate)));
    todoContainer.setAttribute('data-this-week', String(((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(inputtedDueDate, new Date())) <= 7 && ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(inputtedDueDate, new Date())) >= 0));
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
    projectTitleField.textContent = project.title;
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





/***/ }),

/***/ "./src/display_functions.js":
/*!**********************************!*\
  !*** ./src/display_functions.js ***!
  \**********************************/
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
  const removeEditOptions = item => {
    if (item && item.querySelector('.edit-btn') !== null) {
      const editBtn = item.querySelector('.edit-btn');
      if (editBtn.querySelector('.edit-options-container') !== null) {
        const editOptionsContainer = editBtn.querySelector('.edit-options-container');
        editBtn.removeChild(editOptionsContainer);
      }
    }
  }

  const displayTodoList = todoList => {
    todoList.forEach(todo => {
      removeEditOptions(todo);
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
    removeEditOptions,
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

  filterTodo(attr, val) {
    return this.todoList.filter(todo => todo[attr] === val);
  }

  filterTodoElms(attr, val) {
    return this.todoElmList.filter(todoElm => todoElm.dataset[attr] === val);
  }

  printTodoList() {
    const res = this.todoList.filter(todo => todo.title);
    console.log(res);
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



/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    startOfDayRight.getTime() -
    (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/getDefaultOptions.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/getDefaultOptions.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");


/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultOptions);


/***/ }),

/***/ "./node_modules/date-fns/getISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISODay: () => (/* binding */ getISODay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  let day = _date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISODay);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date).getTime() - (0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options).getTime() -
    (0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parse.mjs":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/parse.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parsers: () => (/* reexport safe */ _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDefaultOptions.mjs */ "./node_modules/date-fns/getDefaultOptions.mjs");
/* harmony import */ var _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale/en-US.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/_lib/parsers.mjs */ "./node_modules/date-fns/parse/_lib/parsers.mjs");
/* harmony import */ var _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse/_lib/Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");









// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const defaultOptions = (0,_getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  if (formatStr === "") {
    if (dateStr === "") {
      return (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);
    } else {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }
  }

  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  // If timezone isn't specified, it will be set to the system timezone
  const setters = [new _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__.DateToSystemTimezoneSetter()];

  const tokens = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter in _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters) {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp);

  const usedTokens = [];

  for (let token of tokens) {
    if (
      !options?.useAdditionalWeekYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedWeekYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (
      !options?.useAdditionalDayOfYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedDayOfYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }

    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) =>
            incompatibleTokens.includes(usedToken.token) ||
            usedToken.token === firstCharacter,
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`,
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`,
        );
      }

      usedTokens.push({ token: firstCharacter, fullToken: token });

      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions,
      );

      if (!parseResult) {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }

      setters.push(parseResult.setter);

      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const uniquePrioritySetters = setters
    .map((setter) => setter.priority)
    .sort((a, b) => b - a)
    .filter((priority, index, array) => array.indexOf(priority) === index)
    .map((priority) =>
      setters
        .filter((setter) => setter.priority === priority)
        .sort((a, b) => b.subPriority - a.subPriority),
    )
    .map((setterArray) => setterArray[0]);

  let date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);

  if (isNaN(date.getTime())) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }

    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }

  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, date);
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Parser.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Parser.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");


class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }

    return {
      setter: new _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority,
      ),
      rest: result.rest,
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Setter.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Setter.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToSystemTimezoneSetter: () => (/* binding */ DateToSystemTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _transpose_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transpose.mjs */ "./node_modules/date-fns/transpose.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

class ValueSetter extends Setter {
  constructor(
    value,

    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}

class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, (0,_transpose_mjs__WEBPACK_IMPORTED_MODULE_1__.transpose)(date, Date));
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/constants.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/constants.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs");
/* harmony import */ var _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs");
/* harmony import */ var _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs");
/* harmony import */ var _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs");
/* harmony import */ var _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs");
/* harmony import */ var _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs");
/* harmony import */ var _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs");
/* harmony import */ var _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs");
/* harmony import */ var _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs");
/* harmony import */ var _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs");
/* harmony import */ var _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs");
/* harmony import */ var _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs");
/* harmony import */ var _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs");
/* harmony import */ var _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs");
/* harmony import */ var _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs");
/* harmony import */ var _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs");
/* harmony import */ var _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs");
/* harmony import */ var _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs");
/* harmony import */ var _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs");
/* harmony import */ var _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs");
/* harmony import */ var _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs");
/* harmony import */ var _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs");
/* harmony import */ var _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs");
/* harmony import */ var _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs");
/* harmony import */ var _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs");
/* harmony import */ var _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs");
/* harmony import */ var _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs");
/* harmony import */ var _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs");
/* harmony import */ var _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs");
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
const parsers = {
  G: new _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser(),
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMMidnightParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
class DateParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  subPriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class DayOfYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  subpriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");



// Day of week
class DayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "EEEE":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_1__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");


class EraParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 140;

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );

      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class ExtendedYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class FractionOfSecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 30;

  parse(dateString, token) {
    const valueCallback = (value) =>
      Math.floor(value * Math.pow(10, -token.length + 3));
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0To11Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0to23Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1To24Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1to12Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setISODay.mjs */ "./node_modules/date-fns/setISODay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// ISO day of week
class ISODayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };

    switch (token) {
      // 2
      case "i":
      case "ii": // 02
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // T
      case "iiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "narrow",
            context: "formatting",
          }),
          valueCallback,
        );
      // Tu
      case "iiiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "short",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "abbreviated",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = (0,_setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setISOWeek.mjs */ "./node_modules/date-fns/setISOWeek.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// ISO week of year
class ISOWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)((0,_setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setISOWeek)(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// ISO week-numbering year
class ISOWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Local day of week
class LocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "e":
      case "ee": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "eee":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "eeee":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setWeek.mjs */ "./node_modules/date-fns/setWeek.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Local week of year
class LocalWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)((0,_setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setWeek)(date, value, options), options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// Local week-numbering year
class LocalWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.getWeekYear)(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MinuteParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];

  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return (
          match.month(dateString, { width: "wide", context: "formatting" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class QuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class SecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "c":
      case "cc": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "ccc":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return (
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // Tuesday
      case "cccc":
      default:
        return (
          match.day(dateString, { width: "wide", context: "standalone" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class StandAloneMonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return (
          match.month(dateString, { width: "wide", context: "standalone" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class StandAloneQuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampMillisecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 20;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampSecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 40;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy",
    });

    switch (token) {
      case "y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    const currentYear = date.getFullYear();

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/utils.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/utils.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");



function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest,
  };
}

function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1),
    };
  }

  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value:
      sign *
      (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour +
        minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute +
        seconds * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}


/***/ }),

/***/ "./node_modules/date-fns/setDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/setDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDay: () => (/* binding */ setDay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const currentDay = _date.getDay();

  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;

  const delta = 7 - weekStartsOn;
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay);


/***/ }),

/***/ "./node_modules/date-fns/setISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/setISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISODay: () => (/* binding */ setISODay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.mjs */ "./node_modules/date-fns/getISODay.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentDay = (0,_getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__.getISODay)(_date);
  const diff = day - currentDay;
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISODay);


/***/ }),

/***/ "./node_modules/date-fns/setISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/setISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISOWeek: () => (/* binding */ setISOWeek)
/* harmony export */ });
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/setWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/setWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setWeek: () => (/* binding */ setWeek)
/* harmony export */ });
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/date-fns/transpose.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/transpose.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam DateInputType - The input `Date` type derived from the passed argument.
 * @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
 *
 * @param fromDate - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(fromDate, constructor) {
  const date =
    constructor instanceof Date
      ? (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0)
      : new constructor(0);
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate(),
  );
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds(),
  );
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transpose);


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
/* harmony import */ var _display_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display_functions */ "./src/display_functions.js");






const DisplayController = (() => {
  // Variables and DOM Elements
  const homeItem = document.querySelector('#home-label ~ div');
  const projectsSection = document.querySelector('.projects-section');
  const taskContainer = document.querySelector('.task-container');
  const addProjectBtn = document.querySelector('#add-project-btn');
  const homeItems = Array.from(document.querySelectorAll('.home-item'));
  const mainContent = document.querySelector('.main-content');

  let prevTab;
  let currTab = homeItem;
  let prevTodoElm;
  let currTodoElm;
  let currProject;
  let allProjects = [];

  mainContent.addEventListener('click', (e) => {
    console.log('main-content-clicked');
    console.log(e.target)
  });

  // Helper Functions ________________________________________________

  const addTodoToProject = (todo, project) => {
    project.appendTodo(todo);
  }

  const addTodoElmToProject = (todoElm, project) => {
    project.appendTodoElm(todoElm);
  }

    //TODO: fix so that filtered items list matches indecis
    // Perhaps add individual data elements for tasks, in 7 weeks etc...
    // Need to write a getProjectFromTodo btn...
  const getTodoFromTodoElm = todoElm => {
    if (currTab.classList.contains('project-item')) {
      return currProject.todoList[todoElm.dataset.place];
    } else {
      const tabName = currTab.textContent;
      const tabType = determineTabType(tabName);
      const filteredElmList = getFilteredElmList(tabType, 'true');
    }
  }

  const getProjFromProjElm = projElm => {
    return allProjects[projElm.dataset.place];
  }

  const updateCurrTab = newTab => {
    if (newTab !== currTab) {
      prevTab = currTab;
      currTab = newTab;
      prevTab.classList.remove('selected');
      currTab.classList.add('selected');
    }
  }

  const updateCurrTodo = newTodoElm => {
    if(newTodoElm !== currTodoElm) {
      if(currProject.todoList.length === 0) {
        currTodoElm = newTodoElm;
      } else {
        prevTodoElm = currTodoElm;
        currTodoElm = newTodoElm;
      }
    }
  }

  const updateCurrProject = newProj => {
    currProject = newProj;
  }

  const updatePlaces = (n, elmArr) => {
    elmArr.forEach((elm, i) => {
      if(i > n) {
        elm.dataset.place = elm.dataset.place - 1;
      }
    })
  }

  const isChildPresent = (childClass, parent) => {
    return parent.querySelector(childClass) !== null;
  }

  // Event Listener Functions ________________________________________________

  const isCompleteBtnEL = isCompleteBtn => {
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

  const setEditOptionsEL = (e, editBtn, editSelectEL, deleteSelectEL) => {
    e.editSelection.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      editBtn.removeChild(e.editOptionsContainer);
      console.log('editSelection clicked');
    });
    e.deleteSelection.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      deleteSelectEL(editBtn.parentNode);
      editBtn.removeChild(e.editOptionsContainer);
      console.log('deleteSelection clicked');
    });
    e.cancelSelection.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      editBtn.removeChild(e.editOptionsContainer);
      console.log('cancelEditTodoBtn clicked');
    });
  }

  const confirmEditTodoBtnEL = editBtn => {

  }

  const deleteTodoBtnEL = todoElm => {
    const todoIndex = todoElm.dataset.place;
    const todoElmList = Array.from(document.querySelector('.todo-container'));
    updatePlaces(todoIndex, todoElmList);
    currProject.todoList.splice(todoIndex, 1);
    currProject.todoElmList.splice(todoIndex, 1);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.deleteTodo(todoElm);
  }

  const editTodoBtnEL = editBtn => {
    console.log('editTodoBtn clicked');
    const e = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createEditOptions('todo');
    setEditOptionsEL(e, editBtn, confirmEditTodoBtnEL, deleteTodoBtnEL);
    e.editOptionsContainer.append(e.editSelection, e.deleteSelection, e.cancelSelection);
    if (!(isChildPresent('.edit-options-container', editBtn))) {
      editBtn.appendChild(e.editOptionsContainer);
    }
  }

  const addTodoBtnEL = () => {
    const titleFieldVal = document.querySelector('#title-field').value;
    const descriptionFieldVal = document.querySelector('#description-field').value;
    const dateVal = document.querySelector('#date-field').value;
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(titleFieldVal, descriptionFieldVal, dateVal, false, false);
    const newTodoElm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createTodo(newTodo);
    newTodoElm.setAttribute('data-place', String(currProject.todoList.length));
    const isCompleteBtn = newTodoElm.querySelector('.is-complete-label');
    const prorityBtn = newTodoElm.querySelector('.priority-btn-container');
    const editBtn = newTodoElm.querySelector('.edit-btn');
    isCompleteBtn.addEventListener('click', event => {
      event.preventDefault();
      isCompleteBtnEL(isCompleteBtn);
    });
    prorityBtn.addEventListener('click', event => {
      event.preventDefault();
      priorityBtnEL(prorityBtn);
    });
    editBtn.addEventListener('click', event => {
      event.preventDefault();
      editTodoBtnEL(editBtn);
    });
    addTodoToProject(newTodo, currProject);
    addTodoElmToProject(newTodoElm, currProject);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodo(newTodoElm);
    newTodoElm.addEventListener('click', () => switchTodo(newTodoElm));
  }

  const addTaskBtnEL = () => {
    if(!(isChildPresent('.todo-form-container', taskContainer))) {
      _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayAddTodoForm();
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
      _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayAddTaskBtn();
      const addTaskBtn = document.querySelector('.add-task-btn');
      addTaskBtn.addEventListener('click', event => {
        event.preventDefault();
        addTaskBtnEL();
      })
    }
  }

  const confirmEditProjBtnEL = projElm => {
    const projIndex = projElm.dataset.place;
    const proj = getProjFromProjElm(projElm);
    const editTodoForm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createEditTodoForm(proj);

  }

  const deleteProjBtnEL = projElm => {
    const projIndex = projElm.dataset.place;
    const projElmList = Array.from(document.querySelectorAll('.project-item'));
    updatePlaces(projIndex, projElmList);
    allProjects.splice(projIndex, 1);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.deleteProjectFromSidebar(projElm);
    switchHomeTab(homeItem);
  }

  const editProjectBtnEL = editBtn => {
    if(document.querySelector('.edit-options-container') === null) {
      console.log(editBtn);
      const e = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createEditOptions('proj');
      setEditOptionsEL(e, editBtn, confirmEditProjBtnEL, deleteProjBtnEL);
      e.editOptionsContainer.append(e.editSelection, e.deleteSelection, e.cancelSelection);
      if (!(isChildPresent('.edit-options-container', editBtn))) {
        editBtn.appendChild(e.editOptionsContainer);
      }
    }
  }

  const addProjectBtnEL = () => {
    if(document.querySelector('.project-form-container') !== null) {
      const projectTitleField = document.querySelector('#project-title-field');
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitleField.value, [], []);
      const newProjectElm = _create_dom_elms__WEBPACK_IMPORTED_MODULE_2__.CreateDomElms.createProjectSidebarElement(projectTitleField.value);
      newProjectElm.setAttribute('data-place', allProjects.length);
      const editBtn = newProjectElm.querySelector('.edit-btn');
      editBtn.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        switchProjectTab(newProjectElm);
        editProjectBtnEL(editBtn);
      });
      allProjects.push(newProject);
      // updateCurrProject(newProject);
      _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.addProjectToSidebar(newProjectElm);
      newProjectElm.addEventListener('click', () => switchProjectTab(newProjectElm));
      console.table(allProjects); 
    }
  }

  
  const addProjectForm = () => {
    if (!(isChildPresent('.project-form-container', projectsSection))) {
      _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.addProjectForm();
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
        projectsSection.removeChild(projectForm);
      })
    }
  }

  // Switching Between Tabs __________________________________________________

  const getFilteredElmList = (attr, val) => {
    let res = [];
    allProjects.forEach(project => {
      let filteredList = project.filterTodoElms(attr, val);
      filteredList.forEach(elm => res.push(elm));
    });
    return res;
  }

  const displayFilteredList = (attr, val) => {
    allProjects.forEach(project => {
      let filteredList = project.filterTodoElms(attr, val);
      _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodoList(filteredList);
    });
  }

  const determineTabType = item => {
    if(item.textContent === 'All Tasks') {
      return 'todo';
    } else if (item.textContent === 'Today') {
      return 'today';
    } else if (item.textContent === 'Next 7 Days') {
      return 'thisWeek';
    } else if (item.textContent === 'Important') {
      return 'priority';
    } else if (item.textContent === 'Completed') {
      return 'complete';
    }
  }

  const switchHomeTab = item => {
    updateCurrTab(item);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.switchSideBarItem(item);
    const tabType = determineTabType(item);
    displayFilteredList(tabType, 'true');


    // if (item.textContent === 'All Tasks') {
    //   displayFilteredList('todo', 'true');
    // } else if (item.textContent === 'Today') {
    //   displayFilteredList('today', 'true');
    // } else if (item.textContent === 'Next 7 Days') {
    //   displayFilteredList('thisWeek', 'true');
    // } else if (item.textContent === 'Important') {
    //   displayFilteredList('priority', 'true');
    // } else if (item.textContent === 'Completed') {
    //   displayFilteredList('complete', 'true');
    // }
  }

  const switchProjectTab = item => {
    updateCurrTab(item);
    updateCurrProject(allProjects[item.dataset.place]);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.removeEditOptions(prevTab);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.switchSideBarItem(item);
    addAddTaskBtn();
    console.log(`all projects: ${allProjects}`);
    console.log(`current project: ${currProject.name}`);
    currProject.printProject();
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.displayTodoList(currProject.todoElmList);
  }

  const switchTodo = todoItem => {
    updateCurrTodo(todoItem);
    _display_functions__WEBPACK_IMPORTED_MODULE_3__.DisplayFunctions.removeEditOptions(prevTodoElm);
  }


  // Add event listeners ___________________________________________________

  addProjectBtn.addEventListener('click', addProjectForm);

  homeItems.forEach(item => item.addEventListener('click', () => switchHomeTab(item)));
  
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ007QUFDMEI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQUs7QUFDakMsb0RBQW9ELGlEQUFPO0FBQzNELHlEQUF5RCwwREFBZ0Isd0NBQXdDLDBEQUFnQjtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblEyQjtBQUNNO0FBQ2M7QUFDUTs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBLHFCQUFxQiwyREFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUFhO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwyREFBYTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUd3Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLHlFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFMMkQ7QUFDYzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQLGlCQUFpQixpRkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxPQUFPLG1FQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXLG1FQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMsbUVBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE9BQU8sbUVBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGFBQWEsbUVBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklvRDtBQUNRO0FBQ0Q7QUFDckI7QUFDNEI7QUFLOUI7QUFDZTtBQUNrQjs7QUFFckU7QUFDQTtBQUNtQzs7QUFFbkM7QUFDQSxRQUFRLGFBQWE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYywyREFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQUk7QUFDNUIsdUJBQXVCLDJEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sZ0VBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGdFQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBYTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBTztBQUNwQyw0QkFBNEIsMkRBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sZ0VBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFnQjtBQUN0QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSxnRUFBZ0I7QUFDcEI7QUFDQSxpQ0FBaUMsWUFBWTtBQUM3QyxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVfZG9tX2VsbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9QYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL1NldHRlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0FNUE1NaWRuaWdodFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0RhdGVQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRGF5T2ZZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0RheVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQZXJpb2RQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRXJhUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9GcmFjdGlvbk9mU2Vjb25kUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIwVG8xMVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMHRvMjNQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjFUbzI0UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxdG8xMlBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9JU09EYXlQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVXaXRoWlBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9JU09XZWVrUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0xvY2FsRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0xvY2FsV2Vla1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL01pbnV0ZVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Nb250aFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9RdWFydGVyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1NlY29uZFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvU3RhbmRBbG9uZU1vbnRoUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1llYXJQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3V0aWxzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0RGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0SVNPRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0SVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldFdlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RyYW5zcG9zZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGlzVG9kYXksIHBhcnNlLCBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IENyZWF0ZURvbUVsbXMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUb2RvID0gdG9kbyA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXNDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb25zdCBlZGl0U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gY29uc3QgZGVsZXRlU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gU2V0IHRleHQgY29udGVudFxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGlmICh0b2RvLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdObyBEdWUgRGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB9XG4gICAgLy8gZWRpdFNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAvLyBkZWxldGVTZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAvLyBTZXQgY2xhc3Nlc1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUtbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWxhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RhdGUtbGFiZWwnKTtcbiAgICBwcmlvcml0eUJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idG4tY29udGFpbmVyJywgJ2luY29tcGxldGUnKTtcbiAgICBpc0NvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWNvbXBsZXRlLWxhYmVsJywgJ3VuY2hlY2tlZCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICAvLyBlZGl0U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1pdGVtJyk7XG4gICAgLy8gZGVsZXRlU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1pdGVtJyk7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAvLyBlZGl0U2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZWRpdCcpO1xuICAgIC8vIGRlbGV0ZVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlbGV0ZScpO1xuICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nLCAndHJ1ZScpO1xuICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNvbXBsZXRlJywgU3RyaW5nKHRvZG8uaXNDb21wbGV0ZSkpO1xuICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgU3RyaW5nKHRvZG8ucHJpb3JpdHkpKTtcbiAgICBjb25zdCBpbnB1dHRlZER1ZURhdGUgPSBwYXJzZSh0b2RvLmR1ZURhdGUsICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kYXknLCBTdHJpbmcoaXNUb2RheShpbnB1dHRlZER1ZURhdGUpKSk7XG4gICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhpcy13ZWVrJywgU3RyaW5nKChkaWZmZXJlbmNlSW5EYXlzKGlucHV0dGVkRHVlRGF0ZSwgbmV3IERhdGUoKSkpIDw9IDcgJiYgKGRpZmZlcmVuY2VJbkRheXMoaW5wdXR0ZWREdWVEYXRlLCBuZXcgRGF0ZSgpKSkgPj0gMCkpO1xuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICBsZXQgc2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICBzZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWNvbnRhaW5lcicpO1xuICAgIC8vICAgc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIC8vICAgc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVNlbGVjdGlvbik7XG4gICAgLy8gfSlcbiAgICAvLyBBcHBlbmQgQ2hpbGRyZW5cbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgY29uc3QgY2hpbGRyZW5BcnIgPSBbaXNDb21wbGV0ZUJ0biwgZGVzY3JpcHRpb25Db250YWluZXIsIGRhdGVMYWJlbCwgcHJpb3JpdHlCdG5Db250YWluZXIsIGVkaXRCdXR0b25dO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKC4uLmNoaWxkcmVuQXJyKTtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlQWRkVGFza0J0biA9ICgpID0+IHtcbiAgICAvLyBJbml0aWxpemUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snXG4gICAgLy8gU2V0IGNsYXNzZXNcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicsICdob3Zlci1oaWdobGlnaHQnKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIC8vIEFwcGVuZCBjaGlsZHJlblxuICAgIHJldHVybiBhZGRUYXNrO1xuICB9XG4gIFxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgbGV0IHRvZG9BcnIgPSBwcm9qZWN0LnRvZG9MaXN0O1xuICAgIC8vIEluaXRpbGl6ZSBET00gZWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gU2V0IHRleHQgY29udGVudFxuICAgIGFkZFRhc2tMYWJlbC50ZXh0ID0gJysgQWRkIFRhc2snO1xuICAgIHRvZG9BcnIuZm9yRWFjaCgodG9kbywgaSkgPT4gdG9kby5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2UnLFN0cmluZyhpKSkpO1xuICAgIC8vIFNldCBjbGFzc2VzXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGFkZFRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1sYWJlbCcpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChhZGRUYXNrTGFiZWwsIHRvZG9MaXN0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlUHJvamVjdFNpZGViYXJFbGVtZW50ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIC8vIEluaXRpbGl6ZSBET00gZWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0U2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAvLyBTZXQgY2xhc3Nlc1xuICAgIHByb2plY3RTaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLWl0ZW0nLCAncHJvamVjdC1pdGVtJywgJ2hvdmVyLWhpZ2hsaWdodCcpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIHByb2plY3RTaWRlYmFyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZScsIFN0cmluZygwKSk7XG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuXG4gICAgcHJvamVjdFNpZGViYXJDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTGFiZWwsIGVkaXRCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0U2lkZWJhckNvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlTmV3VG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHRvZG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlsczogJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTogJztcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAvLyBTZXQgY2xhc3NlcyBhbmQgaWRzXG4gICAgdGl0bGVGaWVsZC5pZCA9ICd0aXRsZS1maWVsZCc7XG4gICAgZGVzY3JpcHRpb25GaWVsZC5pZCA9ICdkZXNjcmlwdGlvbi1maWVsZCc7XG4gICAgZGF0ZUZpZWxkLmlkID0gJ2RhdGUtZmllbGQnO1xuICAgIGFkZEJ0bi5pZCA9ICd0b2RvLWZvcm0tYWRkLWJ0bic7XG4gICAgY2FuY2VsQnRuLmlkID0gJ3RvZG8tZm9ybS1jYW5jZWwtYnRuJztcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1jb250YWluZXInLCAnYWRkLWNhbmNlbC1idG4tY29udGFpbmVyJyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJyk7XG4gICAgdG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtLWNvbnRhaW5lcicpO1xuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBUaXRsZScpO1xuICAgIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXItdGl0bGUnKTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIERldGFpbHMnKTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyLWRlc2NyaXB0aW9uJyk7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyLWRhdGUnKTtcbiAgICBcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUtZmllbGQnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uLWZpZWxkJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtZmllbGQnKTtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlRmllbGQpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIzLmFwcGVuZChkYXRlTGFiZWwsIGRhdGVGaWVsZCk7XG4gICAgZm9ybUVsZW1lbnRDb250YWluZXI0LmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kKGZvcm1FbGVtZW50Q29udGFpbmVyMSwgZm9ybUVsZW1lbnRDb250YWluZXIyLCBmb3JtRWxlbWVudENvbnRhaW5lcjMsIGZvcm1FbGVtZW50Q29udGFpbmVyNCk7XG4gICAgdG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHJldHVybiB0b2RvRm9ybUNvbnRhaW5lcjtcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgLy8gSW5pdGlsaXplIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAvLyBTZXQgY2xhc3NlcyBhbmQgaWRzXG4gICAgYWRkQnRuLmlkID0gJ3Byb2plY3QtZm9ybS1hZGQtYnRuJztcbiAgICBjYW5jZWxCdG4uaWQgPSAncHJvamVjdC1mb3JtLWNhbmNlbC1idG4nO1xuICAgIHByb2plY3RUaXRsZUZpZWxkLmlkID0gJ3Byb2plY3QtdGl0bGUtZmllbGQnO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idG4nKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50LWNvbnRhaW5lcicpO1xuICAgIGZvcm1FbGVtZW50Q29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQtY29udGFpbmVyJywgJ2FkZC1jYW5jZWwtYnRuLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIHByb2plY3RUaXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdFRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3RUaXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgUHJvamVjdCBOYW1lJyk7XG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuXG4gICAgZm9ybUVsZW1lbnRDb250YWluZXIxLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUZpZWxkKTtcbiAgICBmb3JtRWxlbWVudENvbnRhaW5lcjIuYXBwZW5kKGFkZEJ0biwgY2FuY2VsQnRuKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmQoZm9ybUVsZW1lbnRDb250YWluZXIxLCBmb3JtRWxlbWVudENvbnRhaW5lcjIpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICByZXR1cm4gcHJvamVjdEZvcm1Db250YWluZXI7XG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZUVkaXRPcHRpb25zID0gb3B0aW9uc1R5cGUgPT4ge1xuICAgIGNvbnN0IGVkaXRPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdFNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbFNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChvcHRpb25zVHlwZSA9PT0gJ3RvZG8nKSB7XG4gICAgICBlZGl0U2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIH0gaWYgKG9wdGlvbnNUeXBlID09PSAncHJvaicpIHtcbiAgICAgIGVkaXRTZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICB9XG4gICAgZGVsZXRlU2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgY2FuY2VsU2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZWRpdE9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGVkaXRTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICBkZWxldGVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICBjYW5jZWxTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWl0ZW0nKTtcbiAgICBpZiAob3B0aW9uc1R5cGUgPT09ICd0b2RvJykge1xuICAgICAgZWRpdFNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgICAgIGRlbGV0ZVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdG9kbycpO1xuICAgICAgY2FuY2VsU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC10b2RvJyk7XG4gICAgfSBpZiAob3B0aW9uc1R5cGUgPT09ICdwcm9qJykge1xuICAgICAgZWRpdFNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2onKTtcbiAgICAgIGRlbGV0ZVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvaicpO1xuICAgICAgY2FuY2VsU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1lZGl0LXByb2onKTtcbiAgICB9XG4gICAgcmV0dXJuIHtlZGl0T3B0aW9uc0NvbnRhaW5lciwgZWRpdFNlbGVjdGlvbiwgZGVsZXRlU2VsZWN0aW9uLCBjYW5jZWxTZWxlY3Rpb259O1xuICB9XG5cbiAgY29uc3QgY3JlYXRlRWRpdFRvZG9Gb3JtID0gdG9kbyA9PiB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVOZXdUb2RvRm9ybSgpO1xuICAgIGNvbnN0IHRpdGxlRmllbGQgPSB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtZmllbGQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLWZpZWxkJyk7XG4gICAgY29uc3QgZGF0ZUZpZWxkID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUtZmllbGQnKTtcbiAgICB0aXRsZUZpZWxkLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBkZXNjcmlwdGlvbkZpZWxkLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkYXRlRmllbGQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlRWRpdFByb2plY3RGb3JtID0gcHJvamVjdCA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBjcmVhdGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUZpZWxkID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBwcm9qZWN0VGl0bGVGaWVsZC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUb2RvLFxuICAgIGNyZWF0ZUFkZFRhc2tCdG4sXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjcmVhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnQsXG4gICAgY3JlYXRlTmV3VG9kb0Zvcm0sXG4gICAgY3JlYXRlTmV3UHJvamVjdEZvcm0sXG4gICAgY3JlYXRlRWRpdE9wdGlvbnMsXG4gICAgY3JlYXRlRWRpdFRvZG9Gb3JtLFxuICAgIGNyZWF0ZUVkaXRQcm9qZWN0Rm9ybSxcbiAgfVxufSkoKVxuXG5cblxuZXhwb3J0IHtDcmVhdGVEb21FbG1zfTsiLCJpbXBvcnQge1RvZG99IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge0NyZWF0ZURvbUVsbXN9IGZyb20gJy4vY3JlYXRlX2RvbV9lbG1zJztcbmltcG9ydCB7IGFkZCwgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgRGlzcGxheUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQtdGl0bGUnKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1zZWN0aW9uJyk7XG5cbiAgLy8gSGVscGVyIEZ1bmN0aW9uc1xuICBjb25zdCBjbGVhckVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlQ2hpbGRFbG1lbWVudCA9IChjaGlsZCwgcGFyZW50KSA9PiB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIC8vIE1haW4gY29udGVudCBmdW5jdGlvbnNcbiAgY29uc3QgdXBkYXRlTWFpbkNvbnRlbnRUaXRsZSA9IG5ld1RpdGxlID0+IHtcbiAgICBtYWluQ29udGVudFRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG4gIH1cblxuICBjb25zdCBzd2l0Y2hTaWRlQmFySXRlbSA9IG5ld1NpZGVCYXJJdGVtID0+IHsgXG4gICAgbGV0IG5hbWUgPSBuZXdTaWRlQmFySXRlbS50ZXh0Q29udGVudDtcbiAgICB1cGRhdGVNYWluQ29udGVudFRpdGxlKG5hbWUpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vVGFzayBjb250YWluZXIgZnVuY3Rpb25zXG4gIGNvbnN0IHJlbW92ZUVkaXRPcHRpb25zID0gaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZWRpdEJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG4gICAgICBpZiAoZWRpdEJ0bi5xdWVyeVNlbGVjdG9yKCcuZWRpdC1vcHRpb25zLWNvbnRhaW5lcicpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVkaXRPcHRpb25zQ29udGFpbmVyID0gZWRpdEJ0bi5xdWVyeVNlbGVjdG9yKCcuZWRpdC1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgICAgICBlZGl0QnRuLnJlbW92ZUNoaWxkKGVkaXRPcHRpb25zQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSB0b2RvTGlzdCA9PiB7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIHJlbW92ZUVkaXRPcHRpb25zKHRvZG8pO1xuICAgICAgZGlzcGxheVRvZG8odG9kbyk7XG4gICAgfSlcbiAgfVxuXG5cbiAgY29uc3QgZGlzcGxheUFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgbGV0IGFkZFRhc2tCdG4gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZUFkZFRhc2tCdG4oKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheUFkZFRvZG9Gb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVOZXdUb2RvRm9ybSgpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheVRvZG8gPSB0b2RvID0+IHtcbiAgICAvLyBjb25zdCB0b2RvID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVUb2RvKCdUZXN0IFRpdGxlJywgJ1Rlc3QgRGVzY3JpcHRpb24nLCAnVGVzdCBEYXRlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgfVxuICBcbiAgY29uc3QgZGVsZXRlVG9kbyA9IHRvZG8gPT4ge1xuICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kbyk7XG4gIH1cblxuICAgIFxuICBjb25zdCBlZGl0VG9kbyA9IHRvZG8gPT4ge1xuICB9XG5cbiAgLy9TaWRlYmFyIGRpc3BsYXkgZnVuY3Rpb25zXG4gIGNvbnN0IGFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3RUb1NpZGViYXIgPSBwcm9qZWN0U2lkZWJhckNvbnRhaW5lciA9PiB7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGViYXJDb250YWluZXIpO1xuICB9XG4gIFxuICBjb25zdCBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIgPSBwcm9qZWN0U2lkZWJhckNvbnRhaW5lciA9PiB7XG4gICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdFNpZGViYXJDb250YWluZXIpO1xuICB9XG4gIFxuICBjb25zdCBlZGl0UHJvamVjdCA9IHByb2plY3RTaWRlYmFyQ29udGFpbmVyID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1zZWN0aW9uJyk7XG4gIFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhckVsZW1lbnQsXG4gICAgc3dpdGNoU2lkZUJhckl0ZW0sXG4gICAgcmVtb3ZlRWRpdE9wdGlvbnMsXG4gICAgZGlzcGxheUFkZFRhc2tCdG4sXG4gICAgZGlzcGxheUFkZFRvZG9Gb3JtLFxuICAgIGRpc3BsYXlUb2RvTGlzdCxcbiAgICBkaXNwbGF5VG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGVkaXRUb2RvLFxuICAgIGFkZFByb2plY3RGb3JtLFxuICAgIGFkZFByb2plY3RUb1NpZGViYXIsXG4gICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyLFxuICAgIGVkaXRQcm9qZWN0XG4gIH1cblxufSkoKTtcblxuZXhwb3J0IHtEaXNwbGF5RnVuY3Rpb25zfTtcblxuIiwiaW1wb3J0IHsgQ3JlYXRlRG9tRWxtcyB9IGZyb20gXCIuL2NyZWF0ZV9kb21fZWxtc1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb0xpc3QsIHRvZG9FbG1MaXN0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9MaXN0ID0gdG9kb0xpc3Q7XG4gICAgdGhpcy50b2RvRWxtTGlzdCA9IHRvZG9FbG1MaXN0O1xuICB9XG5cbiAgZ2V0IG5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IHRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl90b2RvTGlzdDtcbiAgfVxuXG4gIGdldCB0b2RvRWxtTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kb0VsbUxpc3Q7XG4gIH1cblxuICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBzZXQgdG9kb0xpc3QobmV3VG9kb0xpc3QpIHtcbiAgICB0aGlzLl90b2RvTGlzdCA9IG5ld1RvZG9MaXN0O1xuICB9XG5cbiAgc2V0IHRvZG9FbG1MaXN0KG5ld1RvZG9FbG1MaXN0KSB7XG4gICAgdGhpcy5fdG9kb0VsbUxpc3QgPSBuZXdUb2RvRWxtTGlzdDtcbiAgfVxuXG4gIGFwcGVuZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGFwcGVuZFRvZG9FbG0odG9kb0VsbSkge1xuICAgIHRoaXMudG9kb0VsbUxpc3QucHVzaCh0b2RvRWxtKTtcbiAgfVxuXG4gIHBvcFRvZG8oKSB7XG4gICAgdGhpcy50b2RvTGlzdC5wb3AoKTtcbiAgfVxuXG4gIHBvcFRvZG9FbG0oKSB7XG4gICAgdGhpcy50b2RvRWxtTGlzdC5wb3AoKTtcbiAgfVxuXG4gIHJlbW92ZVRvZG8obikge1xuICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKG4sIDEpO1xuICB9XG5cbiAgcmVtb3ZlVG9kb0VsbShuKSB7XG4gICAgdGhpcy50b2RvRWxtTGlzdC5zcGxpY2UobiwgMSk7XG4gIH1cblxuICBnZXRUb2RvKG4pIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdFtuXTtcbiAgfVxuXG4gIGdldFRvZG9FbG0obikge1xuICAgIHJldHVybiB0aGlzLnRvZG9FbG1MaXN0W25dO1xuICB9XG5cbiAgZmlsdGVyVG9kbyhhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvW2F0dHJdID09PSB2YWwpO1xuICB9XG5cbiAgZmlsdGVyVG9kb0VsbXMoYXR0ciwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0VsbUxpc3QuZmlsdGVyKHRvZG9FbG0gPT4gdG9kb0VsbS5kYXRhc2V0W2F0dHJdID09PSB2YWwpO1xuICB9XG5cbiAgcHJpbnRUb2RvTGlzdCgpIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnRvZG9MaXN0LmZpbHRlcih0b2RvID0+IHRvZG8udGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gIH1cblxuICBwcmludFByb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5sb2codGhpcy50b2RvTGlzdCk7XG4gIH1cblxuICAvLyBnZXRUb2RvTGlzdEVsbXMoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9kb0xpc3QubWFwKCh0b2RvLCBwbGFjZSkgPT4ge1xuICAvLyAgICAgbGV0IHRvZG9FbG0gPSBDcmVhdGVEb21FbG1zLmNyZWF0ZVRvZG8odG9kbyk7XG4gIC8vICAgICB0b2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZScsIHBsYWNlKTtcbiAgLy8gICAgIHJldHVybiB0b2RvRWxtO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG5cbmV4cG9ydCB7UHJvamVjdH07IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NvbXBsZXRlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdUaXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdUaXRsZSBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdEZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdEZXNjcmlwdGlvbiBpcyBub3Qgc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIGlmICh0eXBlb2YgbmV3RHVlRGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25ld0R1ZURhdGUgaXMgbm90IHN0cmluZycpXG4gICAgfVxuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgaWYgKHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3UHJpb3JpdHkgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaXNDb21wbGV0ZShjb21wbGV0ZVN0YXR1cykge1xuICAgIGlmICh0eXBlb2YgY29tcGxldGVTdGF0dXMgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IGNvbXBsZXRlU3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tcGxldGVTdGF0dXMgaXMgbm90IGJvb2wnKTtcbiAgICB9XG4gIH1cblxuICBwcmludFRvZG8oKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IHtUb2RvfTsiLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgIHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtXG4gICAgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheSBwZXJpb2RzIGJldHdlZW4gdHdvIGRhdGVzLiBGcmFjdGlvbmFsIGRheXMgYXJlXG4gKiB0cnVuY2F0ZWQgdG93YXJkcyB6ZXJvLlxuICpcbiAqIE9uZSBcImZ1bGwgZGF5XCIgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBsb2NhbCB0aW1lIGluIG9uZSBkYXkgdG8gdGhlIHNhbWVcbiAqIGxvY2FsIHRpbWUgb24gdGhlIG5leHQgb3IgcHJldmlvdXMgZGF5LiBBIGZ1bGwgZGF5IGNhbiBzb21ldGltZXMgYmUgbGVzcyB0aGFuXG4gKiBvciBtb3JlIHRoYW4gMjQgaG91cnMgaWYgYSBkYXlsaWdodCBzYXZpbmdzIGNoYW5nZSBoYXBwZW5zIGJldHdlZW4gdHdvIGRhdGVzLlxuICpcbiAqIFRvIGlnbm9yZSBEU1QgYW5kIG9ubHkgbWVhc3VyZSBleGFjdCAyNC1ob3VyIHBlcmlvZHMsIHVzZSB0aGlzIGluc3RlYWQ6XG4gKiBgTWF0aC5mbG9vcihkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KS8yNCl8MGAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBmdWxsIGRheXMgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDEgTWFyY2ggMjAyMCAwOjAwIGFuZCAxIEp1bmUgMjAyMCAwOjAwID9cbiAqIC8vIE5vdGU6IGJlY2F1c2UgbG9jYWwgdGltZSBpcyB1c2VkLCB0aGVcbiAqIC8vIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSA5MiBkYXlzLCBldmVuIGluXG4gKiAvLyB0aW1lIHpvbmVzIHdoZXJlIERTVCBzdGFydHMgYW5kIHRoZVxuICogLy8gcGVyaW9kIGhhcyBvbmx5IDkyKjI0LTEgaG91cnMuXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDIwLCA1LCAxKSxcbiAqICAgbmV3IERhdGUoMjAyMCwgMiwgMSlcbiAqIClcbiAqIC8vPT4gOTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3Qgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkpO1xuXG4gIF9kYXRlTGVmdC5zZXREYXRlKF9kYXRlTGVmdC5nZXREYXRlKCkgLSBzaWduICogZGlmZmVyZW5jZSk7XG5cbiAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICBjb25zdCBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKFxuICAgIGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpID09PSAtc2lnbixcbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7XG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn1cblxuLy8gTGlrZSBgY29tcGFyZUFzY2AgYnV0IHVzZXMgbG9jYWwgdGltZSBub3QgVVRDLCB3aGljaCBpcyBuZWVkZWRcbi8vIGZvciBhY2N1cmF0ZSBlcXVhbGl0eSBjb21wYXJpc29ucyBvZiBVVEMgdGltZXN0YW1wcyB0aGF0IGVuZCB1cFxuLy8gaGF2aW5nIHRoZSBzYW1lIHJlcHJlc2VudGF0aW9uIGluIGxvY2FsIHRpbWUsIGUuZy4gb25lIGhvdXIgYmVmb3JlXG4vLyBEU1QgZW5kcyB2cy4gdGhlIGluc3RhbnQgdGhhdCBEU1QgZW5kcy5cbmZ1bmN0aW9uIGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRpZmYgPVxuICAgIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKSB8fFxuICAgIGRhdGVMZWZ0LmdldERhdGUoKSAtIGRhdGVSaWdodC5nZXREYXRlKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaW51dGVzKCkgLSBkYXRlUmlnaHQuZ2V0TWludXRlcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0U2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldFNlY29uZHMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluRGF5cztcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIGFzIGdldEludGVybmFsRGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERlZmF1bHRPcHRpb25zXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCBkZWZhdWx0IG9wdGlvbnMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZWZhdWx0cyBmb3JcbiAqIGBvcHRpb25zLmxvY2FsZWAsIGBvcHRpb25zLndlZWtTdGFydHNPbmAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWBcbiAqIGFyZ3VtZW50cyBmb3IgYWxsIGZ1bmN0aW9ucy5cbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGVzZSB3aXRoIFtzZXREZWZhdWx0T3B0aW9uc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXREZWZhdWx0T3B0aW9ucykuXG4gKlxuICogQHJldHVybnMgVGhlIGRlZmF1bHQgb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZXN1bHQgPSBnZXREZWZhdWx0T3B0aW9ucygpXG4gKiAvLz0+IHt9XG4gKlxuICogQGV4YW1wbGVcbiAqIHNldERlZmF1bHRPcHRpb25zKHsgd2Vla1N0YXJzT246IDEsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogY29uc3QgcmVzdWx0ID0gZ2V0RGVmYXVsdE9wdGlvbnMoKVxuICogLy89PiB7IHdlZWtTdGFyc09uOiAxLCBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRJbnRlcm5hbERlZmF1bHRPcHRpb25zKCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERlZmF1bHRPcHRpb25zO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT0RheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggaXMgNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXkgZXRjLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIElTTyB3ZWVrIGlzIDI2IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09EYXkobmV3IERhdGUoMjAxMiwgMSwgMjYpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgbGV0IGRheSA9IF9kYXRlLmdldERheSgpO1xuXG4gIGlmIChkYXkgPT09IDApIHtcbiAgICBkYXkgPSA3O1xuICB9XG5cbiAgcmV0dXJuIGRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09EYXk7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPVxuICAgIHN0YXJ0T2ZJU09XZWVrKF9kYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtXG4gICAgc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9nZXREZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGVuVVMgYXMgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL2xvY2FsZS9lbi1VUy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL3BhcnNlL19saWIvcGFyc2Vycy5tanNcIjtcbmltcG9ydCB7IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyIH0gZnJvbSBcIi4vcGFyc2UvX2xpYi9TZXR0ZXIubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGxvbmdGb3JtYXR0ZXJzLCBwYXJzZXJzIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5cbmNvbnN0IG5vdFdoaXRlc3BhY2VSZWdFeHAgPSAvXFxTLztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbc2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXIpKS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVTdHIgLSBUaGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0gZm9ybWF0U3RyIC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlXG4gKlxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkYXRlU3RyLCBmb3JtYXRTdHIsIHJlZmVyZW5jZURhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGlmIChmb3JtYXRTdHIgPT09IFwiXCIpIHtcbiAgICBpZiAoZGF0ZVN0ciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIGNvbnN0IHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuXG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuXG4gIGNvbnN0IHVzZWRUb2tlbnMgPSBbXTtcblxuICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pXG4gICAgKSB7XG4gICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIGRhdGVTdHIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbilcbiAgICApIHtcbiAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICBjb25zdCB7IGluY29tcGF0aWJsZVRva2VucyB9ID0gcGFyc2VyO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICBjb25zdCBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChcbiAgICAgICAgICAodXNlZFRva2VuKSA9PlxuICAgICAgICAgICAgaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHxcbiAgICAgICAgICAgIHVzZWRUb2tlbi50b2tlbiA9PT0gZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgYFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBcXGAke2luY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbn1cXGAgYW5kIFxcYCR7dG9rZW59XFxgIGF0IHRoZSBzYW1lIHRpbWVgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gXCIqXCIgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIGBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gXFxgJHt0b2tlbn1cXGAgYW5kIGFueSBvdGhlciB0b2tlbiBhdCB0aGUgc2FtZSB0aW1lYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdXNlZFRva2Vucy5wdXNoKHsgdG9rZW46IGZpcnN0Q2hhcmFjdGVyLCBmdWxsVG9rZW46IHRva2VuIH0pO1xuXG4gICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlci5ydW4oXG4gICAgICAgIGRhdGVTdHIsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBsb2NhbGUubWF0Y2gsXG4gICAgICAgIHN1YkZuT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cblxuICAgICAgc2V0dGVycy5wdXNoKHBhcnNlUmVzdWx0LnNldHRlcik7XG5cbiAgICAgIGRhdGVTdHIgPSBwYXJzZVJlc3VsdC5yZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHRva2VuID09PSBcIicnXCIpIHtcbiAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRva2VuID0gY2xlYW5Fc2NhcGVkU3RyaW5nKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG4gICAgICBpZiAoZGF0ZVN0ci5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgcmVtYWluaW5nIGlucHV0IGNvbnRhaW5zIHNvbWV0aGluZyBvdGhlciB0aGFuIHdoaXRlc3BhY2VcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cikpIHtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBOYU4pO1xuICB9XG5cbiAgY29uc3QgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVyc1xuICAgIC5tYXAoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5KVxuICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAuZmlsdGVyKChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXgpXG4gICAgLm1hcCgocHJpb3JpdHkpID0+XG4gICAgICBzZXR0ZXJzXG4gICAgICAgIC5maWx0ZXIoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5KSxcbiAgICApXG4gICAgLm1hcCgoc2V0dGVyQXJyYXkpID0+IHNldHRlckFycmF5WzBdKTtcblxuICBsZXQgZGF0ZSA9IHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgfVxuXG4gIGNvbnN0IGZsYWdzID0ge307XG4gIGZvciAoY29uc3Qgc2V0dGVyIG9mIHVuaXF1ZVByaW9yaXR5U2V0dGVycykge1xuICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKGRhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKHJlZmVyZW5jZURhdGUsIE5hTik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc2V0dGVyLnNldChkYXRlLCBmbGFncywgc3ViRm5PcHRpb25zKTtcbiAgICAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIGRhdGUgPSByZXN1bHRbMF07XG4gICAgICBPYmplY3QuYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pO1xuICAgICAgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBkYXRlKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7XG4iLCJpbXBvcnQgeyBWYWx1ZVNldHRlciB9IGZyb20gXCIuL1NldHRlci5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIHJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXR0ZXI6IG5ldyBWYWx1ZVNldHRlcihcbiAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICB0aGlzLnZhbGlkYXRlLFxuICAgICAgICB0aGlzLnNldCxcbiAgICAgICAgdGhpcy5wcmlvcml0eSxcbiAgICAgICAgdGhpcy5zdWJQcmlvcml0eSxcbiAgICAgICksXG4gICAgICByZXN0OiByZXN1bHQucmVzdCxcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGUoX3V0Y0RhdGUsIF92YWx1ZSwgX29wdGlvbnMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHJhbnNwb3NlIH0gZnJvbSBcIi4uLy4uL3RyYW5zcG9zZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuY29uc3QgVElNRVpPTkVfVU5JVF9QUklPUklUWSA9IDEwO1xuXG5leHBvcnQgY2xhc3MgU2V0dGVyIHtcbiAgc3ViUHJpb3JpdHkgPSAwO1xuXG4gIHZhbGlkYXRlKF91dGNEYXRlLCBfb3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNldHRlciBleHRlbmRzIFNldHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlLFxuXG4gICAgdmFsaWRhdGVWYWx1ZSxcblxuICAgIHNldFZhbHVlLFxuXG4gICAgcHJpb3JpdHksXG4gICAgc3ViUHJpb3JpdHksXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSA9IHZhbGlkYXRlVmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIHRoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZShkYXRlLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKGRhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgZXh0ZW5kcyBTZXR0ZXIge1xuICBwcmlvcml0eSA9IFRJTUVaT05FX1VOSVRfUFJJT1JJVFk7XG4gIHN1YlByaW9yaXR5ID0gLTE7XG4gIHNldChkYXRlLCBmbGFncykge1xuICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkgcmV0dXJuIGRhdGU7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgdHJhbnNwb3NlKGRhdGUsIERhdGUpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG51bWVyaWNQYXR0ZXJucyA9IHtcbiAgbW9udGg6IC9eKDFbMC0yXXwwP1xcZCkvLCAvLyAwIHRvIDEyXG4gIGRhdGU6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLywgLy8gMCB0byAzMVxuICBkYXlPZlllYXI6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLywgLy8gMCB0byAzNjZcbiAgd2VlazogL14oNVswLTNdfFswLTRdP1xcZCkvLCAvLyAwIHRvIDUzXG4gIGhvdXIyM2g6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLywgLy8gMCB0byAyM1xuICBob3VyMjRoOiAvXigyWzAtNF18WzAtMV0/XFxkKS8sIC8vIDAgdG8gMjRcbiAgaG91cjExaDogL14oMVswLTFdfDA/XFxkKS8sIC8vIDAgdG8gMTFcbiAgaG91cjEyaDogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgbWludXRlOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcbiAgc2Vjb25kOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcblxuICBzaW5nbGVEaWdpdDogL15cXGQvLCAvLyAwIHRvIDlcbiAgdHdvRGlnaXRzOiAvXlxcZHsxLDJ9LywgLy8gMCB0byA5OVxuICB0aHJlZURpZ2l0czogL15cXGR7MSwzfS8sIC8vIDAgdG8gOTk5XG4gIGZvdXJEaWdpdHM6IC9eXFxkezEsNH0vLCAvLyAwIHRvIDk5OTlcblxuICBhbnlEaWdpdHNTaWduZWQ6IC9eLT9cXGQrLyxcbiAgc2luZ2xlRGlnaXRTaWduZWQ6IC9eLT9cXGQvLCAvLyAwIHRvIDksIC0wIHRvIC05XG4gIHR3b0RpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDJ9LywgLy8gMCB0byA5OSwgLTAgdG8gLTk5XG4gIHRocmVlRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsM30vLCAvLyAwIHRvIDk5OSwgLTAgdG8gLTk5OVxuICBmb3VyRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsNH0vLCAvLyAwIHRvIDk5OTksIC0wIHRvIC05OTk5XG59O1xuXG5leHBvcnQgY29uc3QgdGltZXpvbmVQYXR0ZXJucyA9IHtcbiAgYmFzaWNPcHRpb25hbE1pbnV0ZXM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KT98Wi8sXG4gIGJhc2ljOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSl8Wi8sXG4gIGJhc2ljT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSkoKFxcZHsyfSkpP3xaLyxcbiAgZXh0ZW5kZWQ6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSl8Wi8sXG4gIGV4dGVuZGVkT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pKDooXFxkezJ9KSk/fFovLFxufTtcbiIsImltcG9ydCB7IEVyYVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRXJhUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09XZWVrWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBFeHRlbmRlZFllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IFF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1F1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNb250aFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTW9udGhQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTG9jYWxXZWVrUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5tanNcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RhdGVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXlPZlllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgTG9jYWxEYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09EYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT0RheVBhcnNlci5tanNcIjtcbmltcG9ydCB7IEFNUE1QYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBBTVBNTWlkbmlnaHRQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1NaWRuaWdodFBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBlcmlvZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjF0bzEyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBIb3VyMHRvMjNQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0hvdXIwdG8yM1BhcnNlci5tanNcIjtcbmltcG9ydCB7IEhvdXIwVG8xMVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjFUbzI0UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMVRvMjRQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNaW51dGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL01pbnV0ZVBhcnNlci5tanNcIjtcbmltcG9ydCB7IFNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU2Vjb25kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgRnJhY3Rpb25PZlNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanNcIjtcbmltcG9ydCB7IElTT1RpbWV6b25lV2l0aFpQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPVGltZXpvbmVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBQICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6KiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYHBhcnNlYCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSXQncyBvaywgd2Ugd2FudCBhbnkgaGVyZVxuZXhwb3J0IGNvbnN0IHBhcnNlcnMgPSB7XG4gIEc6IG5ldyBFcmFQYXJzZXIoKSxcbiAgeTogbmV3IFllYXJQYXJzZXIoKSxcbiAgWTogbmV3IExvY2FsV2Vla1llYXJQYXJzZXIoKSxcbiAgUjogbmV3IElTT1dlZWtZZWFyUGFyc2VyKCksXG4gIHU6IG5ldyBFeHRlbmRlZFllYXJQYXJzZXIoKSxcbiAgUTogbmV3IFF1YXJ0ZXJQYXJzZXIoKSxcbiAgcTogbmV3IFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKCksXG4gIE06IG5ldyBNb250aFBhcnNlcigpLFxuICBMOiBuZXcgU3RhbmRBbG9uZU1vbnRoUGFyc2VyKCksXG4gIHc6IG5ldyBMb2NhbFdlZWtQYXJzZXIoKSxcbiAgSTogbmV3IElTT1dlZWtQYXJzZXIoKSxcbiAgZDogbmV3IERhdGVQYXJzZXIoKSxcbiAgRDogbmV3IERheU9mWWVhclBhcnNlcigpLFxuICBFOiBuZXcgRGF5UGFyc2VyKCksXG4gIGU6IG5ldyBMb2NhbERheVBhcnNlcigpLFxuICBjOiBuZXcgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKCksXG4gIGk6IG5ldyBJU09EYXlQYXJzZXIoKSxcbiAgYTogbmV3IEFNUE1QYXJzZXIoKSxcbiAgYjogbmV3IEFNUE1NaWRuaWdodFBhcnNlcigpLFxuICBCOiBuZXcgRGF5UGVyaW9kUGFyc2VyKCksXG4gIGg6IG5ldyBIb3VyMXRvMTJQYXJzZXIoKSxcbiAgSDogbmV3IEhvdXIwdG8yM1BhcnNlcigpLFxuICBLOiBuZXcgSG91cjBUbzExUGFyc2VyKCksXG4gIGs6IG5ldyBIb3VyMVRvMjRQYXJzZXIoKSxcbiAgbTogbmV3IE1pbnV0ZVBhcnNlcigpLFxuICBzOiBuZXcgU2Vjb25kUGFyc2VyKCksXG4gIFM6IG5ldyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKCksXG4gIFg6IG5ldyBJU09UaW1lem9uZVdpdGhaUGFyc2VyKCksXG4gIHg6IG5ldyBJU09UaW1lem9uZVBhcnNlcigpLFxuICB0OiBuZXcgVGltZXN0YW1wU2Vjb25kc1BhcnNlcigpLFxuICBUOiBuZXcgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKCksXG59O1xuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgQU1QTU1pZG5pZ2h0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA4MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJCXCIsIFwiSFwiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEFNUE1QYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYlwiLCBcIkJcIiwgXCJIXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQge1xuICBpc0xlYXBZZWFySW5kZXgsXG4gIHBhcnNlTkRpZ2l0cyxcbiAgcGFyc2VOdW1lcmljUGF0dGVybixcbn0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5jb25zdCBEQVlTX0lOX01PTlRIID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuY29uc3QgREFZU19JTl9NT05USF9MRUFQX1lFQVIgPSBbXG4gIDMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEsXG5dO1xuXG4vLyBEYXkgb2YgdGhlIG1vbnRoXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG4gIHN1YlByaW9yaXR5ID0gMTtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZGF0ZSwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiZG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNMZWFwWWVhckluZGV4LFxuICBwYXJzZU5EaWdpdHMsXG4gIHBhcnNlTnVtZXJpY1BhdHRlcm4sXG59IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIERheU9mWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgc3VicHJpb3JpdHkgPSAxO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICBjYXNlIFwiRERcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmRheU9mWWVhciwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiRG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY2O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAzNjU7XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKDAsIHZhbHVlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRVwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgc2V0RGF5IH0gZnJvbSBcIi4uLy4uLy4uL3NldERheS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbi8vIERheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGRhdGUgPSBzZXREYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJEXCIsIFwiaVwiLCBcImVcIiwgXCJjXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbmV4cG9ydCBjbGFzcyBEYXlQZXJpb2RQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFcmFQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDE0MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIlJcIiwgXCJ1XCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT09IFwidVwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIkdcIiwgXCJ5XCIsIFwiWVwiLCBcIlJcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAzMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+XG4gICAgICBNYXRoLmZsb29yKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModmFsdWUpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwVG8xMVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIktcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIktvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiaFwiLCBcIkhcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwdG8yM1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyM2gsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIkhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjM7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJoXCIsIFwiS1wiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgSG91cjFUbzI0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA3MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjI0aCwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwia29cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAyNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgY29uc3QgaG91cnMgPSB2YWx1ZSA8PSAyNCA/IHZhbHVlICUgMjQgOiB2YWx1ZTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXJzLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJiXCIsIFwiaFwiLCBcIkhcIiwgXCJLXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIxdG8xMlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMmgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcImhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMTI7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2UgaWYgKCFpc1BNICYmIHZhbHVlID09PSAxMikge1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiSFwiLCBcIktcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBzZXRJU09EYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0SVNPRGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIElTTyBkYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIElTT0RheVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgY2FzZSBcImlpXCI6IC8vIDAyXG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZSA9IHNldElTT0RheShkYXRlLCB2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdGltZXpvbmVQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lem9uZVBhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIFRpbWV6b25lIChJU08tODYwMSlcbmV4cG9ydCBjbGFzcyBJU09UaW1lem9uZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ4eHhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJYXCJdO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5pbXBvcnQgeyB0aW1lem9uZVBhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gVGltZXpvbmUgKElTTy04NjAxLiArMDA6MDAgaXMgYCdaJ2ApXG5leHBvcnQgY2xhc3MgSVNPVGltZXpvbmVXaXRoWlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJYWFhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJ4XCJdO1xufVxuIiwiaW1wb3J0IHsgc2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIElTT1dlZWtQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEwMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiSVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMud2VlaywgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiSW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKHNldElTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBJU09XZWVrWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgaWYgKHRva2VuID09PSBcIlJcIikge1xuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0V2Vla09mWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gICAgZmlyc3RXZWVrT2ZZZWFyLnNldEZ1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICBmaXJzdFdlZWtPZlllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJHXCIsXG4gICAgXCJ5XCIsXG4gICAgXCJZXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJRXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBzZXREYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0RGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIGRheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgTG9jYWxEYXlQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCB3aG9sZVdlZWtEYXlzID0gTWF0aC5mbG9vcigodmFsdWUgLSAxKSAvIDcpICogNztcbiAgICAgIHJldHVybiAoKHZhbHVlICsgb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA2KSAlIDcpICsgd2hvbGVXZWVrRGF5cztcbiAgICB9O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gM1xuICAgICAgY2FzZSBcImVcIjpcbiAgICAgIGNhc2UgXCJlZVwiOiAvLyAwM1xuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gM3JkXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJkYXlcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBkYXRlID0gc2V0RGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwieVwiLFxuICAgIFwiUlwiLFxuICAgIFwidVwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRFwiLFxuICAgIFwiRVwiLFxuICAgIFwiaVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgc2V0V2VlayB9IGZyb20gXCIuLi8uLi8uLi9zZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG5leHBvcnQgY2xhc3MgTG9jYWxXZWVrUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMDA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLndlZWssIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIndvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNTM7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBzdGFydE9mV2VlayhzZXRXZWVrKGRhdGUsIHZhbHVlLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJ5XCIsXG4gICAgXCJSXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJxXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBub3JtYWxpemVUd29EaWdpdFllYXIsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuZXhwb3J0IGNsYXNzIExvY2FsV2Vla1llYXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEzMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHllYXIpID0+ICh7XG4gICAgICB5ZWFyLFxuICAgICAgaXNUd29EaWdpdFllYXI6IHRva2VuID09PSBcIllZXCIsXG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDQsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIGNhc2UgXCJZb1wiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiBcInllYXJcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaXNUd29EaWdpdFllYXIgfHwgdmFsdWUueWVhciA+IDA7XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcihcbiAgICAgICAgdmFsdWUueWVhcixcbiAgICAgICAgY3VycmVudFllYXIsXG4gICAgICApO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcihcbiAgICAgICAgbm9ybWFsaXplZFR3b0RpZ2l0WWVhcixcbiAgICAgICAgMCxcbiAgICAgICAgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgICApO1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjb25zdCB5ZWFyID1cbiAgICAgICEoXCJlcmFcIiBpbiBmbGFncykgfHwgZmxhZ3MuZXJhID09PSAxID8gdmFsdWUueWVhciA6IDEgLSB2YWx1ZS55ZWFyO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciwgMCwgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwieVwiLFxuICAgIFwiUlwiLFxuICAgIFwidVwiLFxuICAgIFwiUVwiLFxuICAgIFwicVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNaW51dGVQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDYwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5taW51dGUsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIm1vXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA1OTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgTW9udGhQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJxXCIsXG4gICAgXCJRXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG5cbiAgcHJpb3JpdHkgPSAxMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4gdmFsdWUgLSAxO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1vbnRoLCBkYXRlU3RyaW5nKSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cygyLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJtb250aFwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKHZhbHVlLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgUXVhcnRlclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTIwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICBjYXNlIFwiUVFcIjogLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKCh2YWx1ZSAtIDEpICogMywgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgU2Vjb25kUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA1MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2Vjb25kLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJzb1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0U2Vjb25kcyh2YWx1ZSwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IHNldERheSB9IGZyb20gXCIuLi8uLi8uLi9zZXREYXkubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbmV4cG9ydCBjbGFzcyBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgcmV0dXJuICgodmFsdWUgKyBvcHRpb25zLndlZWtTdGFydHNPbiArIDYpICUgNykgKyB3aG9sZVdlZWtEYXlzO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAzXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgY2FzZSBcImNjXCI6IC8vIDAzXG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAvLyAzcmRcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiBcImRheVwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGRhdGUgPSBzZXREYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJ5XCIsXG4gICAgXCJSXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJxXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJFXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFuZEFsb25lTW9udGhQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDExMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB2YWx1ZSAtIDE7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiBcIm1vbnRoXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0TW9udGgodmFsdWUsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJxXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEyMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgY2FzZSBcInFxXCI6IC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VBbnlEaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDIwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIHJldHVybiBbY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSksIHsgdGltZXN0YW1wSXNTZXQ6IHRydWUgfV07XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBcIipcIjtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDQwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIHJldHVybiBbY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSAqIDEwMDApLCB7IHRpbWVzdGFtcElzU2V0OiB0cnVlIH1dO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gXCIqXCI7XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG4vLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zXG4vLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4vLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4vLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4vLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4vLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4vLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4vLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5leHBvcnQgY2xhc3MgWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJZXCIsIFwiUlwiLCBcInVcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAoeWVhcikgPT4gKHtcbiAgICAgIHllYXIsXG4gICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09IFwieXlcIixcbiAgICB9KTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoNCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgY2FzZSBcInlvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwieWVhclwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pc1R3b0RpZ2l0WWVhciB8fCB2YWx1ZS55ZWFyID4gMDtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgdmFsdWUpIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcihcbiAgICAgICAgdmFsdWUueWVhcixcbiAgICAgICAgY3VycmVudFllYXIsXG4gICAgICApO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcihub3JtYWxpemVkVHdvRGlnaXRZZWFyLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCB5ZWFyID1cbiAgICAgICEoXCJlcmFcIiBpbiBmbGFncykgfHwgZmxhZ3MuZXJhID09PSAxID8gdmFsdWUueWVhciA6IDEgLSB2YWx1ZS55ZWFyO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgbWlsbGlzZWNvbmRzSW5Ib3VyLFxuICBtaWxsaXNlY29uZHNJbk1pbnV0ZSxcbiAgbWlsbGlzZWNvbmRzSW5TZWNvbmQsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZShwYXJzZUZuUmVzdWx0LCBtYXBGbikge1xuICBpZiAoIXBhcnNlRm5SZXN1bHQpIHtcbiAgICByZXR1cm4gcGFyc2VGblJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IG1hcEZuKHBhcnNlRm5SZXN1bHQudmFsdWUpLFxuICAgIHJlc3Q6IHBhcnNlRm5SZXN1bHQucmVzdCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtZXJpY1BhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IGRhdGVTdHJpbmcubWF0Y2gocGF0dGVybik7XG5cbiAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogcGFyc2VJbnQobWF0Y2hSZXN1bHRbMF0sIDEwKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWV6b25lUGF0dGVybihwYXR0ZXJuLCBkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBJbnB1dCBpcyAnWidcbiAgaWYgKG1hdGNoUmVzdWx0WzBdID09PSBcIlpcIikge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UoMSksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHNpZ24gPSBtYXRjaFJlc3VsdFsxXSA9PT0gXCIrXCIgPyAxIDogLTE7XG4gIGNvbnN0IGhvdXJzID0gbWF0Y2hSZXN1bHRbMl0gPyBwYXJzZUludChtYXRjaFJlc3VsdFsyXSwgMTApIDogMDtcbiAgY29uc3QgbWludXRlcyA9IG1hdGNoUmVzdWx0WzNdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKSA6IDA7XG4gIGNvbnN0IHNlY29uZHMgPSBtYXRjaFJlc3VsdFs1XSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzVdLCAxMCkgOiAwO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6XG4gICAgICBzaWduICpcbiAgICAgIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArXG4gICAgICAgIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArXG4gICAgICAgIHNlY29uZHMgKiBtaWxsaXNlY29uZHNJblNlY29uZCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZykge1xuICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuYW55RGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0cyhuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0cywgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnRocmVlRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0cywgZGF0ZVN0cmluZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoXCJeXFxcXGR7MSxcIiArIG4gKyBcIn1cIiksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHNTaWduZWQobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXRTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50d29EaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihuZXcgUmVnRXhwKFwiXi0/XFxcXGR7MSxcIiArIG4gKyBcIn1cIiksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlQZXJpb2RFbnVtVG9Ib3VycyhkYXlQZXJpb2QpIHtcbiAgc3dpdGNoIChkYXlQZXJpb2QpIHtcbiAgICBjYXNlIFwibW9ybmluZ1wiOlxuICAgICAgcmV0dXJuIDQ7XG4gICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgIHJldHVybiAxNztcbiAgICBjYXNlIFwicG1cIjpcbiAgICBjYXNlIFwibm9vblwiOlxuICAgIGNhc2UgXCJhZnRlcm5vb25cIjpcbiAgICAgIHJldHVybiAxMjtcbiAgICBjYXNlIFwiYW1cIjpcbiAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICBjYXNlIFwibmlnaHRcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih0d29EaWdpdFllYXIsIGN1cnJlbnRZZWFyKSB7XG4gIGNvbnN0IGlzQ29tbW9uRXJhID0gY3VycmVudFllYXIgPiAwO1xuICAvLyBBYnNvbHV0ZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgeWVhcjpcbiAgLy8gMSAtPiAxIEFDXG4gIC8vIDAgLT4gMSBCQ1xuICAvLyAtMSAtPiAyIEJDXG4gIGNvbnN0IGFic0N1cnJlbnRZZWFyID0gaXNDb21tb25FcmEgPyBjdXJyZW50WWVhciA6IDEgLSBjdXJyZW50WWVhcjtcblxuICBsZXQgcmVzdWx0O1xuICBpZiAoYWJzQ3VycmVudFllYXIgPD0gNTApIHtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgfHwgMTAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJhbmdlRW5kID0gYWJzQ3VycmVudFllYXIgKyA1MDtcbiAgICBjb25zdCByYW5nZUVuZENlbnR1cnkgPSBNYXRoLmZsb29yKHJhbmdlRW5kIC8gMTAwKSAqIDEwMDtcbiAgICBjb25zdCBpc1ByZXZpb3VzQ2VudHVyeSA9IHR3b0RpZ2l0WWVhciA+PSByYW5nZUVuZCAlIDEwMDtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgKyByYW5nZUVuZENlbnR1cnkgLSAoaXNQcmV2aW91c0NlbnR1cnkgPyAxMDAgOiAwKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbW1vbkVyYSA/IHJlc3VsdCA6IDEgLSByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCk7XG59XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHNldERheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHNldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGRheSBvZiB0aGUgd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBkYXkgLSBUaGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBuZXcgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXkgb2YgdGhlIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB3ZWVrIGRheSB0byBTdW5kYXksIHdpdGggdGhlIGRlZmF1bHQgd2Vla1N0YXJ0c09uIG9mIFN1bmRheTpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldERheShuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMClcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB3ZWVrIGRheSB0byBTdW5kYXksIHdpdGggYSB3ZWVrU3RhcnRzT24gb2YgTW9uZGF5OlxuICogY29uc3QgcmVzdWx0ID0gc2V0RGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAwLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlLCBkYXksIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG5cbiAgY29uc3QgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgY29uc3QgZGF5SW5kZXggPSAocmVtYWluZGVyICsgNykgJSA3O1xuXG4gIGNvbnN0IGRlbHRhID0gNyAtIHdlZWtTdGFydHNPbjtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGF5IDwgMCB8fCBkYXkgPiA2XG4gICAgICA/IGRheSAtICgoY3VycmVudERheSArIGRlbHRhKSAlIDcpXG4gICAgICA6ICgoZGF5SW5kZXggKyBkZWx0YSkgJSA3KSAtICgoY3VycmVudERheSArIGRlbHRhKSAlIDcpO1xuICByZXR1cm4gYWRkRGF5cyhfZGF0ZSwgZGlmZik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc2V0RGF5O1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09EYXkgfSBmcm9tIFwiLi9nZXRJU09EYXkubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc2V0SVNPRGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKiBJU08gd2VlayBzdGFydHMgd2l0aCBNb25kYXkuXG4gKiA3IGlzIHRoZSBpbmRleCBvZiBTdW5kYXksIDEgaXMgdGhlIGluZGV4IG9mIE1vbmRheSBldGMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gZGF5IC0gVGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgb2YgdGhlIG5ldyBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCBTdW5kYXkgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldElTT0RheShuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNylcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09EYXkoZGF0ZSwgZGF5KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gZ2V0SVNPRGF5KF9kYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRheSAtIGN1cnJlbnREYXk7XG4gIHJldHVybiBhZGREYXlzKF9kYXRlLCBkaWZmKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXRJU09EYXk7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgSVNPIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUsIHNhdmluZyB0aGUgd2Vla2RheSBudW1iZXIuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHdlZWsgLSBUaGUgSVNPIHdlZWsgb2YgdGhlIG5ldyBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIElTTyB3ZWVrIHNldFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgdGhlIDUzcmQgSVNPIHdlZWsgdG8gNyBBdWd1c3QgMjAwNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldElTT1dlZWsobmV3IERhdGUoMjAwNCwgNywgNyksIDUzKVxuICogLy89PiBTYXQgSmFuIDAxIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElTT1dlZWsoZGF0ZSwgd2Vlaykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGdldElTT1dlZWsoX2RhdGUpIC0gd2VlaztcbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBsb2NhbCB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBsb2NhbCB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLCBzYXZpbmcgdGhlIHdlZWtkYXkgbnVtYmVyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHdlZWsgLSBUaGUgd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBsb2NhbCB3ZWVrIHNldFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgdGhlIDFzdCB3ZWVrIHRvIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zOlxuICogY29uc3QgcmVzdWx0ID0gc2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwgMSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMXN0IHdlZWsgdG8gMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5OlxuICogY29uc3QgcmVzdWx0ID0gc2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwgMSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gU3VuIEphbiA0IDIwMDQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFdlZWsoZGF0ZSwgd2Vlaywgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGdldFdlZWsoX2RhdGUsIG9wdGlvbnMpIC0gd2VlaztcbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXRXZWVrO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgdHJhbnNwb3NlXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIHRyYW5zcG9zZXMgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLiBJdCBoZWxwcyB5b3VcbiAqIHRvIHRyYW5zcG9zZSB0aGUgZGF0ZSBpbiB0aGUgc3lzdGVtIHRpbWUgem9uZSB0byBzYXkgYFVUQ0RhdGVgIG9yIGFueSBvdGhlclxuICogZGF0ZSBleHRlbnNpb24uXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlSW5wdXRUeXBlIC0gVGhlIGlucHV0IGBEYXRlYCB0eXBlIGRlcml2ZWQgZnJvbSB0aGUgcGFzc2VkIGFyZ3VtZW50LlxuICogQHR5cGVQYXJhbSBEYXRlT3V0cHV0VHlwZSAtIFRoZSBvdXRwdXQgYERhdGVgIHR5cGUgZGVyaXZlZCBmcm9tIHRoZSBwYXNzZWQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIGZyb21EYXRlIC0gVGhlIGRhdGUgdG8gdXNlIHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0gY29uc3RydWN0b3IgLSBUaGUgZGF0ZSBjb25zdHJ1Y3RvciB0byB1c2VcbiAqXG4gKiBAcmV0dXJucyBEYXRlIHRyYW5zcG9zZWQgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSBKdWx5IDEwLCAyMDIyIDAwOjAwIGluIGxvY2FsZSB0aW1lIHpvbmVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxMClcbiAqIC8vPT4gJ1N1biBKdWwgMTAgMjAyMiAwMDowMDowMCBHTVQrMDgwMCAoU2luZ2Fwb3JlIFN0YW5kYXJkIFRpbWUpJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gSnVseSAxMCwgMjAyMiAwMDowMCBpbiBVVENcbiAqIHRyYW5zcG9zZShkYXRlLCBVVENEYXRlKVxuICogLy89PiAnU3VuIEp1bCAxMCAyMDIyIDAwOjAwOjAwIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSknXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UoZnJvbURhdGUsIGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGRhdGUgPVxuICAgIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgPyBjb25zdHJ1Y3RGcm9tKGNvbnN0cnVjdG9yLCAwKVxuICAgICAgOiBuZXcgY29uc3RydWN0b3IoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgZnJvbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBmcm9tRGF0ZS5nZXRNb250aCgpLFxuICAgIGZyb21EYXRlLmdldERhdGUoKSxcbiAgKTtcbiAgZGF0ZS5zZXRIb3VycyhcbiAgICBmcm9tRGF0ZS5nZXRIb3VycygpLFxuICAgIGZyb21EYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBmcm9tRGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgZnJvbURhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRyYW5zcG9zZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtDcmVhdGVEb21FbG1zfSBmcm9tICcuL2NyZWF0ZV9kb21fZWxtcyc7XG5pbXBvcnQge0Rpc3BsYXlGdW5jdGlvbnN9IGZyb20gJy4vZGlzcGxheV9mdW5jdGlvbnMnO1xuaW1wb3J0IHtpc1RvZGF5fSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IERpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy8gVmFyaWFibGVzIGFuZCBET00gRWxlbWVudHNcbiAgY29uc3QgaG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1sYWJlbCB+IGRpdicpO1xuICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbicpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG4gIGNvbnN0IGhvbWVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUtaXRlbScpKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbiAgbGV0IHByZXZUYWI7XG4gIGxldCBjdXJyVGFiID0gaG9tZUl0ZW07XG4gIGxldCBwcmV2VG9kb0VsbTtcbiAgbGV0IGN1cnJUb2RvRWxtO1xuICBsZXQgY3VyclByb2plY3Q7XG4gIGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG4gIG1haW5Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWFpbi1jb250ZW50LWNsaWNrZWQnKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgfSk7XG5cbiAgLy8gSGVscGVyIEZ1bmN0aW9ucyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0ID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFwcGVuZFRvZG8odG9kbyk7XG4gIH1cblxuICBjb25zdCBhZGRUb2RvRWxtVG9Qcm9qZWN0ID0gKHRvZG9FbG0sIHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFwcGVuZFRvZG9FbG0odG9kb0VsbSk7XG4gIH1cblxuICAgIC8vVE9ETzogZml4IHNvIHRoYXQgZmlsdGVyZWQgaXRlbXMgbGlzdCBtYXRjaGVzIGluZGVjaXNcbiAgICAvLyBQZXJoYXBzIGFkZCBpbmRpdmlkdWFsIGRhdGEgZWxlbWVudHMgZm9yIHRhc2tzLCBpbiA3IHdlZWtzIGV0Yy4uLlxuICAgIC8vIE5lZWQgdG8gd3JpdGUgYSBnZXRQcm9qZWN0RnJvbVRvZG8gYnRuLi4uXG4gIGNvbnN0IGdldFRvZG9Gcm9tVG9kb0VsbSA9IHRvZG9FbG0gPT4ge1xuICAgIGlmIChjdXJyVGFiLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1pdGVtJykpIHtcbiAgICAgIHJldHVybiBjdXJyUHJvamVjdC50b2RvTGlzdFt0b2RvRWxtLmRhdGFzZXQucGxhY2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gY3VyclRhYi50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRhYlR5cGUgPSBkZXRlcm1pbmVUYWJUeXBlKHRhYk5hbWUpO1xuICAgICAgY29uc3QgZmlsdGVyZWRFbG1MaXN0ID0gZ2V0RmlsdGVyZWRFbG1MaXN0KHRhYlR5cGUsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0UHJvakZyb21Qcm9qRWxtID0gcHJvakVsbSA9PiB7XG4gICAgcmV0dXJuIGFsbFByb2plY3RzW3Byb2pFbG0uZGF0YXNldC5wbGFjZV07XG4gIH1cblxuICBjb25zdCB1cGRhdGVDdXJyVGFiID0gbmV3VGFiID0+IHtcbiAgICBpZiAobmV3VGFiICE9PSBjdXJyVGFiKSB7XG4gICAgICBwcmV2VGFiID0gY3VyclRhYjtcbiAgICAgIGN1cnJUYWIgPSBuZXdUYWI7XG4gICAgICBwcmV2VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICBjdXJyVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBkYXRlQ3VyclRvZG8gPSBuZXdUb2RvRWxtID0+IHtcbiAgICBpZihuZXdUb2RvRWxtICE9PSBjdXJyVG9kb0VsbSkge1xuICAgICAgaWYoY3VyclByb2plY3QudG9kb0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGN1cnJUb2RvRWxtID0gbmV3VG9kb0VsbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZUb2RvRWxtID0gY3VyclRvZG9FbG07XG4gICAgICAgIGN1cnJUb2RvRWxtID0gbmV3VG9kb0VsbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVDdXJyUHJvamVjdCA9IG5ld1Byb2ogPT4ge1xuICAgIGN1cnJQcm9qZWN0ID0gbmV3UHJvajtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVBsYWNlcyA9IChuLCBlbG1BcnIpID0+IHtcbiAgICBlbG1BcnIuZm9yRWFjaCgoZWxtLCBpKSA9PiB7XG4gICAgICBpZihpID4gbikge1xuICAgICAgICBlbG0uZGF0YXNldC5wbGFjZSA9IGVsbS5kYXRhc2V0LnBsYWNlIC0gMTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaXNDaGlsZFByZXNlbnQgPSAoY2hpbGRDbGFzcywgcGFyZW50KSA9PiB7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKGNoaWxkQ2xhc3MpICE9PSBudWxsO1xuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXIgRnVuY3Rpb25zIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4gIGNvbnN0IGlzQ29tcGxldGVCdG5FTCA9IGlzQ29tcGxldGVCdG4gPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpc0NvbXBsZXRlQnRuIGlzIGNsaWNrZWQnKTtcbiAgICBsZXQgdG9kb0VsbSA9IGlzQ29tcGxldGVCdG4ucGFyZW50Tm9kZTtcbiAgICBsZXQgdG9kbyA9IGdldFRvZG9Gcm9tVG9kb0VsbSh0b2RvRWxtKTtcbiAgICB0b2RvLmlzQ29tcGxldGUgPSAhdG9kby5pc0NvbXBsZXRlO1xuICAgIGlmKHRvZG9FbG0uZGF0YXNldC5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICB0b2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1jb21wbGV0ZScsICdmYWxzZScpO1xuICAgICAgY29uc3QgY2hlY2tCdG4gPSB0b2RvRWxtLnF1ZXJ5U2VsZWN0b3IoJy5pcy1jb21wbGV0ZS1sYWJlbCcpO1xuICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9FbG0uc2V0QXR0cmlidXRlKCdkYXRhLWNvbXBsZXRlJywgJ3RydWUnKTtcbiAgICAgIGNvbnN0IGNoZWNrQnRuID0gdG9kb0VsbS5xdWVyeVNlbGVjdG9yKCcuaXMtY29tcGxldGUtbGFiZWwnKTtcbiAgICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY2hlY2tlZCcpO1xuICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5QnRuRUwgPSBwcm9yaXR5QnRuID0+IHtcbiAgICBjb25zb2xlLmxvZygncHJpb3JpdHlCdG4gY2xpY2tlZCcpO1xuICAgIGxldCB0b2RvRWxtID0gcHJvcml0eUJ0bi5wYXJlbnROb2RlO1xuICAgIGxldCB0b2RvID0gZ2V0VG9kb0Zyb21Ub2RvRWxtKHRvZG9FbG0pO1xuICAgIHRvZG8ucHJpb3JpdHkgPSAhdG9kby5wcmlvcml0eTtcbiAgICBpZih0b2RvRWxtLmRhdGFzZXQucHJpb3JpdHkgPT09ICd0cnVlJykge1xuICAgICAgdG9kb0VsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCAnZmFsc2UnKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QnRuID0gdG9kb0VsbS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnRuLWNvbnRhaW5lcicpO1xuICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0VsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknLCAndHJ1ZScpO1xuICAgICAgY29uc3QgcHJpb3JpdHlCdG4gPSB0b2RvRWxtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idG4tY29udGFpbmVyJyk7XG4gICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvbXBsZXRlJyk7XG4gICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEVkaXRPcHRpb25zRUwgPSAoZSwgZWRpdEJ0biwgZWRpdFNlbGVjdEVMLCBkZWxldGVTZWxlY3RFTCkgPT4ge1xuICAgIGUuZWRpdFNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGVkaXRCdG4ucmVtb3ZlQ2hpbGQoZS5lZGl0T3B0aW9uc0NvbnRhaW5lcik7XG4gICAgICBjb25zb2xlLmxvZygnZWRpdFNlbGVjdGlvbiBjbGlja2VkJyk7XG4gICAgfSk7XG4gICAgZS5kZWxldGVTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBkZWxldGVTZWxlY3RFTChlZGl0QnRuLnBhcmVudE5vZGUpO1xuICAgICAgZWRpdEJ0bi5yZW1vdmVDaGlsZChlLmVkaXRPcHRpb25zQ29udGFpbmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVTZWxlY3Rpb24gY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGUuY2FuY2VsU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZWRpdEJ0bi5yZW1vdmVDaGlsZChlLmVkaXRPcHRpb25zQ29udGFpbmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWxFZGl0VG9kb0J0biBjbGlja2VkJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb25maXJtRWRpdFRvZG9CdG5FTCA9IGVkaXRCdG4gPT4ge1xuXG4gIH1cblxuICBjb25zdCBkZWxldGVUb2RvQnRuRUwgPSB0b2RvRWxtID0+IHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSB0b2RvRWxtLmRhdGFzZXQucGxhY2U7XG4gICAgY29uc3QgdG9kb0VsbUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpKTtcbiAgICB1cGRhdGVQbGFjZXModG9kb0luZGV4LCB0b2RvRWxtTGlzdCk7XG4gICAgY3VyclByb2plY3QudG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgY3VyclByb2plY3QudG9kb0VsbUxpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgRGlzcGxheUZ1bmN0aW9ucy5kZWxldGVUb2RvKHRvZG9FbG0pO1xuICB9XG5cbiAgY29uc3QgZWRpdFRvZG9CdG5FTCA9IGVkaXRCdG4gPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlZGl0VG9kb0J0biBjbGlja2VkJyk7XG4gICAgY29uc3QgZSA9IENyZWF0ZURvbUVsbXMuY3JlYXRlRWRpdE9wdGlvbnMoJ3RvZG8nKTtcbiAgICBzZXRFZGl0T3B0aW9uc0VMKGUsIGVkaXRCdG4sIGNvbmZpcm1FZGl0VG9kb0J0bkVMLCBkZWxldGVUb2RvQnRuRUwpO1xuICAgIGUuZWRpdE9wdGlvbnNDb250YWluZXIuYXBwZW5kKGUuZWRpdFNlbGVjdGlvbiwgZS5kZWxldGVTZWxlY3Rpb24sIGUuY2FuY2VsU2VsZWN0aW9uKTtcbiAgICBpZiAoIShpc0NoaWxkUHJlc2VudCgnLmVkaXQtb3B0aW9ucy1jb250YWluZXInLCBlZGl0QnRuKSkpIHtcbiAgICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZS5lZGl0T3B0aW9uc0NvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkVG9kb0J0bkVMID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRmllbGRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtZmllbGQnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLWZpZWxkJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWZpZWxkJykudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlRmllbGRWYWwsIGRlc2NyaXB0aW9uRmllbGRWYWwsIGRhdGVWYWwsIGZhbHNlLCBmYWxzZSk7XG4gICAgY29uc3QgbmV3VG9kb0VsbSA9IENyZWF0ZURvbUVsbXMuY3JlYXRlVG9kbyhuZXdUb2RvKTtcbiAgICBuZXdUb2RvRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZScsIFN0cmluZyhjdXJyUHJvamVjdC50b2RvTGlzdC5sZW5ndGgpKTtcbiAgICBjb25zdCBpc0NvbXBsZXRlQnRuID0gbmV3VG9kb0VsbS5xdWVyeVNlbGVjdG9yKCcuaXMtY29tcGxldGUtbGFiZWwnKTtcbiAgICBjb25zdCBwcm9yaXR5QnRuID0gbmV3VG9kb0VsbS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnRuLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBuZXdUb2RvRWxtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgIGlzQ29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaXNDb21wbGV0ZUJ0bkVMKGlzQ29tcGxldGVCdG4pO1xuICAgIH0pO1xuICAgIHByb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJpb3JpdHlCdG5FTChwcm9yaXR5QnRuKTtcbiAgICB9KTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVkaXRUb2RvQnRuRUwoZWRpdEJ0bik7XG4gICAgfSk7XG4gICAgYWRkVG9kb1RvUHJvamVjdChuZXdUb2RvLCBjdXJyUHJvamVjdCk7XG4gICAgYWRkVG9kb0VsbVRvUHJvamVjdChuZXdUb2RvRWxtLCBjdXJyUHJvamVjdCk7XG4gICAgRGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5VG9kbyhuZXdUb2RvRWxtKTtcbiAgICBuZXdUb2RvRWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVG9kbyhuZXdUb2RvRWxtKSk7XG4gIH1cblxuICBjb25zdCBhZGRUYXNrQnRuRUwgPSAoKSA9PiB7XG4gICAgaWYoIShpc0NoaWxkUHJlc2VudCgnLnRvZG8tZm9ybS1jb250YWluZXInLCB0YXNrQ29udGFpbmVyKSkpIHtcbiAgICAgIERpc3BsYXlGdW5jdGlvbnMuZGlzcGxheUFkZFRvZG9Gb3JtKCk7XG4gICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybS1hZGQtYnRuJyk7XG4gICAgICBjb25zdCBjYW5jZWxUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybS1jYW5jZWwtYnRuJyk7XG4gICAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRUb2RvQnRuRUwoKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvRm9ybSk7XG4gICAgICB9KTtcbiAgICAgIGNhbmNlbFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkQWRkVGFza0J0biA9ICgpID0+IHtcbiAgICBpZighKGlzQ2hpbGRQcmVzZW50KCcuYWRkLXRhc2stYnRuJywgdGFza0NvbnRhaW5lcikpKSB7XG4gICAgICBEaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlBZGRUYXNrQnRuKCk7XG4gICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkVGFza0J0bkVMKCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbmZpcm1FZGl0UHJvakJ0bkVMID0gcHJvakVsbSA9PiB7XG4gICAgY29uc3QgcHJvakluZGV4ID0gcHJvakVsbS5kYXRhc2V0LnBsYWNlO1xuICAgIGNvbnN0IHByb2ogPSBnZXRQcm9qRnJvbVByb2pFbG0ocHJvakVsbSk7XG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVFZGl0VG9kb0Zvcm0ocHJvaik7XG5cbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVByb2pCdG5FTCA9IHByb2pFbG0gPT4ge1xuICAgIGNvbnN0IHByb2pJbmRleCA9IHByb2pFbG0uZGF0YXNldC5wbGFjZTtcbiAgICBjb25zdCBwcm9qRWxtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpKTtcbiAgICB1cGRhdGVQbGFjZXMocHJvakluZGV4LCBwcm9qRWxtTGlzdCk7XG4gICAgYWxsUHJvamVjdHMuc3BsaWNlKHByb2pJbmRleCwgMSk7XG4gICAgRGlzcGxheUZ1bmN0aW9ucy5kZWxldGVQcm9qZWN0RnJvbVNpZGViYXIocHJvakVsbSk7XG4gICAgc3dpdGNoSG9tZVRhYihob21lSXRlbSk7XG4gIH1cblxuICBjb25zdCBlZGl0UHJvamVjdEJ0bkVMID0gZWRpdEJ0biA9PiB7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtb3B0aW9ucy1jb250YWluZXInKSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coZWRpdEJ0bik7XG4gICAgICBjb25zdCBlID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVFZGl0T3B0aW9ucygncHJvaicpO1xuICAgICAgc2V0RWRpdE9wdGlvbnNFTChlLCBlZGl0QnRuLCBjb25maXJtRWRpdFByb2pCdG5FTCwgZGVsZXRlUHJvakJ0bkVMKTtcbiAgICAgIGUuZWRpdE9wdGlvbnNDb250YWluZXIuYXBwZW5kKGUuZWRpdFNlbGVjdGlvbiwgZS5kZWxldGVTZWxlY3Rpb24sIGUuY2FuY2VsU2VsZWN0aW9uKTtcbiAgICAgIGlmICghKGlzQ2hpbGRQcmVzZW50KCcuZWRpdC1vcHRpb25zLWNvbnRhaW5lcicsIGVkaXRCdG4pKSkge1xuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGUuZWRpdE9wdGlvbnNDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3RCdG5FTCA9ICgpID0+IHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWZpZWxkJyk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlRmllbGQudmFsdWUsIFtdLCBbXSk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0RWxtID0gQ3JlYXRlRG9tRWxtcy5jcmVhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnQocHJvamVjdFRpdGxlRmllbGQudmFsdWUpO1xuICAgICAgbmV3UHJvamVjdEVsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2UnLCBhbGxQcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgY29uc3QgZWRpdEJ0biA9IG5ld1Byb2plY3RFbG0ucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG4gICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc3dpdGNoUHJvamVjdFRhYihuZXdQcm9qZWN0RWxtKTtcbiAgICAgICAgZWRpdFByb2plY3RCdG5FTChlZGl0QnRuKTtcbiAgICAgIH0pO1xuICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIC8vIHVwZGF0ZUN1cnJQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3RFbG0pO1xuICAgICAgbmV3UHJvamVjdEVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFByb2plY3RUYWIobmV3UHJvamVjdEVsbSkpO1xuICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7IFxuICAgIH1cbiAgfVxuXG4gIFxuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoIShpc0NoaWxkUHJlc2VudCgnLnByb2plY3QtZm9ybS1jb250YWluZXInLCBwcm9qZWN0c1NlY3Rpb24pKSkge1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5hZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tYWRkLWJ0bicpO1xuICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY2FuY2VsLWJ0bicpO1xuICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bkVMKCk7XG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgICB9KTtcbiAgICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaGluZyBCZXR3ZWVuIFRhYnMgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICBjb25zdCBnZXRGaWx0ZXJlZEVsbUxpc3QgPSAoYXR0ciwgdmFsKSA9PiB7XG4gICAgbGV0IHJlcyA9IFtdO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gcHJvamVjdC5maWx0ZXJUb2RvRWxtcyhhdHRyLCB2YWwpO1xuICAgICAgZmlsdGVyZWRMaXN0LmZvckVhY2goZWxtID0+IHJlcy5wdXNoKGVsbSkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5RmlsdGVyZWRMaXN0ID0gKGF0dHIsIHZhbCkgPT4ge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gcHJvamVjdC5maWx0ZXJUb2RvRWxtcyhhdHRyLCB2YWwpO1xuICAgICAgRGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5VG9kb0xpc3QoZmlsdGVyZWRMaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZVRhYlR5cGUgPSBpdGVtID0+IHtcbiAgICBpZihpdGVtLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgICAgcmV0dXJuICd0b2RvJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0udGV4dENvbnRlbnQgPT09ICdUb2RheScpIHtcbiAgICAgIHJldHVybiAndG9kYXknO1xuICAgIH0gZWxzZSBpZiAoaXRlbS50ZXh0Q29udGVudCA9PT0gJ05leHQgNyBEYXlzJykge1xuICAgICAgcmV0dXJuICd0aGlzV2Vlayc7XG4gICAgfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnSW1wb3J0YW50Jykge1xuICAgICAgcmV0dXJuICdwcmlvcml0eSc7XG4gICAgfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnQ29tcGxldGVkJykge1xuICAgICAgcmV0dXJuICdjb21wbGV0ZSc7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoSG9tZVRhYiA9IGl0ZW0gPT4ge1xuICAgIHVwZGF0ZUN1cnJUYWIoaXRlbSk7XG4gICAgRGlzcGxheUZ1bmN0aW9ucy5zd2l0Y2hTaWRlQmFySXRlbShpdGVtKTtcbiAgICBjb25zdCB0YWJUeXBlID0gZGV0ZXJtaW5lVGFiVHlwZShpdGVtKTtcbiAgICBkaXNwbGF5RmlsdGVyZWRMaXN0KHRhYlR5cGUsICd0cnVlJyk7XG5cblxuICAgIC8vIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xuICAgIC8vICAgZGlzcGxheUZpbHRlcmVkTGlzdCgndG9kbycsICd0cnVlJyk7XG4gICAgLy8gfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnVG9kYXknKSB7XG4gICAgLy8gICBkaXNwbGF5RmlsdGVyZWRMaXN0KCd0b2RheScsICd0cnVlJyk7XG4gICAgLy8gfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnTmV4dCA3IERheXMnKSB7XG4gICAgLy8gICBkaXNwbGF5RmlsdGVyZWRMaXN0KCd0aGlzV2VlaycsICd0cnVlJyk7XG4gICAgLy8gfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50ID09PSAnSW1wb3J0YW50Jykge1xuICAgIC8vICAgZGlzcGxheUZpbHRlcmVkTGlzdCgncHJpb3JpdHknLCAndHJ1ZScpO1xuICAgIC8vIH0gZWxzZSBpZiAoaXRlbS50ZXh0Q29udGVudCA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAvLyAgIGRpc3BsYXlGaWx0ZXJlZExpc3QoJ2NvbXBsZXRlJywgJ3RydWUnKTtcbiAgICAvLyB9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0VGFiID0gaXRlbSA9PiB7XG4gICAgdXBkYXRlQ3VyclRhYihpdGVtKTtcbiAgICB1cGRhdGVDdXJyUHJvamVjdChhbGxQcm9qZWN0c1tpdGVtLmRhdGFzZXQucGxhY2VdKTtcbiAgICBEaXNwbGF5RnVuY3Rpb25zLnJlbW92ZUVkaXRPcHRpb25zKHByZXZUYWIpO1xuICAgIERpc3BsYXlGdW5jdGlvbnMuc3dpdGNoU2lkZUJhckl0ZW0oaXRlbSk7XG4gICAgYWRkQWRkVGFza0J0bigpO1xuICAgIGNvbnNvbGUubG9nKGBhbGwgcHJvamVjdHM6ICR7YWxsUHJvamVjdHN9YCk7XG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgcHJvamVjdDogJHtjdXJyUHJvamVjdC5uYW1lfWApO1xuICAgIGN1cnJQcm9qZWN0LnByaW50UHJvamVjdCgpO1xuICAgIERpc3BsYXlGdW5jdGlvbnMuZGlzcGxheVRvZG9MaXN0KGN1cnJQcm9qZWN0LnRvZG9FbG1MaXN0KTtcbiAgfVxuXG4gIGNvbnN0IHN3aXRjaFRvZG8gPSB0b2RvSXRlbSA9PiB7XG4gICAgdXBkYXRlQ3VyclRvZG8odG9kb0l0ZW0pO1xuICAgIERpc3BsYXlGdW5jdGlvbnMucmVtb3ZlRWRpdE9wdGlvbnMocHJldlRvZG9FbG0pO1xuICB9XG5cblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Rm9ybSk7XG5cbiAgaG9tZUl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoSG9tZVRhYihpdGVtKSkpO1xuICBcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=