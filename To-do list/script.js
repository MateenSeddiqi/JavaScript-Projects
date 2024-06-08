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


displayBox.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
