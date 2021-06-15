import { createNewCard, getAll, getCard, removeCard , alterCard} from "../controllers/catalogController.js";
const inputname = document.getElementById("inputnameh")
const inputDesc = document.getElementById("inputDesc")
const btnAlter = document.getElementById("btnAlter")
const btnCreate = document.getElementById("btnCreate")
const btnRemove = document.getElementById("btnRemove")
const inputLink = document.getElementById("inputLink")
const cardList = document.getElementById("cardList")
const btnBack = document.getElementById("btnBack")

let cartas = getAll()

renderEntity()
//criar carta nova
btnCreate.addEventListener("click", function () {
        createNewCard(inputname.value, inputLink.value, inputDesc.value);
        renderEntity()
})

//remover carta selecionada
btnRemove.addEventListener("click", function () {
    removeCard(inputname.value)
    renderEntity()
})




//prencher lista com as cartas da localstorage
function renderEntity() {
    let txt = ""
    for (let i = 0; i < cartas.length; i++) {
        txt += `<li class ="list-group-item gat">${cartas[i].name}</li>`
    }
    cardList.innerHTML = txt

    let names = document.getElementsByClassName("gat");
    for (const name of names) {
        name.addEventListener("click", function () {
            console.log(this.innerText)
            //this.style.background-color = "#12bbad"
            for (const name of names) {
                name.style.backgroundColor = "white"
            }
            this.style.backgroundColor = "#ffa500"
            fillEntity(this.innerText)
            btnAlter.addEventListener("click", function(){                    
                    alterCard(name.innerText, inputname.value, inputDesc.value,inputLink.value)
                    renderEntity()
            })
        })
    }



}
//prencher formulario com informaçao da carta selecionada
function fillEntity(name) {
    let info = getCard(name)
        inputname.value = info.name
        inputDesc.value = info.descricao
        inputLink.value = info.card
        document.querySelector("#imgSlot").setAttribute("src", info.card)
}



