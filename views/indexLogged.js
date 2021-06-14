const user = sessionStorage.getItem('user');
let userCapitalized = user.charAt(0).toUpperCase() + user.slice(1)
const level = sessionStorage.getItem('level')

const btnLogOut = document.getElementById("btnLogOut");

const userName = document.getElementById("userName");

//verificar se o utilizador ja deu login ou nao
if(user){
    btnLogOut.addEventListener("click", function(){
        sessionStorage.clear();
        location.href = "/index.html"
    })
    userName.innerText = userCapitalized + " Nível: " + level;

}else{
    console.log("Error is coming from indexLogged.js")
  alert('O login não foi efetuado');
  location.href = "/index.html"
}