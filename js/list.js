// Needs to be done list
const dailyTaskList = ['morning walk', 'drop kids off at school', 'school work', 
'lunch', 'more school work','get kids from school', 'free time', 'supper', 
'family time', 'kids bedtime', 'my bedtime'];

let dailyTasks = document.querySelector('#schedule');
dailyTaskList.forEach(task => {
    let listItem = document.createElement('li');
    listItem.textContent = task;
    dailyTasks.appendChild(listItem);
});

// Check list
const myInput = document.querySelector('#todo');
const addTaskButton = document.querySelector('button');
const myList = document.querySelector('.list');

addTaskButton.addEventListener('click', function() {
    let input = myInput.value;
    myInput.value = '';
    const listValue = document.createElement('li');
    const deleteButton = document.createElement('button');

    listValue.textContent = input;
    deleteButton.innerHTML = '&#9746;';

    listValue.appendChild(deleteButton);
    myList.appendChild(listValue);

    deleteButton.addEventListener('click', function() {
        myList.removeChild(listValue);
    });

    myInput.focus();
})