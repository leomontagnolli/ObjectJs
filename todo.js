function todoList () {
    // ARRAYS
    this.description = [];
    this.dueDate = [];

        todoList.prototype.LimparArray = function () {
            this.description = [];
            this.dueDate = [];
}
}

let arrayList = new todoList ();

function Todo () {
    this.description = document.getElementById("description").value;
    this.dueDate = document.getElementById("dueDate").value;
}

function addTodoItem(todo){
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - "+todo.dueDate));
    ul.appendChild(li);
}
function showErrorMessage(message){
    var alert = document.getElementById("alert-email");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}
function hideErrorMessage(){
    document.getElementById("alert-email").style.visibility = "hidden";
}
function onAddClicked(){   
    let todos = new Todo ();
    validTodo(todos)
}
function validTodo(todo){
    if (todo.description.length < 3 || todo.dueDate.length < 3){
        showErrorMessage("Campo menor que 3 caractéres");
    } else {
        hideErrorMessage()
        addTodoItem(todo);
        arrayList.description.push(todo.description);
        arrayList.dueDate.push(todo.dueDate);
        console.log (arrayList.dueDate);
        console.log (arrayList.description);
    }
}
function clearTodos(){
    document.getElementById("todosList").innerText = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    arrayList.LimparArray();
}
