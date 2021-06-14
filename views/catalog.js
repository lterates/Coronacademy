//import de todas as funçoes necessarias de catalogController
import { createCard, getCardInfo, writeComment, getComments, saveLike, verifyLike, getTags, writeTag, countTags, getTagsUser,createCardSort } from "../controllers/catalogController.js";

//ir buscar a sessionstorage o user atual e o seu nivel
const user = sessionStorage.getItem('user');
const level = sessionStorage.getItem('level')
let userCapitalized = user.charAt(0).toUpperCase() + user.slice(1)


//criar variaveis dos varios botoes e containers
const cardContainer = document.getElementById("cardContainer");
const btnLogOut = document.getElementById("btnLogOut");
const userName = document.getElementById("userName");
const btnBusca = document.getElementById("btnBusca");
const sort = document.getElementById("sort");

//verificar se o utilizador econtra se logado senão envia o de volta para o menu inicial
if (user) {
  //carregar todas as cartas
  userName.innerText = userCapitalized + " Nível: " + level;
  cardContainer.innerHTML = createCard(level);
  let images = document.getElementsByClassName("view");
  //fazer as cartas clicaveis e que abram uma modal
  for (const image of images) {
    image.addEventListener("click", function () {
      openModal(this.id);
    })
  }
  btnBusca.addEventListener("click", function(){
    search()
  })  
//log out da conta
  //userName.innerText = user + " level:" + level;
  btnLogOut.addEventListener("click", function () {
    sessionStorage.clear();
    location.href = "../index.html"
  })

  sort.addEventListener("change", function(){
      cardContainer.innerHTML =  createCardSort(level, sort.value);
  })
} else {
  alert("user not loged in!");
  location.href = "/index.html"
}

//função que pesquisa se alguma carta tem algures no nome a combinaçao de letras pesquisada pelo utilizador
  function search() {
    let input, filter, container, card, a, i, txtValue;
    input = document.getElementById("txtbusca");
    filter = input.value.toUpperCase();
    container = document.getElementById("cardContainer");
    card = container.getElementsByClassName("view");
    let tags = getTagsUser(user)
    //itera sobre todas as cartas para ver se alguma tem essas palavras
    for (i = 0; i < card.length; i++) {
        a = card[i].getAttribute("id")[0];
        let cardName = getCardInfo(a);
        txtValue = cardName[0];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }   
    }
}


//função que abre a modal da informação das cartas
function openModal(id) {
  let cardInfo = getCardInfo(id);
  let canLike = verifyLike(id, user);
  //verifica se o utilzador ja deu like ou nao se ja o icon do like muda de cor para simbolizar que ja foi clicado
  if(canLike){
    swal({
      html: '<div class="card">' +
        '<img src="' + cardInfo[2] + '" alt="Avatar" style="width:100%; height:100% display: block; margin-left: auto;margin-right: auto">' +
        '<div class="container">' +
        '<h3><b>' + cardInfo[0] + '</b></h3>' +
        '<h4><b>' + cardInfo[3] + '</b></h4>' +
        '<p>' + cardInfo[1] + '</p>' +
        '</div>' +
        '<div class = "row">' +
        '<div class ="col-md-3">' +
        '</div>' +
        '<div class ="col-md-2" id="btnLike">' +
        '<i id="heart" class="fas fa-heart fa-2x" style:"text-align:right">' + cardInfo[4] + '</i>' +
        '</div>' +
        '<div class ="col-md-2" id="btnComment">' +
        '<i  class="fas fa-comment fa-2x">' + cardInfo[5] + '</i>' +
        '</div>' +
        '<div class ="col-md-2" id="btnTag">' +
        '<i  class="fas fa-tags fa-2x">'+countTags(id, user)+'</i>' +
        '</div>' +
        '<div class ="col-md-3">' +
        '</div>' +
        '</div>' +
        '</div>',
      preConfirm: () => {
  
  
      },
  
      allowOutsideClick: () => !swal.isLoading()
    })
  }else{
    swal({
      html: '<div class="card">' +
        '<img src="' + cardInfo[2] + '" alt="Avatar" style="width:100%; height:100% display: block; margin-left: auto;margin-right: auto">' +
        '<div class="container">' +
        '<h3><b>' + cardInfo[0] + '</b></h3>' +
        '<h4><b>' + cardInfo[3] + '</b></h4>' +
        '<p>' + cardInfo[1] + '</p>' +
        '</div>' +
        '<div class = "row">' +
        '<div class ="col-md-3">' +
        '</div>' +
        '<div class ="col-md-2" id="btnLike">' +
        '<i id="heart" class="fas fa-heart fa-2x" style=" color:#f45f42">' + cardInfo[4] + '</i>' +
        '</div>' +
        '<div class ="col-md-2" id="btnComment">' +
        '<i  class="fas fa-comment fa-2x">' + cardInfo[5] + '</i>' +
        '</div>' +
        '<div class ="col-md-2" id="btnTag">' +
        '<i  class="fas fa-tags fa-2x">'+countTags(id, user)+'</i>' +
        '</div>' +
        '<div class ="col-md-3">' +
        '</div>' +
        '</div>' +
        '</div>',
      preConfirm: () => {
  
  
      },
  
      allowOutsideClick: () => !swal.isLoading()
    })
  }
  
  // Get the modal
  //variaveis dos elementso da moda necessarios
  const commentModal = document.getElementById("commentModal");
  const btnComment = document.getElementById("btnComment")
  const commentList = document.getElementById("commentList")
  const comentar = document.getElementById("comentar")
  const btnLike = document.getElementById("btnLike")
  const btnTag = document.getElementById("btnTag")
  const tagModal = document.getElementById("tagModal")
  const tagList = document.getElementById("tagList")
  const addTag = document.getElementById("addTag")

  //eventlistener para dar like na carta
  btnLike.addEventListener("click", function(){
   let canLike = verifyLike(id, user)
   if(canLike){
     saveLike(id, user)
     openModal(id)
     cardContainer.innerHTML = createCard(level);
     //volta a dar o eventlistener as cartas
     let images = document.getElementsByClassName("view");
     for (const image of images) {
       image.addEventListener("click", function () {
         openModal(this.id);
       })
     }

   }else{
    
   }
  })

  //event listener para abrir a modal dos comentarios
  btnComment.addEventListener("click", function () {
    window.onclick = function (event) {
      if (event.target == commentModal) {
        commentModal.style.display = "none";
      }
    }
    swal.close();
    commentModal.style.display = "block";
    commentarios();
    //funçao que escreve os comentarios todos na modal
    function commentarios() {
      commentList.innerHTML = "";
      let comments = getComments(id);
      let txt = ""
      for (let i = 0; i < comments.length; i++) {
        if (comments[i] == id) {
          txt += "<hr>"
        } else {
          txt += "<p> " + comments[i] + ": " + comments[i + 1] + " </p>"
          i++;
        }
      }
      commentList.innerHTML += txt;
    }

    //eventlistener que le o que o utilizador escreveu na caixa de texto e escreve na lista de comentarios na modal
    comentar.addEventListener("click", function () {
      let d = new Date()
      let dateString = d.getHours() + ":" + d.getMinutes() + " - " + d.getDate() + "/" + d.getMonth()
      const txt = document.getElementById("txtComment").value
      writeComment(id, txt,  dateString + " - " + user);
      commentarios();
      document.getElementById("txtComment").value = ""
      cardContainer.innerHTML = createCard(level);

      //volta a dar o eventlistener as cartas
      let images = document.getElementsByClassName("view");
      for (const image of images) {
        image.addEventListener("click", function () {
          openModal(this.id);
        })
      }
      location.href = "/html/catalog.html"
    })

  })
  //event listener para abrir a modal das tags
  btnTag.addEventListener("click", function () {
    window.onclick = function (event) {
      if (event.target == tagModal) {
        tagModal.style.display = "none";
        //volta a dar o eventlistener as cartas
        let images = document.getElementsByClassName("view");
        for (const image of images) {
          image.addEventListener("click", function () {
            openModal(this.id);
          })
        }
      }
    }
    swal.close();
    tagModal.style.display = "block";
    tags();
    //funçao que escreve os comentarios todos na modal
    function tags() {
      tagList.innerHTML = "";
      let tags = getTags(id, user);
      let txt = ""
      for (let i = 0; i < tags.length; i++) {
        if(tags[i] != ""){
          txt += '<p>'+ tags[i] + " </p>"
          txt += "<hr>"
        }
        
      }
      tagList.innerHTML += txt;
    }
    //eventlistener que le o que o utilizador escreveu na caixa de texto e escreve na lista de tags na modal
    addTag.addEventListener("click", function () {
      const txt = document.getElementById("txtTag").value
      writeTag(id, txt, user);
      tags();
      document.getElementById("txtTag").value = ""
      cardContainer.innerHTML = createCard(level);

      //volta a dar o eventlistener as cartas
      let images = document.getElementsByClassName("view");
      for (const image of images) {
        image.addEventListener("click", function () {
          openModal(this.id);
        })
      }
    })
  })
}