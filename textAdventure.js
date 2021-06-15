const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//state do(s) obejtos que o user tenha
let state = {}

//inicia o jogo com o state vazio e na opção 1
function startGame() {
    state = {}
    showTextNode(1)
}

//funçao que faz o display das prompts de cada fase do jogo
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
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
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

//text nodes aka as prompts e as opções. cada uma passa parametro de id, text da prompt e opções que por sua vez têm um state associado 
//e atribuem o step seguinte do jogo
const textNodes = [{
        id: 1,
        text: 'You wake up in a strange place and you see a jar of blue goo near you.',
        options: [{
                text: 'Take the goo',
                setState: {
                    blueGoo: true
                },
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You venture forth in search of answers to where you are when you come across a merchant.',
        options: [{
                text: 'Trade the goo for a sword',
                //verificação se o utilizador tem os objetos necessarios para o step em questão
                requiredState: (currentState) => currentState.blueGoo,
                //novo state depois de executada a "função" do node
                setState: {
                    blueGoo: false,
                    sword: true
                },
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {
                    blueGoo: false,
                    shield: true
                },
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [{
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [{
            text: 'Restart',
            //game over
            nextText: -1
        }]
    },
    {
        id: 5,
        text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 6,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [{
            text: 'Explore the castle',
            nextText: 7
        }]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [{
                text: 'Try to run',
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 9,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [{
            text: 'Congratulations. Play Again.',
            nextText: -1
        }]
    }
]

//inicia o jogo

startGame()