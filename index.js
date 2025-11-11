function UnVis() {
    const starman = document.querySelector(".starman")
    starman.classList.toggle('unvisible')
}
function chooseDrink1(){
    const parag = document.getElementById("drinkP")
    parag.innerHTML = 'Ти вибрав <span class = "coffe">каву</span>!'
}
function chooseDrink2(){
    const parag = document.getElementById("drinkP")
    parag.innerHTML = 'Ти вибрав <span class = "cacao">какао</span>!'
}
function chooseDrink3(){
    const parag = document.getElementById("drinkP")
    parag.innerHTML = 'Ти вибрав <span class = "tea">какао</span>!'
}
const body = document.getElementById("body")
function chooseBG1(){
    body.classList.remove("bg1","bg2","bg3")
    body.classList.add("bg1")
}
function chooseBG2(){
    body.classList.remove("bg1","bg2","bg3")
    body.classList.add("bg2")
}
function chooseBG3(){
    body.classList.remove("bg1","bg2","bg3")
    body.classList.add("bg3")
}
