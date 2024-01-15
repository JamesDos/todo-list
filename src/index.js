import {Todo} from './todo';
import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import {DisplayFunctions} from './event_listeners';

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
    const newTodo = new Todo(titleFieldVal, descriptionFieldVal, dateVal, false, false);
    const newTodoElm = CreateDomElms.createTodo(newTodo);
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
    DisplayFunctions.displayTodo(newTodoElm);
  }

  const addTaskBtnEL = () => {
    if(!(isChildPresent('.todo-form-container', taskContainer))) {
      DisplayFunctions.displayAddTodoForm();
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
      DisplayFunctions.displayAddTaskBtn();
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
      const newProject = new Project(projectTitleField.value, []);
      const newProjectElm = CreateDomElms.createProjectSidebarElement(projectTitleField.value);
      newProjectElm.setAttribute('data-place', allProjects.length);
      allProjects.push(newProject);
      updateCurrProject(newProject);
      DisplayFunctions.addProjectToSidebar(newProjectElm);
      newProjectElm.addEventListener('click', () => switchProjectTab(newProjectElm));
      console.table(allProjects); 
    }
  }

  const addProjectForm = () => {
    if (!(isChildPresent('.project-form-container', projectsSection))) {
      DisplayFunctions.addProjectForm();
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
    DisplayFunctions.switchSideBarItem(item);
    if (item.textContent === 'All Tasks') {
      allProjects.forEach(project =>  DisplayFunctions.displayTodoList(project.getTodoListElms()));
    }
  }

  const switchProjectTab = item => {
    updateCurrTab(item);
    updateCurrProject(allProjects[item.dataset.place]);
    DisplayFunctions.switchSideBarItem(item);
    addAddTaskBtn();
    DisplayFunctions.displayTodoList(currProject.getTodoListElms());
  }


  // Add event listeners

  addProjectBtn.addEventListener('click', addProjectForm);

  homeItems.forEach(item => item.addEventListener('click', () => switchHomeTab(item)));


  
})();
