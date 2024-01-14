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

export {Project};