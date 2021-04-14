const db = firebase.firestore();

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const descriprion = taskForm["task-desciption"].value;

    const response = await db.collection("tasks").doc().set({
        title,
        descriprion
    })

    console.log(response)

    console.log(title, descriprion)
})