const inputEl = document.getElementById("input-el")
const inputDisEl = document.getElementById("input-dis-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const clearBtn = document.getElementById('clear-btn')

let myLinks = [];
if (JSON.parse(localStorage.getItem("myLinks"))) {
    myLinks = JSON.parse(localStorage.getItem("myLinks"));
    render(myLinks)
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    inputEl.value = tabs[0].url;
})

function render (links) {
    let listItem =  ''
    for (let i = links.length-1; i>=0; i--) {
        if (links[i][1]==="No Description") {
            listItem += `
        <li class='show list-group-item'>
            <a target="_blank" href="${links[i][0]}">
                ${String(links[i][0]).length > 40 ? String(links[i][0]).substring(0, 40)+"..." : String(links[i][0])}
            </a>
        </li>`;
        } else
        listItem += `
        <li class='show list-group-item'>
            <a target="_blank" href="${links[i][0]}">
                ${String(links[i][0]).length > 40 ? String(links[i][0]).substring(0, 40)+"..." : String(links[i][0])}
            </a>
        </li>
        <li class='hide list-group-item' id = 'description'>
            ${links[i][1]}
        </li>`;    
    }
    ulEl.innerHTML=listItem
}

inputBtn.addEventListener('click', function () {
    let allData = [];
    if (inputEl.value.length>0) {
    allData.push(inputEl.value)
    if (inputDisEl.value.length>0 || inputDisEl.value === "Please Enter URL Description") {
        allData.push(inputDisEl.value)
        } else {allData.push("No Description")}
    myLinks.push(allData);
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    console.log(JSON.parse(localStorage.getItem("myLinks")))

    render(myLinks)
    inputEl.value = '';
    inputDisEl.value = '';
}})

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear()
    myLinks =[]
    render(myLinks)
})

clearBtn.addEventListener('click', function() {
    inputEl.value = '';
    inputDisEl.value = '';
})