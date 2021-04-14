const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = taskForm['task-title'].value;
    const descriprion = taskForm['task-desciption'].value;

    console.log(title, descriprion)
})