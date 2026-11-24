

let tasks = [
    "Select Wedding Venue",
    "Finalize Wedding Date",
    "Prepare Guest List",
    "Set Wedding Budget",
    "Choose Wedding Theme",
    "Book Photographer",
    "Book Videographer",
    "Select Bridal Dress",
    "Select Groom's Outfit",
    "Finalize Catering Service",
    "Plan Food Menu",
    "Order Wedding Cake",
    "Design Wedding Invitations",
    "Arrange Flower Decorations",
    "Plan Stage Decoration",
    "Book Makeup Artist",
    "Arrange Music and Entertainment",
    "Organize Guest Transportation",
    "Confirm All Bookings",
    "Complete Final Preparations"
];



function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task");
    }
    else {
        tasks.push(task);
        displayTasks();
    }

    document.getElementById("taskInput").value = "";
}



function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML = tasks[i] +
            " <button onclick='editTask(" + i + ")'>Edit</button>" +
            " <button onclick='deleteTask(" + i + ")'>Delete</button>";

        list.appendChild(li);
    }
}



function editTask(index) {

    let newTask = prompt("Enter new task");

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask;
        displayTasks();
    }
}



function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}



function resetTasks() {

    tasks = [];

    displayTasks();
}



