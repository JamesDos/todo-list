import {Todo} from './todo';
import {Project} from './project';
import {CreateDomElms} from './create_dom_elms';
import {DisplayFunctions} from './display_functions';
import {isToday} from 'date-fns';

const DisplayController = (() => {
  // Variables and DOM Elements
  const homeItem = document.querySelector('#home-label ~ div');
  const projectListSection = document.querySelector('.project-list');
  const taskContainer = document.querySelector('.task-container');
  const addProjectBtn = document.querySelector('#add-project-btn');
  const homeItems = Array.from(document.querySelectorAll('.home-item'));
  const mainContent = document.querySelector('.main-content');

  let prevTab;
  let currTab = homeItem;
  let prevTodoElm;
  let currTodoElm;
  // Current project (not proj elm)
  let currProject;
  // List of all projects (not proj elm)
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

  const getTodoFromTodoElm = todoElm => {
    const proj = getProjFromTodoElm(todoElm);
    console.log(`called from getTodoFromTodoElm: todoElm = ${todoElm}`);
    console.log(`called from getTodoFromTodoElm: proj = ${proj}`);
    return proj.todoList[todoElm.dataset.place];
  }

  const getProjFromTodoElm = todoElm => {
    return allProjects[todoElm.dataset.project];
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

  const updateProjPlaces = n => {
    allProjects.forEach((project, i) => {
      if(i > n) {
        project.todoElmList.forEach(todoElm => todoElm.dataset.project = todoElm.dataset.project - 1);
        project.place = project.place - 1;
      }
    })
  }

  const isChildPresent = (childClass, parent) => {
    return parent.querySelector(childClass) !== null;
  }

  // Event Listener Functions ________________________________________________

  const isCompleteBtnEL = isCompleteBtn => {
    console.log('isCompleteBtn is clicked');
    console.log(isCompleteBtn.parentNode);
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
      editSelectEL(editBtn.parentNode);
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
    const proj = getProjFromTodoElm(todoElm);
    const todoIndex = todoElm.dataset.place;
    const todoElmList = proj.todoElmList;
    updatePlaces(todoIndex, todoElmList);
    proj.todoList.splice(todoIndex, 1);
    todoElmList.splice(todoIndex, 1);
    DisplayFunctions.deleteTodo(todoElm);
  }

  const editTodoBtnEL = editBtn => {
    console.log('editTodoBtn clicked');
    const e = CreateDomElms.createEditOptions('todo');
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
    const newTodo = new Todo(titleFieldVal, descriptionFieldVal, dateVal, false, false);
    const newTodoElm = CreateDomElms.createTodo(newTodo);
    newTodoElm.setAttribute('data-place', String(currProject.todoList.length));
    newTodoElm.setAttribute('data-project', String(currProject.place));
    // newTodoElm.setAttribute('data-project', String(getProjFromTodoElm(newTodoElm).place));
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
    DisplayFunctions.displayTodo(newTodoElm);
    newTodoElm.addEventListener('click', () => switchTodo(newTodoElm));
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

  const renameProjectBtnEL = (projIndex, editProjForm, projElm) => {
    let projecth4 = projElm.querySelector('.project-name-label');
    projecth4.textContent = editProjForm.querySelector('#edit-project-title-field').value;
    DisplayFunctions.addSideBarElmAt(projIndex, projElm);
    switchProjectTab(projElm);
  }

  const confirmEditProjBtnEL = projElm => {
    const projIndex = projElm.dataset.place;
    const proj = getProjFromProjElm(projElm);
    console.log(`projname: ${proj.name}`);
    const editProjForm = CreateDomElms.createEditProjectForm(proj);
    console.log(editProjForm);
    const renameProjectBtn = editProjForm.querySelector('#edit-project-form-rename-btn');
    const cancelProjectBtn = editProjForm.querySelector('#edit-project-form-cancel-btn');
    renameProjectBtn.addEventListener('click', event => {
      event.preventDefault();
      renameProjectBtnEL(projIndex, editProjForm, projElm);
    });
    cancelProjectBtn.addEventListener('click', (event) => {
      event.preventDefault();
      DisplayFunctions.addSideBarElmAt(projIndex, projElm);
    });
    if(document.querySelector('.project-form-container') === null) {
      DisplayFunctions.addSideBarElmAt(projIndex, editProjForm);
    }
  }

  const deleteProjBtnEL = projElm => {
    const projIndex = projElm.dataset.place;
    const projElmList = Array.from(document.querySelectorAll('.project-item'));
    updatePlaces(projIndex, projElmList);
    updateProjPlaces(projIndex);
    allProjects.splice(projIndex, 1);
    DisplayFunctions.deleteProjectFromSidebar(projElm);
    switchHomeTab(homeItem);
  }

  const editProjectBtnEL = editBtn => {
    if(document.querySelector('.edit-options-container') === null) {
      console.log(editBtn);
      const e = CreateDomElms.createEditOptions('proj');
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
      const newProject = new Project(projectTitleField.value, [], [], allProjects.length);
      const newProjectElm = CreateDomElms.createProjectSidebarElement(projectTitleField.value);
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
      DisplayFunctions.addProjectToSidebar(newProjectElm);
      newProjectElm.addEventListener('click', () => switchProjectTab(newProjectElm));
      console.table(allProjects); 
    }
  }

  
  const addProjectForm = () => {
    if (!(isChildPresent('.project-form-container', projectListSection))) {
      DisplayFunctions.addProjectForm();
      const projectForm = document.querySelector('.project-form-container');
      const addProjectBtn = document.querySelector('#project-form-add-btn');
      const cancelProjectBtn = document.querySelector('#project-form-cancel-btn');
      addProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        addProjectBtnEL();
        projectListSection.removeChild(projectForm);
      });
      cancelProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        projectListSection.removeChild(projectForm);
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
      DisplayFunctions.displayTodoList(filteredList);
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
    DisplayFunctions.switchSideBarItem(item);
    const tabType = determineTabType(item);
    displayFilteredList(tabType, 'true');
  }

  const switchProjectTab = item => {
    updateCurrTab(item);
    updateCurrProject(allProjects[item.dataset.place]);
    DisplayFunctions.removeEditOptions(prevTab);
    DisplayFunctions.switchSideBarItem(item);
    addAddTaskBtn();
    console.log(`all projects: ${allProjects}`);
    console.log(`current project: ${currProject.name}`);
    currProject.printProject();
    DisplayFunctions.displayTodoList(currProject.todoElmList);
  }

  const switchTodo = todoItem => {
    updateCurrTodo(todoItem);
    DisplayFunctions.removeEditOptions(prevTodoElm);
  }


  // Add event listeners ___________________________________________________

  addProjectBtn.addEventListener('click', addProjectForm);

  homeItems.forEach(item => item.addEventListener('click', () => switchHomeTab(item)));
  
})();
