// function saveInput() {
//     console.log("Button Clicked and onclick responsing")
// }
let tempLead = 'www.demo.com'
let myLinks = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

function renderLeads () {
    let listItem = ""
    for (let i = 0; i<myLinks.length; i++) {
        listItem += `
        <li>
            <a target="_blank" href="${myLinks[i]}">
                ${myLinks[i]}
            </a>
        </li>` 
    }
    ulEl.innerHTML=listItem
}

inputBtn.addEventListener('click', function () {
    myLinks.push(inputEl.value)
    renderLeads()
    inputEl.value = ''
})
