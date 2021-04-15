const db = firebase.firestore();

const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("tasks-container");

const saveTask = (title, description) =>
    db.collection("tasks").doc().set({
        title,
        description,
    });

const getTasks = () => db.collection("tasks").get();

window.addEventListener("DOMContentLoaded", async(e) => {
    const quuerySnapshot = await getTasks();
    quuerySnapshot.forEach(doc => {
        console.log(doc.data())

        const task = doc.data();

        taskContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
           
            <h3 class="h5">${task.title}</h3>
            <p>${task.description}</p>

        </div>`
    })
});

taskForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];

    await saveTask(title.value, description.value);

    taskForm.reset();
    title.focus();
});