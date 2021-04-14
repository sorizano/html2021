const db = firebase.firestore();

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const description = taskForm["task-desciption"].value;

    const response = await db.collection("tasks").doc().set({
        title,
        description
    })

    console.log(response)

    console.log(title, description)
})