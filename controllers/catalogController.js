//fazer import dos models
import Carta from "../models/catalogModel.js";
import Comment from "../models/comentsModel.js"
import Like from "../models/likesModel.js"
import Tag from "../models/tagsModel.js"

//inicializar os arrays utilizados
export let likes = [];
export let cartas = [];
export let comments = [];
export let commentArray = [];
export let tags = [];

//Ir a base de dados buscar as cartas ou cria las
if (localStorage.cartas) {
    cartas = JSON.parse(localStorage.cartas)
} else {
    // Só vai entrar aqui a primeira vez
    const carta1 = new Carta("Sobre a vacina", 1, "../assets/vaccine.png", "A vacinação contra a COVID-19 surge como uma resposta central e de reforço, a par das respostas já existentes, tendo como objetivo prevenir o surgimento de doença grave e das suas consequências, reduzindo a pressão exercida sobre o sistema de saúde.")
    const carta2 = new Carta("Sobre a máscara",2, "../imagens/mask.png", "A utilização de máscara serve para evitar que eu passe a infeção a outra pessoa e evitar apanha-la de outros.")
    const carta3 = new Carta("Sobre o desinfetante", 3, "../assets/gel.png", "Lavar as mãos várias vezes por dia com água e sabão durante pelo menos 20 segundos ou higienizar com um desinfetante (solução ou gel) à base de álcool é a melhor medida para nos protegermos e para protegermos os outros do contágio de covid-19 (e também de outras doenças).")
    const carta4 = new Carta("Sobre o confinamento",4, "../assets/quarentine.png", "Reduzindo o número de contactos, o confinamente reduz o número de contágios.")
    const carta5 = new Carta("Sobre o virus",5, "../assets/covid.png", "A doença por coronavírus (COVID-19) é uma doença infeciosa causada por um coronavírus descoberto recentemente.")
    const carta6 = new Carta("Sobre estar doente", 6, "../assets/sick.png", "A maioria das pessoas que contraem a COVID-19 tem sintomas ligeiros a moderados e recupera sem necessitar de tratamento especial.")
    const carta7 = new Carta("Proteger os outros", 7, "../assets/grandparents.png", "Cumprir as normas é importante não só por nós, mas também pelos outros que, como os nosso avós, podem ficar mais doentes do que nós.")
    const carta8 = new Carta("Animais e o corona-virus", 8, "../assets/dog.png", "Cães e gatos podem contrair um coronavírus próprio das suas espécies. Ele nada tem a ver com a Covid-19 e não é transmitido para o ser humano.")
    const carta9 = new Carta("Sobre o distanciamento", 9, "../assets/distancing.png", "Recomenda-se manter a distância física (um mínimo de um ou, idealmente, dois metros) em relação às outras pessoas em locais públicos e evitar grandes aglomerados de pessoas para reduzir o risco de infeção através das gotículas respiratórias.")

    cartas.push(carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8,carta9)
    localStorage.setItem("cartas", JSON.stringify(cartas))
}

//Ir a base de dados buscar os comments ou cria los 
if (localStorage.comments) {
    comments = JSON.parse(localStorage.comments)
} else {
    // Só vai entrar aqui a primeira vez
    const comment1 = new Comment("muito fixe", 1, "ana")
    comments.push(comment1)
    localStorage.setItem("comments", JSON.stringify(comments))
}


//Ir a base de dados buscar os likes ou cria los
if (localStorage.likes) {
    likes = JSON.parse(localStorage.likes)
} else {
    // Só vai entrar aqui a primeira vez
    //const like1 = new Like("Ana", 1)
    const like2 = new Like("ze", 1)
    likes.push(like2)
    localStorage.setItem("likes", JSON.stringify(likes))
}

//Ir a base de dados buscar as tags ou cria las
if (localStorage.tags) {
    tags = JSON.parse(localStorage.tags)
} else {
    // Só vai entrar aqui a primeira vez
    const tag1 = new Tag(1, "joao", "laranja")
    const tag2 = new Tag(1, "ana", "lindo")
    tags.push(tag1, tag2)
    localStorage.setItem("tags", JSON.stringify(tags))
}

//funçao que cria as cartas do catalogo
export function createCard(level) {
    let start = 1;
    let div = "";
    for (const carta of cartas) {
        if (start <= level) {
            //se o numero da carta criada corresponder a um id contar os likes os comments para dar display
            if (start == carta.id) {
                let cont = countComments(carta.id);
                console.log("CONT: " + cont)

                let likeCont = countLikes(carta.id);
                div += '<div class="col-lg-3 p-3 col-md-10 view" id="' + carta.id + '" > <div class="card" style="height:100%;"><img class="card-img-top" src="../assets/cardbg.png" alt="Card image" style="width:100%"><div class="card-img-overlay"><img class="card-img-top" src="' + carta.card + '" alt="Card image cap" style="width:100%; height:60%"><div class="card-body"><h4 class="card-text" style="text-align:center">' + carta.name + '</h4><div class = "row" style="text-align:center"><div class ="col-md-6"><i class="fas fa-heart fa-2x">' + likeCont + '</i></div><div class ="col-md-6"><i class="fas fa-comment fa-2x">' + cont + '</i></div></div></div></div></div></div>'
            }
            //incrementa com a criação de novas cartas
            start++;
        }
    }
    //preencher o resto das cartas que o utilizador ainda nao desbloqueiou com o card back
    // i<12 - start + i, meaning i menor que o numero total de cartas menos as que já existem no inicio + 1 pq o array começa em 1
    for (let i = 0; i < 12 - start+1; i++) {

        div += '<div class="col-lg-3 p-3 col-md-10"> <img class="img-fluid d-block" src="../assets/cardbg.png" style=""></div>'
    }
    return div
}
//ORDENAR A - Z
//funçao que cria as cartas do catalogo
export function createCardSort(level, sort) {
    let start = 1;
    let div = "";
    if(sort =="A-Z"){
        cartas.sort((a, b) => (a.name > b.name) ? 1 : -1)
        for (const carta of cartas) {
            if (start <= level) {
                if(carta.id <= level){    
                    let cont = countComments(carta.id);
                    let likeCont = countLikes(carta.id);
                    div += '<div class="col-lg-3 p-3 col-md-10 view" id="' + carta.id + '" > <div class="card" style="height:100%;"><img class="card-img-top" src="../assets/vaccine.png" alt="Card image" style="width:100%"><div class="card-img-overlay"><img class="card-img-top" src="' + carta.card + '" alt="Card image cap" style="width:100%; height:60%"><div class="card-body"><h4 class="card-text" style="text-align:center">' + carta.name + '</h4><div class = "row" style="text-align:center"><div class ="col-md-6"><i class="fas fa-heart fa-2x">' + likeCont + '</i></div><div class ="col-md-6"><i class="fas fa-comment fa-2x">' + cont + '</i></div></div></div></div></div></div>'
                
                start++;
            }
            }
        }
        //preencher o resto das cartas que o utilizador ainda nao desbloqueiou com o card back
        for (let i = 0; i < 12 - level; i++) {
    
            div += '<div class="col-lg-3 p-3 col-md-10"> <img class="img-fluid d-block" src="../assets/cardbg.png" style=""></div>'
        }
        return div

//ORDENAR Z-A

    }else if(sort =="Z-A"){
        cartas.sort((a, b) => (a.name < b.name) ? 1 : -1)
        for (const carta of cartas) {
            if (start <= level) {
                if(carta.id <= level){ 
                    let cont = countComments(carta.id);
    
                    let likeCont = countLikes(carta.id);
    
                    div += '<div class="col-lg-3 p-3 col-md-10 view" id="' + carta.id + '" > <div class="card" style="height:100%;"><img class="card-img-top" src="../assets/vaccine.png" alt="Card image" style="width:100%"><div class="card-img-overlay"><img class="card-img-top" src="' + carta.card + '" alt="Card image cap" style="width:100%; height:60%"><div class="card-body"><h4 class="card-text" style="text-align:center">' + carta.name + '</h4><div class = "row" style="text-align:center"><div class ="col-md-6"><i class="fas fa-heart fa-2x">' + likeCont + '</i></div><div class ="col-md-6"><i class="fas fa-comment fa-2x">' + cont + '</i></div></div></div></div></div></div>'
                
                start++;
            }
            }
        }
        //preencher o resto das cartas que o utilizador ainda nao desbloqueiou com o card back
        for (let i = 0; i < 12 - level; i++) {
    
            div += '<div class="col-lg-3 p-3 col-md-10"> <img class="img-fluid d-block" src="../assets/cardbg.png" style=""></div>'
        }
        return div
    }
    
}

//funçao para contar o numero de comments numa carta
export function countComments(cardId) {
    let cont = 0;
    for (const comment of comments) {
        if (comment.cardId == cardId) {
            if(comment.comment != ""){
                cont++;
                console.log("CONTAR COMENTARIOS CRL: " + cont)
            }
        }
    }
    return cont;
}

//funçao para contar o numero de likes numa carta
export function countLikes(cardId) {
    let cont = 0;
    for (const like of likes) {
        if (like.card == cardId) {
            cont++;
        }
    }

    return cont;
}

//funçao que conta o numero de tags numa carta
export function countTags(cardId, user) {
    let cont = 0;
    for (const tag of tags) {
        if (tag.id == cardId) {
            if(tag.user == user)
                if(tag.tag !=""){
                    cont++;
                }
            
        }
    }

    return cont;
}

//funçao que guarda na localstorage um comment escrito
export function writeComment(cardId, text, userName) {
    comments.push(new Comment(text, cardId, userName));
    localStorage.setItem("comments", JSON.stringify(comments))
}

//funçao que guarda na localstorage os likes
export function saveLike(cardId, userName) {
    likes.push(new Like(userName, cardId));
    localStorage.setItem("likes", JSON.stringify(likes));
}

//funçao que vai buscar a localstorage todos os comments de dada card, e guarda os num array
export function getComments(id) {
    commentArray = [];
    for (const comment of comments) {
        if (comment.cardId == id) {
            if (comment.comment != "") {
                commentArray.push(comment.userName, comment.comment, id)
            }
        }
    }
    return commentArray;
}

//funçao que verifica se o utilizador ja deu like num certo card para impedir que um user de mais que um like
export function verifyLike(id, user) {
    for (const like of likes) {
        if (like.card == id) {
            if (like.userName == user) {
                return false;
            }
        }
    }
    return true;
}

//funçao que ira buscar todas as informaçoes de certa carta(nome, descriçao, imagem, categoria, likes e comments)
export function getCardInfo(id) {
    for (const carta of cartas) {
        if (carta.id == id) {
            let cardInfo = [];
            const commentCount = countComments(carta.id)
            const likeCount = countLikes(carta.id)
            cardInfo.push(carta.name, carta.descricao, carta.card, likeCount, commentCount);
            return cardInfo
        }
    }
}


//funçao que devolve todas as tags de dada carta do respetivo utilizador
export function getTags(id, user) {
    let cardTag = []
    for (const tag of tags) {
        if (tag.id == id) {
            if (tag.user == user) {
                
                cardTag.push(tag.tag)
            }
        }
    }
    return cardTag
}

//funçao que devolve todas as tags de um utilizador
export function getTagsUser(user){
    let userTag =[]
    for(const tag of tags){
        if(tag.user == user){
            userTag.push(tag.tag)
        }
    }
    return userTag
}

//funçao que guarda na localstorage um tag escrito
export function writeTag(cardId, text, userName) {
    tags.push(new Tag(cardId, userName, text));
    localStorage.setItem("tags", JSON.stringify(tags))
}

//funçao que cria uma carta nova admin

export function createNewCard(name,card, descricao){
    const id = cartas[cartas.length - 1].id + 1;
    let nums = JSON.parse(localStorage.getItem("cartasF"))
    
    let cartasNew = []
    for (const num of nums) {
        num.id++;
        
        cartasNew.push(num)
    }
    localStorage.setItem("cartasF", JSON.stringify(cartasNew))
    
    const cartaNova = new Carta(name, id, card,descricao)
    cartas.push(cartaNova)
    
    localStorage.setItem("cartas", JSON.stringify(cartas))
}

//funçao que retorna todas as cartas

export function getAll(){
    return cartas
}

//função que retorna a informaçao de certa carta admin

export function getCard(txtName){
    for (const carta of cartas) {
        if(carta.name == txtName){
            return carta
        }
    }
}


//função que remove uma carta

export function removeCard(txtName){
    for (const carta of cartas) {
        if(carta.name == txtName){
            var index = cartas.indexOf(carta);
            if (index !== -1) cartas.splice(index, 1);

            localStorage.setItem("cartas", JSON.stringify(cartas))
        }
    }
}

//funçao que altera a carta
export function alterCard(cartaName, newCarta, desc, link) {
    for (const carta of cartas) {
        if (carta.name == cartaName) {
            carta.name = newCarta   
            carta.descricao = desc
            carta.card = link
            localStorage.setItem("cartas", JSON.stringify(cartas))

        }
    }
}
