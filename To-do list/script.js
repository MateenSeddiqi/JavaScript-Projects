const userInput = document.getElementById('input-box');
const displayBox = document.getElementById('list-container');


function addTask(){
    if (userInput.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerText = userInput.value;
        displayBox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    userInput.value = '';
}