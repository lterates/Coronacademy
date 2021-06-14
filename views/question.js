//import de todas as funçoes necessarias de questionController
import { setQuestion } from "../controllers/questionController.js";
import { addExp, getExp, resetExp, sendSugest } from "../controllers/userController.js";

//ir buscar a sessionstorage o user atual e o seu nivel
const user = sessionStorage.getItem('user');
let userCapitalized = user.charAt(0).toUpperCase() + user.slice(1)
const level = sessionStorage.getItem('level')
let cont = 0;
let exp = 0;

//criar variaveis dos varios botoes e containers
const questionView = document.getElementById("questionTxt");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const btnD = document.getElementById("btnD");
const failModal = document.getElementById("failModal")
const btnRetry = document.getElementById("btnRetry")
const btnLeave = document.getElementById("btnLeave")
const txtCorrect = document.getElementById("quantCorrect")
const expGained = document.getElementById("expGain")
const levelModal = document.getElementById("levelModal")
const btnCatalog = document.getElementById("btnCatalog")
const endModal = document.getElementById("endModal")
const inputSugest = document.getElementById("inputSugest")
const btnSend = document.getElementById("btnSend")
const userName = document.getElementById("userName")


//verificar se o utilizador se encontra logged senão envia-o de volta para o menu inicial
if (user) {
    loadQuestion();
    console.log(level)
    userName.innerText = userCapitalized + " Nível: " + level;
    btnCatalog.addEventListener("click", function(){
        location.href= "catalog.html"
    })
    btnLogOut.addEventListener("click", function () {
        sessionStorage.clear();
        location.href = "../index.html"
    })
    //log out da conta
} else {
    alert("O utilizador não tem sessão iniciada!");
    location.href = "../index.html"
}
//funçao que carrega as perguntas
function loadQuestion() {

    let userXp = getExp(user)
    //verificar se o utilizador subiu de nivel
    if(userXp >= 100){
        levelModal.style.display = "block"
        resetExp(user);
    }

    let curQuest = sessionStorage.getItem("curQuest");
    cont = curQuest;
    let quests = setQuestion(level);

    let parts = [];

    //se todas as questoes forem respondidas apresenta esta modal para enviar sugestoes
    if(quests[curQuest] == quests.length){
        endModal.style.display ="block"
        btnSend.addEventListener("click",function(){
            let text = inputSugest.value
            sendSugest(user, text);
            location.href = "/HTML/utilizador.html"

        })
    }else{
        console.log(quests[curQuest])
        parts = quests[curQuest].split("$");
    
        //renderizar as perguntas e a questao
        questionView.innerHTML = parts[0];
        btnA.style.backgroundColor = "rgb(252, 122, 0)"
        btnA.innerHTML = parts[1];
        btnB.innerHTML = parts[2];
        btnB.style.backgroundColor = "rgb(252, 122, 0)"
        btnC.innerHTML = parts[3];
        btnC.style.backgroundColor = "rgb(252, 122, 0)"
        btnD.innerHTML = parts[4];
        btnD.style.backgroundColor = "rgb(252, 122, 0)"
    
    
    
        btnA.addEventListener("click", checkAnswer);
    
        btnB.addEventListener("click", checkAnswer);
    
        btnC.addEventListener("click", checkAnswer);
    
        btnD.addEventListener("click", checkAnswer);
    
        function checkAnswer() {
    
    
            if (this.innerHTML == parts[5]) {
                this.style.backgroundColor = "rgb(66, 244, 101)"
                cont++;
                exp+ 25;
                addExp(user, 25, cont)
                //parts = quests[cont].split("$");
                sessionStorage.setItem("curQuest", cont)
                btnA.removeEventListener("click", checkAnswer)
                btnB.removeEventListener("click", checkAnswer)
                btnC.removeEventListener("click", checkAnswer)
                btnD.removeEventListener("click", checkAnswer)
                
                setTimeout(loadQuestion, 1000)
                
            } else {
                this.style.backgroundColor = "rgb(244, 68, 65)"
                lose(exp,cont)
            }
        }
    }
}

//button de restart quizz
btnRetry.addEventListener("click", function () {
    location.reload()
})
//button de sair do quiz para o menu inicial
btnLeave.addEventListener("click", function () {
    location.href = "html/indexLogged.html"
})
//funçao que corre quando o utilizador perde
function lose(exp, cont) {
    failModal.style.display = "block";
    expGained.innerHTML = "Ganhou: " + exp + " exp"
    
    txtCorrect.innerHTML = "Acertou: " + cont+ " perguntas"
    
  

}