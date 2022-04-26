// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');
//Event Listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodos)
//Functions

function addTodo(event) {
    event.preventDefault();

    //Create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)

    //Check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn)

    //Check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn)

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear input field
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
    if (item.classList[0] === 'completed-btn') {
        item.parentElement.classList.toggle('completed');
    }
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
        }

    })
}