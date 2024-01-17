import {Todo} from './todo';
import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import { add, formatDistance, subDays } from "date-fns";

const DisplayFunctions = (() => {

  const mainContentTitle = document.querySelector('#main-content-title');
  const taskContainer = document.querySelector('.task-container');
  const todoListContainer = document.querySelector('.todo-list-container');
  const projectList = document.querySelector('.project-list');

  // Helper Functions
  const clearElement = element => {
    element.innerHTML = '';
  }

  const insertElmAt = (n, elm, arr) => {
    arr.splice(n, 1, elm);
  }

  const removeChildElmement = (child, parent) => {
    parent.removeChild(child);
  }

  const displayElmList = (elmList, container) => {
    elmList.forEach(elm => container.appendChild(elm));
  }

  // Main content functions
  const updateMainContentTitle = newTitle => {
    mainContentTitle.textContent = newTitle;
  }

  const switchSideBarItem = newSideBarItem => { 
    let name = newSideBarItem.textContent;
    updateMainContentTitle(name);
    clearElement(taskContainer);
    clearElement(todoListContainer);
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
    let addTaskBtn = CreateDomElms.createAddTaskBtn();
    taskContainer.appendChild(addTaskBtn);
  }

  const displayAddTodoForm = () => {
    const todoForm = CreateDomElms.createNewTodoForm();
    todoListContainer.appendChild(todoForm);
  }

  const displayTodoElmAt = (n, newElm) => {
    let todoElmList = Array.from(todoListContainer.children);
    insertElmAt(n, newElm, todoElmList);
    clearElement(todoListContainer);
    displayElmList(todoElmList, todoListContainer);
  }

  const displayTodo = todo => {
    todoListContainer.appendChild(todo);
  }
  
  const deleteTodo = todo => {
    todoListContainer.removeChild(todo);
  }

    
  const editTodo = todo => {

  }

  //Sidebar display functions

  const addProjectForm = () => {
    const projectForm = CreateDomElms.createNewProjectForm();
    projectList.appendChild(projectForm);
  }

  const addSideBarElmAt = (n, newElm) => {
    let projectElmList = Array.from(projectList.children);
    insertElmAt(n, newElm, projectElmList);
    clearElement(projectList);
    displayElmList(projectElmList, projectList);
  }

  const deleteEditProjectForm = editProjForm => {
    projectList.removeChild(editProjForm);
  }

  const addProjectToSidebar = projectElm => {
    projectList.appendChild(projectElm);
  }
  
  const deleteProjectFromSidebar = projectElm => {
    projectList.removeChild(projectElm);
  }
  
  const editProject = projectSidebarContainer => {
    const projectList = document.querySelector('.projects-section');
  
  }

  return {
    clearElement,
    switchSideBarItem,
    removeEditOptions,
    displayAddTaskBtn,
    displayAddTodoForm,
    displayTodoElmAt,
    displayTodoList,
    displayTodo,
    deleteTodo,
    editTodo,
    addProjectForm,
    addSideBarElmAt,
    deleteEditProjectForm,
    addProjectToSidebar,
    deleteProjectFromSidebar,
    editProject
  }

})();

export {DisplayFunctions};

