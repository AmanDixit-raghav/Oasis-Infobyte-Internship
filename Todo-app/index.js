document.querySelector('.button').onclick = addTask;

function addTask() {
    const text = document.querySelector('.input');
    const textlist = text.value;
    if (textlist === '') return;

    const textvia = document.querySelector('.list');
    const listitem = document.createElement('li');

    const creation = document.createElement('span');
    creation.className = 'task';
    creation.textContent = textlist;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    checkbox.onclick = toggleTask;
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit the task';
    editButton.className = 'edit';
    editButton.onclick = editTask;

    const button = document.createElement('button');
    button.textContent = 'Delete the task';
    button.className = 'test';
    button.onclick = deleteTask;

    listitem.appendChild(checkbox);
    listitem.appendChild(creation);
    listitem.appendChild(editButton);
    listitem.appendChild(button);
    textvia.appendChild(listitem);

    text.value = '';
}

function toggleTask() {
    const taskText = this.nextSibling;
    const originalText = taskText.textContent;

    if (this.checked) {
        const conciseList = document.querySelector('.list1');
        const listitem = document.createElement('li');

        const creation = document.createElement('span');
        creation.className = 'task';
        creation.textContent = originalText;

        const button = document.createElement('button');
        button.textContent = 'Delete the task';
        button.className = 'test';
        button.onclick = deleteTask;

        listitem.appendChild(creation);
        listitem.appendChild(button);
        conciseList.appendChild(listitem);

        this.parentElement.remove();
    }
}

function editTask() {
    const taskText = this.previousSibling;
    const newText = prompt('Edit your task:', taskText.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskText.textContent = newText;
    }
}

function deleteTask() {
    this.parentElement.remove();
}
