const todoItems = ["simple todo 1", "simple todo 2"];

function renderTodoItem (todoText) {
return `
<li>
<div class="todo-item">
<input type="checkbox"/>
<span class="todo-text">${todoText}</span> 
</div>
</li>
`
}

function renderTodos(todoItems) {
    const $todoList = document.querySelector(".todo-list");
    
    for (let i = 0; i < todoItems.length; i = i + 1) {
        const todoItem = todoItems[i];
        $todoList.innerHTML = $todoList.innerHTML + renderTodoItem(todoItem);
    }
}

const myTodoItems = ["shopping", "read book", "exercise", "make lunch"];

renderTodos(myTodoItems)