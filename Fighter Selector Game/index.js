
let fighters = ['👹','🤖','👻','🐊','🐅','🐆','🦖','🦕','🦬','🐃','🐯','🦁','🦍','🦧','🦣','🐘','🦛','🦏']
let opponentId = document.getElementById('opponents-el')

let fighterOne = fighters[Math.floor(Math.random()*fighters.length)];
let fighterTwo = fighters[Math.floor(Math.random()*fighters.length)];
console.log(fighterOne+ " vs "+fighterTwo)

function fightNow() {
    let fighterOne = fighters[Math.floor(Math.random()*fighters.length)];
    let fighterTwo = fighters[Math.floor(Math.random()*fighters.length)];
    return fighterOne+ " VS "+fighterTwo
}
function startFight() {
    opponentId.textContent = fightNow()
}
