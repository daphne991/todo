const myTodoItems = [];

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
    $todoList.innerHTML = ""
    
    for (let i = 0; i < todoItems.length; i = i + 1) {
        const todoItem = todoItems[i];
        $todoList.innerHTML = $todoList.innerHTML + renderTodoItem(todoItem);
    }
}

function addTodo(newTodo, todoItems) {
    todoItems.push(newTodo);
    renderTodos(todoItems);
}

const $input = document.querySelector(".todo-input");

function onEnterClicked(event) {
    if (event.key === "Enter") {
        const newTodo = $input.value;

        if (newTodo) {
            addTodo(newTodo, myTodoItems);
            $input.value = "";
        }
    }

}

$input.addEventListener("keypress", onEnterClicked);


renderTodos(myTodoItems)