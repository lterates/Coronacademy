const user = sessionStorage.getItem('user');
const level = sessionStorage.getItem('level')

const btnLogOut = document.getElementById("btnLogOut");
const btnPlay = document.getElementById("btnPlay")

const userName = document.getElementById("userName");
//verificar se o utilizador ja deu login ou nao
if(user){
    btnLogOut.addEventListener("click", function(){
        sessionStorage.clear();
        location.href = "/index.html"
      })

    /*btnPlay.addEventListener("click", function(){
      location.href = "/HTML/quizz.html"
    })*/

      userName.innerText = user+" nivel: "+level;

}else{
    console.log("error is coming from indexLogged.js")
  alert("user not loged in!");
  location.href = "/index.html"
}