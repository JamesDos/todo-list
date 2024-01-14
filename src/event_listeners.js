import {Todo} from './todo';
import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import { add, formatDistance, subDays } from "date-fns";

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
    let addTaskBtn = CreateDomElms.createAddTaskBtn();
    taskContainer.appendChild(addTaskBtn);
  }
  
  const addTaskOpen = () => {
    const todoForm = CreateDomElms.createNewTodoForm();
    taskContainer.appendChild(todoForm);
  }

  const addTodo = () => {
    const todo = CreateDomElms.createTodo('Test Title', 'Test Description', 'Test Date', true, true);
    taskContainer.appendChild(todo);
  }
  
  const deleteTodo = todo => {
    taskContainer.removeChild(todo);
  }
  
  const editTodo = todo => {
  }

  const addProjectForm = () => {
    const projectForm = CreateDomElms.createNewProjectForm();
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

export {DisplayFunctions};

