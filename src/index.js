let selectTag = document.getElementById('parent-list');

document.addEventListener("DOMContentLoaded", () => {
  // const app = new App()
  // app.render()
  let newListForm = document.getElementById('create-list-form');
  let newTaskForm = document.getElementById('create-task-form');

  newListForm.addEventListener('submit', e => {
    e.preventDefault();
    let newListTag = document.getElementById('new-list-title');
    let newListTitle = newListTag.value;
    let newListObject = new List(newListTitle);
    createList(newListObject);
    addTaskToOptions(newListObject);
    e.target.reset()
  });

  addTaskToOptions = list => {
    let newOption = document.createElement('option');
    newOption.innerText = list.title;
    selectTag.append(newOption);
  }

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTaskDescription = document.getElementById('new-task-description').value;
    let newTaskPriority = parseInt(document.getElementById('new-task-priority').value);
    let selectedListTitle = selectTag.options[selectTag.selectedIndex].text;
    let selectedList = List.all().find(list => list.title === selectedListTitle);
    let newTask = new Task(newTaskDescription, newTaskPriority, selectedList);
    addTaskToList(newTask);
    e.target.reset();
  })

  createList = list => {
    let listSection = document.getElementById('lists');
    let newListTag = list.render();
    listSection.innerHTML += newListTag;
  }

  addTaskToList = task => {
    let listButton = document.getElementById(`li-${task.listId}`);
    let listDiv = listButton.parentNode.parentNode;
    let taskList = listDiv.querySelector("ul");
    let newTaskTag = document.createElement('li');
    newTaskTag.id = task.id;
    newTaskTag.innerHTML = task.render();
    debugger
    taskList.append(newTaskTag);
  }
})
