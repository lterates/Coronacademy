import Question from "../models/questionModel.js"

export let questions = [];

//Ir a base de dados buscar as questoes ou cria las
if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    // Só vai entrar aqui a primeira vez
    const question1 = new Question(1, "Que tipo de peixe é o Nemo?", "Peixe Gato Invertido$Peixe Espada$Peixe Dourado$Peixe Palhaço", "Peixe Palhaço", 1)
    const question2 = new Question(2, "Em que país é mais conhecida a carpa?", "India$Brazil$Japão$Espanha", "Japão", 1)
    const question3 = new Question(3, "Qual destes é um peixe?", "Baleia Branca$Leão Marinho$Golfinho$Tubarão Martelo", "Tubarão Martelo", 1)
    const question4 = new Question(4, "Qual destes peixes tem cerca de 30 subespécies conhecidas?", "Sardinha$Peixe Espada$Peixe Dourado$Peixe Palhaço", "Peixe Palhaço", 1)
    const question5 = new Question(5, "Que peixe é mais comum nos nossos aquários?", "Sardinha$Peixe Espada$Peixe Dourado$Peixe Palhaço", "Peixe Dourado", 2)
    const question6 = new Question(6, "Onde não podes encontrar peixes de água doce?", "Rios$Mares$Lagos$Pântanos", "Mares", 2)
    const question7 = new Question(7, "Porque é que o Peixe Disco tem esse nome?", "Por causa do que come$Por causa de onde vive$Pelo seu aspeto$Por causa dos seus inimigos naturais", "Pelo seu aspeto", 2)
    const question8 = new Question(8, "Que pokemon é inspirado na carpa?", "Pikachu$Squirtle$Magikarp$Psyduck", "Magikarp", 2)
    const question9 = new Question(9, "Qual destes peixes é carnívoro?", "Sardinha$Betta$Peixe Dourado$Bacalhau", "Betta", 3)
    const question10 = new Question(10, "Porque é que o peixe escalar é invulgar para uma peixe exótico?", "Não tem cores vibrantes$É muito pequeno$Também existe em água fria$Está em vias de extinsão", "Não tem cores vibrantes", 3)
    const question11 = new Question(11, "Onde podemos encontrar todos os peixes de água quente desbloqueados?", "Sudeste Asiático$América do Sul$Austrália$Ártico", "América do Sul", 3)
    const question12 = new Question(12, "Em quantas cores diferentes podemos encontrar o peixe dourado?", "3 cores$1 cor, dourado$7 cores$5 cores", "5 cores", 3)
    const question13 = new Question(13, "De que se alimenta a carpa?", "De tudo, até melância$De algas$De insetos$De outros peixes mais pequenos", "De tudo, até melância", 4)
    const question14 = new Question(14, "Qual destes peixes é menos conhecido?", "Peixe Dourado$Peixe Gato Invertido$Peixe Espada$Peixe Palhaço", "Peixe Gato Invertido", 4)
    const question15 = new Question(15, "Qual destes peixes tem barbatanas com espinhos?", "Peixe Disco$Betta$Peixe Espada$Carpa", "Peixe Espada", 4)
    const question16 = new Question(16, "O que é que um caranguejo e um peixe gato invertido têm em comum?", "Pinças$A sua cor$Ambos nadam para trás$O seu tamanho", "Ambos nadam para trás", 4)
    const question17 = new Question(17, "Onde fica a espada do peixe espada?", "No nariz$Nas costas$Não há uma espada$Toda a sua forma é a espada", "No nariz", 5)
    const question18 = new Question(18, "Que parte do corpo é bastante grande no peixe telescópio?", "As barbatanas$Os olhos$A cauda$A boca", "Os olhos", 5)
    const question19 = new Question(19, "Que tipo de peixe é a Dori (do filme Nemo)?", "Tubarão$Betta$Espiga Azul$Peixe Gato Invertido", "Espiga Azul", 5)
    const question20 = new Question(20, "Qual destes peixes não é um peixe cirurgião?", "Espiga Azul$Betta$Cirurgião Amarelo$Olho Riscado", "Betta", 5)
    const question21 = new Question(21, "Há algo muito interessante no cavalo marinho. O quê?", "O macho carrega os ovos$Podem girar a cabeça 360º$Brilham no escuro$Conseguem reconhecer o dono", "Peixe Espada", 6)
    const question22 = new Question(22, "O peixe bolha é uma subespécie de um outro peixe. Qual?", "Peixe Telescópio$Espiga Azul$Peixe Dourado$Tubarão", "Peixe Dourado", 6)
    const question23 = new Question(23, "Qual é uma característica curiosa do peixe telescópio?", "É muito grande$Vê muito mal$Nadam para trás$Nunca dormem", "Vê muito mal", 6)
    const question24 = new Question(24, "Há algo muito interessante no cavalo marinho. O quê?", "O macho carrega os ovos$Podem girar a cabeça 360º$Brilham no escuro$Conseguem reconhecer o dono", "Peixe Espada", 6)
    const question25 = new Question(25, "Qual destes peixes se torna maior quando é ameaçado?", "Peixe Espada$Cavalo Marinho$Peixe Balão$Olhos-Bolha", "Peixe Balão", 7)
    const question26 = new Question(26, "Quanto mede, no máximo, o tubarão gato?", "2 metros$5 metros$80 centímetros$50 centímetros", "80 centímetros", 7)
    const question27 = new Question(27, "Como podemos encontrar tubarões gato?", "Em cardume$Sozinhos$Com peixes de outras espécies$Num aquário", "Em cardume", 7)
    const question28 = new Question(28, "Qual destes peixes se torna maior quando é ameaçado?", "Peixe Espada$Cavalo Marinho$Peixe Balão$Olhos-Bolha", "Peixe Balão", 7)

    questions.push(question1, question2, question3, question4, question5, question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20,question21,question22, question23, question24,question25,question26,question27,question28)
    localStorage.setItem("questions", JSON.stringify(questions))
}
//funçao que devolve uma string com a pergunta e as suas respostas
export function setQuestion(level) {
    let quests = []

    for (const question of questions) {
        if (question.level <= level) {
            let txt = ""
            txt += question.question + "$"
            txt += question.answers + "$"
            txt += question.correctAnswer + "$"
            txt += question.id
            quests.push(txt);
        }
    }

    return quests
}

export function getAllQuizz() {
    return questions
}

export function getQuizzInfo(quizz) {
    for (const question of questions) {
        if (question.question == quizz) {
            let txt = ""
            txt += question.question + "$"
            txt += question.answers + "$"
            txt += question.correctAnswer
            return txt
        }
    }
}


//funçao que altera a pergunta
export function alterQuest(quizz, newQuizz, ans1, ans2, ans3, ans4, corAns) {
    for (const question of questions) {
        if (question.question == quizz) {
            question.question = newQuizz
            question.answers = ans1 + "$" + ans2 + "$" + ans3 + "$" + ans4
            question.correctAnswer = corAns
            localStorage.setItem("questions", JSON.stringify(questions))

        }
    }
}

//funçao que adiciona uma pergunta nova

export function addQuest(quizz, ans1, ans2, ans3, ans4, corAns) {
    const id = questions[questions.length - 1].id + 1;
    const question1 = new Question(id, quizz, ans1 + "$" + ans2 + "$" + ans3 + "$" + ans4, corAns, 1)
    questions.push(question1)
    localStorage.setItem("questions", JSON.stringify(questions))
}

//função que remove uma pergunta

export function removeQuest(quizz) {
    for (const question of questions) {
        if (question.question == quizz) {          
            var index = questions.indexOf(question);
            //se uma pergunta for selecionada, apagar
            if (index !== -1) questions.splice(index, 1);

            localStorage.setItem("questions", JSON.stringify(questions))
        }
    }
}