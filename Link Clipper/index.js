const inputEl = document.getElementById("input-el")
const inputDisEl = document.getElementById("input-dis-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const saveTabBtn = document.getElementById('tab-btn')

let myLinks = [];
if (JSON.parse(localStorage.getItem("myLinks"))) {
    myLinks = JSON.parse(localStorage.getItem("myLinks"));
    render(myLinks)
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    inputEl.value = tabs[0].url;
})

// saveTabBtn.addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         let allData = [];
//         allData.push([tabs[0].url]);

//         if (inputDisEl.value.length>0) {
//         allData.push(inputDisEl.value)
//         } else {allData.push("No Description")}
        
//         myLinks.push(allData);
//         localStorage.setItem("myLinks", JSON.stringify(myLinks))
//         render(myLinks)
//         inputDisEl.value = '';
//     })
// })

inputEl.addEventListener('click',function () {
    inputEl.value = ''
})
inputDisEl.addEventListener('click',function () {
    inputDisEl.value = ''
})

// function clearValue(field){
//  field.value = ''
// }

function render (links) {
    let listItem =  ''
    for (let i = links.length-1; i>=0; i--) {
        listItem += `
        <li class='show list-group-item'>
            <a target="_blank" href="${links[i][0]}">
                ${links[i][0]}
            </a>
        </li>
        <li class='hide list-group-item'>
            ${links[i][1]}
        </li>`
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

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let allData = [];
        allData.push([tabs[0].url]);

        if (inputDisEl.value.length>0) {
        allData.push(inputDisEl.value)
        } else {allData.push("No Description")}
        
        myLinks.push(allData);
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
        inputDisEl.value = '';
    })
})