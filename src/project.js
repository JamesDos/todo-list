import { CreateDomElms } from "./create_dom_elms";

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

export {Project};