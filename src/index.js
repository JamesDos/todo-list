import {Todo} from './todo';
// import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import {DisplayFunctions} from './event_listeners';

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
      DisplayFunctions.addProjectForm();
      const projectForm = document.querySelector('.project-form-container');
      const projectTitleField = document.querySelector('#project-title-field');
      const addProjectBtn = document.querySelector('#project-form-add-btn');
      const cancelProjectBtn = document.querySelector('#project-form-cancel-btn');  
      addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('add-project');
        const newProject = CreateDomElms.createProjectSidebarElement(projectTitleField.value);
        DisplayFunctions.addProjectToSidebar(newProject);
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
  homeItems.forEach(item => item.addEventListener('click', DisplayFunctions.switchSideBarItem));



  
})();

//const taskContainer = document.querySelector('.task-container');


// DisplayFunctions.addTask();

// DisplayFunctions.addProject();
// DisplayFunctions.addTaskOpen();
// DisplayFunctions.displayAddTaskBtn();
// DisplayFunctions.addTodo();