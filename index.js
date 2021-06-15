//importar todas as funçoes necessarias do controller
import { userLogin, addUser, getLevel, getQuest } from "../controllers/userController.js";

//dar um listener aos butoes para abrir a modal de log in/registar
const btnLog = document.getElementById("btnProfile");
btnLog.addEventListener("click",function(){
    modal()
});
const btnCallToAction = document.getElementById("btnCallToAction")
btnCallToAction.addEventListener('click', function() {
    modal()
});

//modal de entrar na conta
function modal(){
    swal({
        title: "Log In",
        html: '<input id="txtName" class ="swal2-input" placeholder="Nome">' +
        '<input id="txtPass" type="password" class ="swal2-input" placeholder="Password">' +
        '<button id="newAcc" type="button" style="background-color:#fa741b; color:white; padding: 15px 82px; border-radius: 10px;">Criar Conta</button>',
            showCancelButton: true,
            confirmButtonText: "Entrar",
            confirmButtonColor: "#fa741b",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#fa741b",
            showLoaderOnConfirm: true,
        preConfirm: () => {
            const name = document.getElementById('txtName').value.toLowerCase();
            const password = document.getElementById('txtPass').value;
            let login = userLogin(name, password);
            let level = getLevel(name);
            let curQuest = getQuest(name)
            if(curQuest == undefined){
                curQuest= 0
            }
            
            if (login == 1) {
                sessionStorage.setItem('user', name);
                sessionStorage.setItem('level', level);
                sessionStorage.setItem('curQuest', curQuest)
                location.href = "html/indexLogged.html"
                
            }else{
                alert("Dados Errados!");
                modal();
            }
        },
        allowOutsideClick: () => !swal.isLoading()
    })

    //se o utilizador clicar em criar uma conta nova, irá abrir se uma nova modal 
    const btnCreate = document.getElementById("newAcc");
    btnCreate.addEventListener("click", function () {
        swal({
            title: "Criar Conta",
            html: '<input id="txtNewName" class="swal2-input" placeholder="nome" required>' +
                '<input id="txtNewPassword" type="password" class="swal2-input" placeholder="password" required>' +
                '<input id="txtDate" class="swal2-input" placeholder="dd-mm-aaaa" required>' +
                '<input id="txtEmail" type=email class="swal2-input" placeholder="e-mail" required>',
                showCancelButton: true,
                confirmButtonText: "Criar",
                confirmButtonColor: "#fa741b",
                cancelButtonText: "Cancelar",
                cancelButtonColor: "#fa741b",
                showLoaderOnConfirm: true,
            preConfirm: () => {
                const name = document.getElementById('txtNewName').value.toLowerCase();
                const password = document.getElementById('txtNewPassword').value;
                const date = document.getElementById('txtDate').value;
                const email = document.getElementById('txtEmail').value;
                addUser(name, date, password, email);

            },
            allowOutsideClick: () => !swal.isLoading()
        })

    })
}