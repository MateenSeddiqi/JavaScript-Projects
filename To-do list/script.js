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
    saveTask();
}


displayBox.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem('data', displayBox.innerHTML);
}

function showTask(){
    displayBox.innerHTML = localStorage.getItem('data');
}

showTask();