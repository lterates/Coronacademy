const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const finalPoints = document.getElementById('finalPoints')

import User from "../models/userModel.js"
import {
    addTextExp
} from "../controllers/userController.js"

//state do(s) obejtos que o user tenha
let state = {}

let finalExp = 0;

//inicia o jogo com o state vazio e na opção 1
function startGame() {
    state = {}
    finalExp = 0;
    showTextNode(1)
}

//funçao que faz o display das prompts de cada fase do jogo
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;

    //esconder os botões do html para os substituir pelos que são criados no codigo
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    //associar a cada botão html uma opção e atribuir a mesma class para que o style seja aplicado
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}
//mostra a opção dependendo do state do objeto ou seja: se determinada opção depender de um objeto decide se deve mostrar ou não
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

//função que seleciona a opção e anda com o jogo para a frente ou o recomeça caso o id seja < 0
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        addTextExp(User, option.exp);
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    updateFinalExp(option);

    finalPoints.innerText = "Experiência adquirida: " + finalExp + "/100";
    console.log(finalExp);
}

function updateFinalExp(option) {
    finalExp += option.exp;
}


//text nodes aka as prompts e as opções. cada uma passa parametro de id, text da prompt e opções que por sua vez têm um state associado 
//e atribuem o step seguinte do jogo
const textNodes = [{
        id: 1,
        text: 'Tu acordas com muiiiito sono, mas pronto para outro dia de escola. Estás a preparar a mochila e em cima da mesa está o teu lanche, uma garrafa de água e um frasquinho de desinfetante.',
        options: [{
                text: 'Colocar tudo na mochila',
                setState: {
                    desinfetante: true,
                    agua: true
                },
                nextText: 2,
                exp: 10
            },
            {
                text: 'Colocar apenas o lanche e a água na mochila',
                setState: {
                    agua: true
                },
                nextText: 2,
                exp: 5
            },
            {
                text: 'Colocar apenas o lanche na mochila',
                nextText: 2,
                exp: 1
            }
        ]
    },
    {
        id: 2,
        text: 'Ao sair de casa tu vês a tua mãe a colocar a máscara.',
        options: [{
                text: 'Colocas a tua máscara.',
                //novo state depois de executada a "função" do node
                setState: {
                    mascaraOn: true
                },
                nextText: 4,
                exp: 10
            },
            {
                text: 'Sais de casa.',
                setState: {},
                nextText: 3,
                exp: 0
            }
        ]
    },
    {
        id: 3,
        text: 'Antes de saíres de casa a tua mão dá-te uma máscara para a mão e diz para a pores.',
        options: [{
                text: 'Colocas a tua máscara.',
                setState: {
                    mascaraOn: true
                },
                nextText: 4,
                exp: 10
            },
            {
                text: 'Colocas a máscara mas mal a tua mãe sai da tua beira tu tiras',
                setState: {
                    mascaraOff: true
                },
                nextText: 4,
                exp: 5
            }
        ]
    },
    {
        id: 4,
        text: 'A caminho da escola encontras os teus amigos, o que é que fazes',
        options: [{
                text: 'Colocas a máscara e vais ter com eles',
                requiredState: (currentState) => currentState.mascaraOff,
                setState: {
                    mascaraOn: true
                },
                nextText: 5,
                exp: 5
            },
            {
                text: 'Vais ter com os teus amigos sem meter a máscara',
                requiredState: (currentState) => currentState.mascaraOff,
                nextText: 5,
                exp: 0
            },
            {
                text: 'Como tens a máscara na cara vais ter com os teus amigos',
                requiredState: (currentState) => currentState.mascaraOn,
                nextText: 5,
                exp: 10
            }
        ]
    }, {
        id: 5,
        text: 'Tu chegas à tua escola com os teus amigos e o porteiro diz para vocês desinfetarem as mãos',
        options: [{
                text: 'Desinfetas as mãos',
                nextText: 6,
                exp: 10
            },
            {
                text: 'Não desinfetas as mãos',
                nextText: 7,
                exp: 0
            }
        ]
    },
    {
        id: 6,
        text: 'Após uma manhâ de aulas tu vais para a cantina.',
        options: [{
                text: 'Tiras a máscara mal entras',
                setState: {
                    mascaraOff: true
                },
                nextText: 8,
                exp: 5
            },
            {
                text: 'Ficas com a máscara até te sentares para comer',
                setState: {
                    mascaraOff: true
                },
                nextText: 8,
                exp: 10
            }
        ]
    },
    {
        id: 7,
        text: 'Talvez porque não desinfetaste as mãos desta e outras vezes, acabaste por ficar doente.',
        options: [{
            text: 'Ficas em casa 2 semanas doente sem poder fazer nada',
            nextText: -1,
            exp: 0
        }]
    },
    {
        id: 8,
        text: 'Quando acabas de comer.',
        options: [{
                text: 'Colocas a máscara, desinfetas as mãos e sais da cantina',
                requiredState: (currentState) => currentState.desinfetante,
                setState: {
                    mascaraOn: true
                },
                nextText: 9,
                exp: 10,
            },
            {
                text: 'Colocas a máscara e sais da cantina',
                setState: {
                    mascaraOn: true
                },
                nextText: 9,
                exp: 5
            },
            {
                text: 'Sais da cantina sem máscara',
                setState: {
                    mascaraOff: true
                },
                nextText: 10,
                exp: 0
            }
        ]
    },
    {
        id: 9,
        text: 'Chegas ao recreio e um colega teu diz que tem sede',
        options: [{
                text: 'Ofereces água da tua garrafa',
                requiredState: (currentState) => currentState.agua,
                nextText: 11,
                exp: 0
            },
            {
                text: 'Bebem os dois do mesmo bebedouro',
                nextText: 11,
                exp: 0
            },
            {
                text: 'Vão à cantina e pedem cada um o seu copo de água.',
                nextText: 12,
                exp: 20
            }
                
        ]
    },
    {
        id: 10,
        text: 'Ao final do dia começas a ficar com tosse e acabas por ficar doente.',
        options: [{
            text: 'Se calhar devia começar a usar a máscara mais vezes',
            nextText: -1,
            exp: 0
        }]
    },

    {
        id: 11,
        text: 'No final desse dia, o teu amigo vai para casa mais cedo porque está com sintomas. Tu também tens que fazer o teste, porque vocês beberam da mesma garrafa.',
        options: [{
            text: 'Ambos testam positivo e têm de ficar em casa 2 semanas.',
            nextText: -1,
            exp: 0
        }]
    },
    {
        id: 12,
        text: 'Ao fim do dia, vais para casa e contas aos teus pais sobre o teu dia. Eles ficam contentes em saber que cumpriste todas as regras.',
        options: [{
            text: 'Como cumpriste as regras amanhã podes voltar à escola e estar com os teus amigos',
            nextText: 13,
            exp: 20
        }]
    },
    {
        id: 13,
        text: 'Parabéns, superaste o desafio!!!!! Se quiseres voltar a tentar clica no botão em baixo.',
        options:[{
            text: 'Recomeçar',
            nextText: -1,
            exp: 0
        }]
    }


]

//inicia o jogo

startGame()