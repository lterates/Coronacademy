import {
    userInfo,
    alterUser,
    alterPhoto,
    getPhotos,
    checkUser
} from "../controllers/userController.js";

const user = sessionStorage.getItem('user');
const level = sessionStorage.getItem('level')
const userName = document.getElementById("userName")
const userName2 = document.getElementById("userName2")
const userData = document.getElementById("userData")
const userEmail = document.getElementById("userEmail")
const userExp = document.getElementById("userExp")
const userLevel = document.getElementById("userLevel")
const imgModal = document.getElementById("imgModal")
const imgContainer = document.getElementById("imgContainer")
const btnLeave = document.getElementById("btnLeave")
const imgSlot = document.getElementById("imgSlot")
const btnAdmin = document.getElementById("btnAdmin")

let info = userInfo(user);

//logout, se o user clicar em log out a session storage apaga e volta ao index.html
if (user) {
    renderUser(info)
    const btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        sessionStorage.clear();
        location.href = "../index.html"
    })

    //verifica se é admin, se for ao clicar no botão entra na area admin
    let userEnt = checkUser(user)
    if (userEnt) {
        btnAdmin.addEventListener("click", function () {
            location.href = "../admin/user.html"
        })
    }



    const btnEdit = document.getElementById("editButton");
    btnEdit.addEventListener("click", function () {

        //modal de alterar a informaçao do utilizador
        //obriga a colocar username, data e email
        swal({
            title: "Editar Conta",
            html: '<input id="txtNewName" class="swal2-input" value="' + user + '" required>' +
                '<input id="txtDate" class="swal2-input" value="' + info[0] + '" required>' +
                '<input id="txtEmail" type=email class="swal2-input" value="' + info[3] + '" required>',
            showCancelButton: true,
            confirmButtonText: "Editar",
            confirmButtonColor: "#fa741b",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#fa741b",
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const name = document.getElementById('txtNewName').value.toLowerCase();
                const date = document.getElementById('txtDate').value;
                const email = document.getElementById('txtEmail').value;
                alterUser(user, name, date, email)
                //altera informação do user
                sessionStorage.setItem("user", name)
                location.reload();


            },
            allowOutsideClick: () => !swal.isLoading()
        })


    })
    const btnPhoto = document.getElementById("selectButton");
    btnPhoto.addEventListener("click", function () {
        imgModal.style.display = "block"
        renderImg()
        btnLeave.addEventListener("click", function () {
            imgModal.style.display = "none"
        })
    })


    //no caso do user não estar logged
} else {
    console.log("error is coming from user.js");
    alert("user not logged in!");
    //location.href = "/index.html"
}

//renderizar a informaçao do utilizador
function renderUser(info) {
    imgSlot.innerHTML = '<img id="userImg" src="' + info[1] + '" class="card-img-top" alt="Card image cap">'
    userName.innerHTML = user
    userName2.innerHTML = user
    userLevel.innerHTML = "Nível: " + level
    userData.innerHTML = info[0]
    userEmail.innerHTML = info[3]

    document.querySelector("#expProgress").setAttribute("aria-valuenow", info[4])
    let progress = (info[4] / 100) * 100;
    userExp.innerHTML = info[4] + "/100 Exp"
    document.querySelector("#expProgress").setAttribute("style", "width:" + progress + "%")

}
//renderizar as fotos de perfil na modal
function renderImg() {
    let photoArray = getPhotos()
    let txt = '<div class="row">'
    for (let i = 0; i < photoArray.length; i++) {
        txt += `<div class="col-md-4"><input class="imgs" type="image" src="${photoArray[i]}" alt="Submit" width="80" height="80"></div>`
    }
    txt += '</div>'
    imgContainer.innerHTML = txt;

    let images = document.getElementsByClassName("imgs");

    //fazer as imagens clicaveis e que alterem a foto de perfil
    for (const image of images) {
        image.addEventListener("click", function () {
            let link = this.getAttribute("src")
            alterPhoto(user, link)
            location.reload();
        })
    }
}