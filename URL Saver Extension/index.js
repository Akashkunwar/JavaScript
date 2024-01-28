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


function render (links) {
    let listItem =  `
        <tr>
            <th>
                URLs
            </th>
            <th>
                Discription
            </th>
        </tr>`
    for (let i = links.length-1; i>=0; i--) {
        // listItem += `
        // <li>
        //     <a target="_blank" href="${links[i][0]}">
        //         ${links[i][0]}
        //     </a>
        // </li>` 
        listItem += `
            <tr>
                <th>
                <a target="_blank" href="${links[i][0]}">
                        ${links[i][0]}
                </a>
                </th>
                <th>
                    ${links[i][1]}
                </th>
            </tr>`
    }
    ulEl.innerHTML=listItem
}

inputBtn.addEventListener('click', function () {
    let allData = [];
    allData.push(inputEl.value)
    allData.push(inputDisEl.value)
    myLinks.push(allData);
    // Save data in local storage
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    console.log(JSON.parse(localStorage.getItem("myLinks")))

    render(myLinks)
    inputEl.value = '';
    inputDisEl.value = '';
})

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear()
    myLinks =[]
    render(myLinks)
})

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
    })
})