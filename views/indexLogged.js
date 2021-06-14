const user = sessionStorage.getItem('user');
const level = sessionStorage.getItem('level')

const btnLogOut = document.getElementById("btnLogOut");

const userName = document.getElementById("userName");

//verificar se o utilizador ja deu login ou nao
if(user){
    btnLogOut.addEventListener("click", function(){
        sessionStorage.clear();
        location.href = "/index.html"
    })
    userName.innerText = user + " nivel: " + level;

}else{
    console.log("Error is coming from indexLogged.js")
  alert('O login não foi efetuado');
  location.href = "/index.html"
}