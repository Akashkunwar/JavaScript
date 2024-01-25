// Count increment
let countEl = document.getElementById("count-el");
let logsEl = document.getElementById('logs');
let count = 0
function increment(){
    count+=1;
    countEl.innerText = count;
}

// Saving counts
let savedMessage = "Previous Entries : 0"
function save(){
    savedMessage+=` - ${count}`
    logsEl.innerText = savedMessage;
    count = 0;
    countEl.textContent = count;
}

// Welcome message
let welcomeEl = document.getElementById('welcome');
welcomeEl.textContent = 'Welcome, Akash';
welcomeEl.textContent+="!";



