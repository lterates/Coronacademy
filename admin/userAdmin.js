import { returnAllUsers, adminInfo, alterUserAdmin, returnSugestion} from "../controllers/userController.js";

const userList = document.getElementById("userList")
const userEmail = document.getElementById("userEmail")
const userPass = document.getElementById("userPass")
const userPerm = document.getElementById("customSwitch1")
const btnBack = document.getElementById("btnBack")
const btnAlter = document.getElementById("btnAlter")
const sugestList = document.getElementById("sugestList");

btnBack.addEventListener("click", function () {
    location.href="../HTML/utilizador.html"
})

renderUsers()

//carregar os utilizadores na lista
function renderUsers(){


    let users = returnAllUsers()
    let txt =""

    for(let i = 0; i<users.length; i++){
        txt += `<li class ="list-group-item gat">${users[i].name}</li>`
    }
    userList.innerHTML = txt

    let names = document.getElementsByClassName("gat");
    
    for (const name of names) {
      name.addEventListener("click", function () {
        //this.style.background-color = "#12bbad"
        for(const name of names){
            name.style.backgroundColor = "white"
        }
        this.style.backgroundColor = "#12bbad"
        fillUser(this.innerText);
        
      })
    }
}
//preenche o form com a informaçao do utilizador selecionado
function fillUser(name){
    let info = adminInfo(name)
    userEmail.value = info[0]
    userPass.value = info[1]
    
    if(info[2] =="admin"){
        userPerm.checked = true;
    }else{
        userPerm.checked = false;
    }
    btnAlter.addEventListener("click", function(){
        if(userPerm.checked){
            alterUserAdmin(name, userEmail.value, userPass.value,"admin")
            alert("user alterado")
        }else{
            alterUserAdmin(name, userEmail.value, userPass.value,"criança" )
            alert("user alterado")
        }
        
    })
    let sugests = returnSugestion(name)
    if(sugests != undefined){
        let txt =""

        
            txt += `<li class ="list-group-item gat">${sugests.sugestion}</li>`
        
        sugestList.innerHTML = txt
    
    }else{
        sugestList.innerHTML =""
    }
    
    
}