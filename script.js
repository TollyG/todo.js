// select the element
const inputTodo = document.getElementById("input_todo");
const button = document.getElementById("button");
const todoList = document.getElementById("todo_list");
const todoContainer = document.querySelector(".container");

const emptyState = document.createElement("p");

const checkForEmptyState = function() {

    if (todoList.children.length < 1) {
        emptyState.textContent = "No Task"
        emptyState.setAttribute("class", "no_task")
        todoContainer.appendChild(emptyState);
    } else {
        if (todoList.children.length === 1) {
          todoContainer.removeChild(emptyState)  
        }      
    }
}

console.log(checkForEmptyState);
// Adding todo list
button.addEventListener("click", () => {
    const inputTodoValue = inputTodo.value

    if (inputTodoValue === ""){
        alert("Please enter your todo")
        return
    }


    //create a list of todos
    const todo = document.createElement("li");
    todo.textContent = inputTodoValue;
    todo.setAttribute("class", "values")

    //Complete todo list
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done"
    completeBtn.setAttribute("class", "list_button")

    //set an eventlistener to the completeBtn
    completeBtn.addEventListener("click", () =>{
        if (todo.style.textDecoration === "line-through"){
            todo.style.textDecoration = "none";
            completeBtn.textContent = "Done";
        } else {
            todo.style.textDecoration = "line-through";
            completeBtn.textContent = "Undo";
        }
        
    });

    

    //delete todo list
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.setAttribute("class", "delete_btn")

    //set an eventlistener to the deleteBtn
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(todo);
        checkForEmptyState();
    });

    const clearAllBtn = document.querySelector(".clear_btn")
    clearAllBtn.addEventListener("click", () => {
        todoList.removeChild(todo)
         checkForEmptyState();
    })


    //append todo to todolist
    todoList.appendChild(todo);

    //append completeBtn to todo
    todo.appendChild(completeBtn)

    //append deleteBtn to todo
    todo.appendChild(deleteBtn)


    //to clear the input box
    inputTodo.value = "";

    checkForEmptyState();
});

checkForEmptyState();