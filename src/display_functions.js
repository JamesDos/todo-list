import {Todo} from './todo';
import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import { add, formatDistance, subDays } from "date-fns";

const DisplayFunctions = (() => {

  const mainContentTitle = document.querySelector('#main-content-title');
  const taskContainer = document.querySelector('.task-container');
  const projectsContainer = document.querySelector('.projects-section');
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
    let addTaskBtn = CreateDomElms.createAddTaskBtn();
    taskContainer.appendChild(addTaskBtn);
  }

  const displayAddTodoForm = () => {
    const todoForm = CreateDomElms.createNewTodoForm();
    taskContainer.appendChild(todoForm);
  }

  const displayEditTodoFormAt = (n, editTodoForm) => {

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

  const displayProjElmList = projElmList => {
    projElmList.forEach(projElm => projectList.appendChild(projElm));
  }

  const addProjectForm = () => {
    const projectForm = CreateDomElms.createNewProjectForm();
    projectList.appendChild(projectForm);
  }

  const addSideBarElmAt = (n, newElm) => {
    let projectElmList = Array.from(projectList.children);
    insertElmAt(n, newElm, projectElmList);
    clearElement(projectList);
    displayProjElmList(projectElmList);
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

