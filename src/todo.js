class Todo {
  constructor(title, description, dueDate, priority, isComplete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dueDate() {
    return this.dueDate;
  }

  get priority() {
    return this.priority;
  }

  get isComplete() {
    return this.isComplete;
  }

  set setTitle(newTitle) {
    if (typeof newTitle === 'string') {
      this.title = newTitle;
    } else {
      console.log('newTitle is not string');
    }
  }

  set description(newDescription) {
    if (typeof newDescription === 'string') {
      this.description = newDescription;
    } else {
      console.log('newDescription is not string');
    }
  }

  set dueDate(newDueDate) {
    if (typeof newDueDate === 'string') {
      if (newDueDate !== "") {
        this.dueDate = newDueDate;
      } else {
        this.dueDate = "No Due Date";
      }
    } else {
      console.log('newDueDate is not string')
    }
  }

  set priority(newPriority) {
    if (typeof newPriority === 'boolean') {
      this.priority = newPriority;
    } else {
      console.log('newPriority is not bool');
    }
  }

  set isComplete(completeStatus) {
    if (typeof completeStatus === 'boolean') {
      this.isComplete = completeStatus;
    } console.log('completeStatus is not bool');
  }

  printTodo() {
    console.log(this);
  }
}

export default {Todo};