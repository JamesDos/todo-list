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

export {Todo};