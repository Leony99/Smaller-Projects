const input = document.querySelector(".input");
const add = document.querySelector(".add");
const tasksContainer = document.querySelector(".tasks-container");

//Fazer overflow no tamanho do contêiner
input.addEventListener("click", () => {
    clearInputError();
});

add.addEventListener("click", () => {
    if (!validateInput()) {
        return
    }
    createTask();
});

createLocalStorageTasks();

function clearInputError() {
    input.classList.remove("error");
}

function validateInput() {
    if (input.value.trim().length == 0) {
        input.classList.add("error");
        input.value = "";
        return false;
    }
    else {
        return true;
    }
}

function createTask(taskClass, taskText = input.value , btnCheckClass, btnRecheckClass = "inv") {
    //Create task 'div'
    const task = document.createElement("div");
    task.classList.add("task");
    if(taskClass) {
        task.classList.add(taskClass);
    }
    tasksContainer.appendChild(task);

    //Create task 'p'
    const text = document.createElement("p");
    text.innerText = taskText;
    input.value = "";
    task.appendChild(text);

    //Create task check 'button'
    const btnCheck = document.createElement("button");
    if (btnCheckClass) {
        btnCheck.classList.add(btnCheckClass)
    }
    task.appendChild(btnCheck);

    //Create check button 'i'
    const btnCheckIcon = document.createElement("i");
    btnCheckIcon.classList.add("fa-solid");
    btnCheckIcon.classList.add("fa-check");
    btnCheck.appendChild(btnCheckIcon);

    //Create task recheck 'button'
    const btnRecheck = document.createElement("button");
    if (btnRecheckClass) {
        btnRecheck.classList.add(btnRecheckClass);
    }
    task.appendChild(btnRecheck);

    //Create recheck button 'i'
    const btnRecheckIcon = document.createElement("i");
    btnRecheckIcon.classList.add("fa-solid");
    btnRecheckIcon.classList.add("fa-x");
    btnRecheck.appendChild(btnRecheckIcon);

    //Create task delete 'button'
    const btnDelete = document.createElement("button");
    task.appendChild(btnDelete);

    //Create delete button 'i'
    const btnDeleteIcon = document.createElement("i");
    btnDeleteIcon.classList.add("fa-solid");
    btnDeleteIcon.classList.add("fa-trash");
    btnDelete.appendChild(btnDeleteIcon);

    addBtnEvents(btnCheck, btnRecheck, btnDelete);
    setTasksMargin();
    updateLocalStorageTasks();
}

function addBtnEvents(btnCheck, btnRecheck, btnDelete) {
    btnCheck.addEventListener("click", () => {
        btnCheck.parentElement.classList.add("checked");
        btnCheck.classList.add("inv");
        btnRecheck.classList.remove("inv");
        updateLocalStorageTasks();
    });

    btnRecheck.addEventListener("click", () => {
        btnRecheck.parentElement.classList.remove("checked");
        btnCheck.classList.remove("inv");
        btnRecheck.classList.add("inv");
        updateLocalStorageTasks();
    });

    btnDelete.addEventListener("click", () => {
        btnDelete.parentElement.remove();
        setTasksMargin();
        updateLocalStorageTasks();
    });
};

function setTasksMargin() {
    if (tasksContainer.childElementCount > 0) {
        tasksContainer.style.marginTop = "20px";
    }
    else {
        tasksContainer.style.marginTop = "0px";
    }
}

function updateLocalStorageTasks() {
    const tasks = tasksContainer.children;
    const localStorageTasks = [...tasks].map(function(task) {
        const taskClass = task.classList.item(1);
        const taskText = task.children[0].textContent;
        const btnCheckClass = task.children[1].classList.item(0);
        const btnRecheckClass = task.children[2].classList.item(0);

        return {taskClass: taskClass, taskText: taskText, btnCheckClass: btnCheckClass, btnRecheckClass: btnRecheckClass};
    });

    localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
}

function createLocalStorageTasks() {
    const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));

    for (const task of localStorageTasks) {
        const taskClass = task.taskClass;
        const taskText = task.taskText;
        const btnCheckClass = task.btnCheckClass;
        const btnRecheckClass = task.btnRecheckClass;

        createTask(taskClass, taskText, btnCheckClass, btnRecheckClass);
    }
}