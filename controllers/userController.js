//fazer import da class User
import User from "../models/userModel.js"
import Photo from "../models/photoModel.js"
import Sugestion from "../models/suggestionModel.js"

//criar array de utilizadores
export let users = []
export let photos = []
export let sugestions = []

//ir buscar a localsotrage os utilizadores se nao houver nenhum cria 5 utilizadores
if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    // Só vai entrar aqui a primeira vez que o site é iniciado

    const user1 = new User("joao", "06-02-2005", "../imagens/userPear.jpg", 10, "pass123", "joaoputo@gmail.com", "criança")
    const user2 = new User("ana", "31-02-2003", "../imagens/userApple.jpg", 1, "pass1235", "anafixe@gmail.com", "criança")
    const user3 = new User("mika", "06-09-1997", "../imagens/userFish.png", 1, "passPro", "joaoadmin@gmail.com", "admin")
    const user4 = new User("maria", "29-03-1999", "../imagens/userBird.png", 1, "passProfixe", "mariaadmin@gmail.com", "admin")
    const user5 = new User("max","06-02-2005","../imagens/userPear.jpg",12, "pass123","max@gmail.com","criança")

    users.push(user1, user2, user3, user4,user5)
    localStorage.setItem("users", JSON.stringify(users))
}

//ir buscar a localstorage as varias fotos de utilizador disponiveis para escolher
if (localStorage.photos) {
    photos = JSON.parse(localStorage.photos)
} else {
    // Só vai entrar aqui a primeira vez e passa esta informação para a localstorage

    const photo1 = new Photo("apple","../imagens/userApple.jpg")
    const photo2 = new Photo("pear","../imagens/userPear.jpg")
    const photo3 = new Photo("bird","../imagens/userBird.png")
    const photo4 = new Photo("fish","../imagens/userFish.png")
    const photo5 = new Photo("turtle","../imagens/turtle.png")
    const photo6 = new Photo("unifish","../imagens/unifish.png")
    const photo7 = new Photo("shark","../imagens/shark.png")
    const photo8 = new Photo("fishmania","../imagens/fishmania.png")
    const photo9 = new Photo("tropical","../imagens/tropical.png")

    photos.push(photo1, photo2, photo3,photo4,photo5,photo6,photo7,photo8,photo9)
    localStorage.setItem("photos", JSON.stringify(photos))
}

//ir buscar a localsotrage as sugestions se nao houver nenhum cria 
if (localStorage.sugestions) {
    sugestions = JSON.parse(localStorage.sugestions)
} else {
    // Só vai entrar aqui a primeira vez

    const sugestion1 = new Sugestion("joao", "carta da baleia azul")
    
    sugestions.push(sugestion1)
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
}



//funçao de adicionar um utilizador a local storage, se ele ja existir o utilzador sera informado que ja existe
export function addUser(txtName, txtData, txtPassword, txtEmail) {
    let existUser = false
    for (const user of users) {
        if (user.name === txtName) {
            existUser = true
        }
    }
    if (!existUser) {
        //faz push para a local storage dos dados do user e adiciona ao array
        users.push(new User(txtName, txtData, "../imagens/userPear.jpg", 1, txtPassword, txtEmail, "criança"))
        localStorage.setItem("users", JSON.stringify(users))
        alert(`User ${txtName} adicionada!`)
        //depois de criado, volta para a pagina inicial
        location.href = "/index.html"
    } else {
        alert(`User ${txtName} já existe!`)
    }
}
//funçao que ira verificar se a informaçao dada pelo utilizador esta certa e dara login se sim
export function userLogin(txtName, txtPassword) {
    for (const user of users) {
        if (user.name === txtName) {
            if (user.password == txtPassword) {
                return 1
            }
        }

    }
    return 0
}

//funçao que retorna o nivel do utilizador
export function getLevel(txtName) {
    for (const user of users) {
        if (user.name === txtName) {
            return user.nivel
        }
    }
}
//função que retorna a questao atual
export function getQuest(txtName) {
    for (const user of users) {
        if (user.name === txtName) {
            return user.currentQuest
        }
    }
}

//função de atualizar o exp e a Question atual

export function addExp(txtName, exp, curQuest) {


    for (const user of users) {


        if (user.name == txtName) {
                user.currentQuest = curQuest
                let ex = user.exp;
                
                //experiencia que já tinha + a adquirida
                user.exp = +ex + +exp;

                //insere a informação no array
                localStorage.setItem("users", JSON.stringify(users))

        }
    }
}
//função que devolve a informaçao do utilizador (página de perfik)

export function userInfo(txtName) {
    for (const user of users) {
        if (user.name == txtName) {
            let info = []
            info.push(user.data, user.photo, user.nivel, user.email, user.exp)
            return info
        }
    }
}
//função que devolve a info do user po admin (gestor de perfis)

export function adminInfo(txtName){
    for (const user of users) {
        if (user.name == txtName) {
            let info = []
            info.push(user.email, user.password, user.entidade)
            return info
        }
    }
}

//funçao que altera a informaçao do utilizador
//user.name = new name porque nunca podem haver 2 users iguais

export function alterUser(txtName, newName, data, email) {
    for (const user of users) {
        if (user.name == txtName) {
            let existUser = false
            for (const user of users) {
                if (user.name == newName) {
                    existUser = true
                }
            }
            if (!existUser) {
                user.name = newName
                user.data = data
                user.email = email
                localStorage.setItem("users", JSON.stringify(users))
            } else {
                alert(`User ${txtName} já existe!`)
            }
           
        }
    }
}

//funçao que altera a informaçao do utilizador pelo admin

export function alterUserAdmin(txtName, email, password, entity){
    for(const user of users){
        if(user.name == txtName){
            user.email = email
            user.password = password
            user.entidade = entity
            localStorage.setItem("users", JSON.stringify(users))
        }
    }
}

//função que altera a foto do utilizador

export function alterPhoto(txtName, photo) {
    for (const user of users) {
        if (user.name == txtName) {
            user.photo = photo
            localStorage.setItem("users", JSON.stringify(users))
        }
    }
}

//função que devolve todas as fotos de perfil

export function getPhotos(){
    let photoArray = []
        for (const photo of photos) {
            photoArray.push(photo.url)
        }
        return photoArray
}

//função que devolve a exp do utilizador

export function getExp(txtName){
    for (const user of users) {
        if(user.name == txtName){
            return user.exp
        }
    }
}


//função que da reset a experiencia do utilizador e aumenta o nivel
export function resetExp(txtName){
    for(const user of users){
        if(user.name == txtName){
            user.exp = 0
            user.nivel++;
            sessionStorage.setItem("level", user.nivel)
            localStorage.setItem("users", JSON.stringify(users))
        }
    }
}
//função pa ver se o user é admin

export function checkUser(txtName){
    for (const user of users) {
        if(user.name == txtName){
            if(user.entidade == "admin"){
                return true

            }else{
                return false
            }
        }
    }
}

//função que retorna todos os utilizadores

export function returnAllUsers(){
    return users
}

//funçao que envia uma sugestao

export function sendSugest(user, txt){
    let sugestion1 = new Sugestion(user,txt)
    sugestions.push(sugestion1)
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
}

//funçao que retorna as sugestões

export function returnSugestion(user){
    for (const sugestion of sugestions) {
        if(sugestion.user == user){
            return sugestion
        }
    }
}