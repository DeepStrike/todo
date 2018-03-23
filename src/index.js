import './style.css';

class App {

  constructor() {
    this.todos = [];
  }

  
  createElement(props) {

    const elem = document.createElement(props.nameElement);
    
    props.attribute && props.attributeValue ? elem.setAttribute(props.attribute, props.attributeValue) : '';
    elem.className = props.classElement ? props.classElement : '';
    elem.innerHTML = props.textElement ? props.textElement : '';

    document.body.appendChild(elem); 
    
    return elem;
  }

  todoLists(value) {
  
    if (value.length === 0) return;
    const item = this.createElement({
      nameElement: 'div',
      classElement: 'todo-item',
      textElement: value
    });

    // const buttonList = this.createElement({
    //   nameElement: 'button',
    //   classElement: 'todo-delete',
    //   textElement: 'delete'
    // });

    // item.append(buttonList);

    this.todos.push(item);

  }

  deleteItem() {
    let lastItem = this.todos[this.todos.length - 1];
    lastItem.style.display = 'none';
    this.todos.pop();
  }

}


const app = new App();

const todoLists = app.createElement({
  nameElement: 'div',
  classElement: 'tod-lists'
})
const titleTodo = app.createElement({
  nameElement: 'h2',
  classElement: 'todo-title',
  textElement: 'This is todo app',
});

const inputTodo = app.createElement({
  nameElement: 'input',
  classElement: 'todo-input',
  attribute: 'type',
  attributeValue: 'text'
});

const buttonTodoAdd = app.createElement({
  nameElement: 'button',
  classElement: 'todo-button',
  textElement: 'Add'
});

const buttonTodoDelete = app.createElement({
  nameElement: 'button',
  classElement: 'todo-delete',
  textElement: 'Delete'
});



buttonTodoAdd.addEventListener('click', () => {
  app.todoLists(inputTodo.value);
});

buttonTodoDelete.addEventListener('click', () => {
  app.deleteItem();
});




