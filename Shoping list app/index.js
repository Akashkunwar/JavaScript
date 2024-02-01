import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://shopkart-8875c-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shopingListInDb = ref(database, "shopingList")

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button')
const shoppintItemEl = document.getElementById('shopping-item')

onValue(shopingListInDb, function(snapshot) {
    if (snapshot.exists()) {
    const data = Object.entries(snapshot.val());
    clearShopingList()
    for (let i=0; i<data.length; i++) {
        let currentItem = data[i]
        let currentItemId = currentItem[0]
        let currentItemValues = currentItem[1]
        appendItemInList(currentItem)
    }} else {
        shoppintItemEl.innerHTML = "<li>No Item to show ...</li>"
    }
});

addButtonEl.addEventListener('click', function(){
    if (inputFieldEl.value.length>0)
    {
    push(shopingListInDb, inputFieldEl.value)
    clearInput()}
})

function clearShopingList () {
    shoppintItemEl.innerHTML='';
}

function clearInput() {
    inputFieldEl.value = '';
}

function appendItemInList (item) {
    let itemId = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener('dblclick', function() {
        let exactLocationInDb = ref(database, `shopingList/${itemId}`)
        remove(exactLocationInDb)
    })
    shoppintItemEl.append(newEl)
}