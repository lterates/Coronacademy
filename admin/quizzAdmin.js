import { getAllQuizz , getQuizzInfo, alterQuest, addQuest, removeQuest} from "../js/controllers/questionController.js";

const quizzList = document.getElementById("quizzList")
const quest = document.getElementById("quest")
const ans1 = document.getElementById("ans1")
const ans2 = document.getElementById("ans2")
const ans3 = document.getElementById("ans3")
const ans4 = document.getElementById("ans4")
const btnAlter = document.getElementById("btnAlter")
const btnCreate = document.getElementById("btnCreate")
const btnRemove = document.getElementById("btnRemove")
const btnBack = document.getElementById("btnBack")
const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")


btnBack.addEventListener("click", function () {
    location.href="../HTML/utilizador.html"
})

let quizzes = getAllQuizz()


renderQuizz()
//adicionar uma nova quest
btnCreate.addEventListener("click", function(){
    let cor;
    if(A.checked){
        cor = ans1.value
    }else if(B.checked){
        cor = ans2.value
    }else if(C.checked){
        cor = ans3.value
    }else if(D.checked){
        cor = ans4.value
    }
    addQuest(quest.value, ans1.value, ans2.value, ans3.value, ans4.value, cor)
    renderQuizz()
})
//remover uma quest existente
btnRemove.addEventListener("click", function(){
    removeQuest(quest.value)
    renderQuizz()
})

//carregas as quests existentes na local storage
function renderQuizz() {
    let txt = ""

    for (let i = 0; i < quizzes.length; i++) {
        txt += `<li class ="list-group-item gat">${quizzes[i].question}</li>`
    }
    quizzList.innerHTML = txt

    let names = document.getElementsByClassName("gat");
    //fazer as cartas clicaveis e que abram uma modal
    for (const name of names) {
        name.addEventListener("click", function () {

            //this.style.background-color = "#12bbad"
            for (const name of names) {
                name.style.backgroundColor = "white"
            }
            this.style.backgroundColor = "#12bbad"
            fillQUizz(this.innerText)


        })
    }
}
//prencher o form com a informaçao da questao selecionada
function fillQUizz(name){
    let info = getQuizzInfo(name)

    let parts = info.split("$")

    quest.value = parts[0]
    ans1.value = parts[1]
    ans2.value = parts[2]
    ans3.value = parts[3]
    ans4.value = parts[4]
    if(parts[5] == parts[1]){
        A.checked = true;
    }else if(parts[5] == parts[2]){
        B.checked = true;
    }else if(parts[5] == parts[3]){
        C.checked = true;
    }else if(parts[5] == parts[4]){
        D.checked = true;
    }

    


    btnAlter.addEventListener("click", function(){
        let cor;
        if(A.checked){
            cor = ans1.value
        }else if(B.checked){
            cor = ans2.value
        }else if(C.checked){
            cor = ans3.value
        }else if(D.checked){
            cor = ans4.value
        }
        alterQuest(parts[0], quest.value, ans1.value, ans2.value, ans3.value, ans4.value, cor)
    })
}