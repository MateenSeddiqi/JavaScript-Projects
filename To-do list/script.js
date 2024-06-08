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
    }
}