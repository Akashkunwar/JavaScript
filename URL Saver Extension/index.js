// function saveInput() {
//     console.log("Button Clicked and onclick responsing")
// }
let tempLead = 'www.demo.com'
let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

function renderAll () {
    ulEl.innerHTML = '';
    for (let i = 0; i<myLeads.length; i++) {
        ulEl.innerHTML += '<li>'+myLeads[i] +'</li>'
    }
}

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    renderAll()
})
