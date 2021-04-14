const db = firebase.firestore();

const taskForm = document.getElementById("task-form");

const saveTask = (title, description) =>
    db.collection("tasks").doc().set({
        title,
        description
    })


taskForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const description = taskForm["task-description"].value;

    await saveTask(title, description);

    console.log(title, description);
});