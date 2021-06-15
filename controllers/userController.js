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
    const user1 = new User("edu", "26-09-1997", "../assets/user5.png", 10, 1, "admin123", "eduardoFerreira@gmail.com", "admin")
    const user2 = new User("tico", "15-02-1997", "../assets/user3.png", 2, 1, "password123", "anafixe@gmail.com", "criança")
    const user3 = new User("maria", "29-03-1999", "../assets/user2.png", 8, 1, "pass123", "mariaadmin@gmail.com", "admin")
    users.push(user1, user2, user3)
    localStorage.setItem("users", JSON.stringify(users))
}

//ir buscar a localstorage as varias fotos de utilizador disponiveis para escolher
if (localStorage.photos) {
    photos = JSON.parse(localStorage.photos)
} else {
    // Só vai entrar aqui a primeira vez e passa esta informação para a localstorage

    const photo1 = new Photo("user1", "../assets/User1.png", 1)
    const photo2 = new Photo("user2", "../assets/User2.png", 1)
    const photo3 = new Photo("user3", "../assets/User3.png", 2)
    const photo4 = new Photo("user4", "../assets/User4.png", 2)
    const photo5 = new Photo("user5", "../assets/User5.png", 3)
    const photo6 = new Photo("user6", "../assets/User6.png", 3)
    const photo7 = new Photo("user7", "../assets/User7.png", 4)
    const photo8 = new Photo("user8", "../assets/User8.png", 4)
    const photo9 = new Photo("user9", "../assets/User9.png", 4)

    photos.push(photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9)
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
        users.push(new User(txtName, txtData, "../assets/User1.png", 1, 1, txtPassword, txtEmail, "criança"))
        localStorage.setItem("users", JSON.stringify(users))
        alert(`Novo Utilizador ${txtName}!`)
        //depois de criado, volta para a pagina inicial
        location.reload()
    } else {
        alert(`Utilizador ${txtName} já existe!`)
    }
}
//funçao que irá verificar se a informaçao dada pelo utilizador esta certa e dara login se sim
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

export function getTextLevel(txtName) {
    for (const user of users) {
        if (user.name === txtName) {
            return user.textNivel
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

export function addTextExp(txtName, exp) {
    for (const user of users) {
        if (user.name == txtName) {
            let ex = user.textExp;

            user.textExp = +ex + +exp;

            localStorage.setItem("users", JSON.stringify(users))
        }
    }
}

//função que devolve a informaçao do utilizador (página de perfil)
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
export function adminInfo(txtName) {
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
export function alterUserAdmin(txtName, email, password, entity) {
    for (const user of users) {
        if (user.name == txtName) {
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
export function getPhotos(txtName) {
    let photoArray = []
    for (const photo of photos) {
        console.log("Photo is being assessed");
        for (const user of users) {
            if (user.name == txtName) {
                console.log(photo.Level);
                if (user.nivel >= photo.Level) {
                    console.log("Photo meets requirement");
                    photoArray.push(photo.url)
                } else {

                    console.log("Photo " + photo.name + " does not meet requirement");
                }
            }
        }
    }
    return photoArray
}

//função que devolve a exp do utilizador

export function getExp(txtName) {
    for (const user of users) {
        if (user.name == txtName) {
            return user.exp
        }
    }
}


//função que da reset a experiencia do utilizador e aumenta o nivel
export function resetExp(txtName) {
    for (const user of users) {
        if (user.name == txtName) {
            user.exp = 0
            user.nivel++;
            sessionStorage.setItem("level", user.nivel)
            localStorage.setItem("users", JSON.stringify(users))
        }
    }
}

//função pa ver se o user é admin
export function checkUser(txtName) {
    for (const user of users) {
        if (user.name == txtName) {
            if (user.entidade == "admin") {
                return true
            } else {
                return false
            }
        }
    }
}

//função que retorna todos os utilizadores

export function returnAllUsers() {
    return users
}

//funçao que envia uma sugestao

export function sendSugest(user, txt) {
    let sugestion1 = new Sugestion(user, txt)
    sugestions.push(sugestion1)
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
}

//funçao que retorna as sugestões

export function returnSugestion(user) {
    for (const sugestion of sugestions) {
        if (sugestion.user == user) {
            return sugestion
        }
    }
}