import { createNewCard, getAllQ, getCardQ, removeCardQ , alterCardQ} from "../js/controllers/catalogQController.js";
import { createNewCardF, getAllF, getCardF, removeCardF, alterCardF } from "../js/controllers/catalogFController.js";


const inputname = document.getElementById("inputnameh")

const inputDesc = document.getElementById("inputDesc")

const btnAlter = document.getElementById("btnAlter")

const btnCreate = document.getElementById("btnCreate")

const btnRemove = document.getElementById("btnRemove")

const inputLink = document.getElementById("inputLink")

const cardList = document.getElementById("cardList")

const btnBack = document.getElementById("btnBack")

const a = document.getElementById("A")
const b = document.getElementById("B")

let cartasQ = getAllQ()

let cartasF = getAllF()

renderEntity()

btnBack.addEventListener("click", function () {
    location.href = "../HTML/utilizador.html"
})
//criar carta nova
btnCreate.addEventListener("click", function () {
    if (a.checked) {
        createNewCard(inputname.value, inputLink.value, inputDesc.value);
        renderEntity()
    } else if (b.checked) {
        createNewCardF(inputname.value, inputLink.value, inputDesc.value);
        renderEntity()
    }
})
//remover carta selecionada
btnRemove.addEventListener("click", function () {
    if (a.checked) {
        removeCardQ(inputname.value)
        renderEntity()
    } else if (b.checked) {
        removeCardF(inputname.value)
        renderEntity()
    }
})




//prencher lista com as cartas da localstorage
function renderEntity() {
    let txt = ""

    for (let i = 0; i < cartasQ.length; i++) {
        txt += `<li class ="list-group-item gat">${cartasQ[i].name}</li>`
    }
    for (let i = 0; i < cartasF.length; i++) {
        txt += `<li class ="list-group-item gat">${cartasF[i].name}</li>`
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
            this.style.backgroundColor = "#12bbad"
            fillEntity(this.innerText)
            btnAlter.addEventListener("click", function(){
                if(a.checked){
            
                    
                    alterCardQ(name.innerText, inputname.value, inputDesc.value,inputLink.value)
                    renderEntity()
                }else if(b.checked){
                    alterCardF(name.innerText, inputname.value, inputDesc.value,inputLink.value)
                    renderEntity()
                }
            })


        })
    }



}
//prencher formulario com informaçao da carta selecionada
function fillEntity(name) {
    let info = getCardF(name)
    let info2 = getCardQ(name)

    if (info == undefined) {

        inputname.value = info2.name
        inputDesc.value = info2.descricao
        document.querySelector("#imgSlot").setAttribute("src", info2.card)
        inputLink.value = info2.card

        a.checked = true;
    } else if (info2 == undefined) {

        inputname.value = info.name
        inputDesc.value = info.descricao
        inputLink.value = info.card
        document.querySelector("#imgSlot").setAttribute("src", info.card)
        b.checked = true;
    }
}



