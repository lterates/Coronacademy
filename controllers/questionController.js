import Question from "../models/questionModel.js"

export let questions = [];

//Ir a base de dados buscar as questoes ou cria las
if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    // Só vai entrar aqui a primeira vez
    const question1 = new Question(1, "Qual a melhor maneira de te protegeres contra o Covid19?", "Evita tocar na cara$Lavar as mãos com frequência$Usar máscara$Todas as anteriores", "Todas as anteriores", 1)
    const question2 = new Question(2, "Como se passa o virus?", "Águas não potáveis$Pelo ar$Pelo sangue$Pelo ar e pelo contacto direto com o virus", "Pelo ar e pelo contacto direto com o virus", 1)
    const question3 = new Question(3, "Quais são sintomas de Covid19?", "Dores de estômago$Tosse$Dor de dentes$Visão turva", "Tosse", 1)
    const question4 = new Question(4, "Conseguimos sempre perceber se alguém tem covid?", "Só depois do teste$Sim$Não$Sim, pelos sintomas", "Só depois do teste", 1)
    const question5 = new Question(5, "Porque é importante tomar a vacina?", "Não ter sintomas$Prevenir a doença$Evitar a doença$Não passar a doença", "Prevenir a doença", 2)
    const question6 = new Question(6, "Qual o grupo mais afetado pela doença", "Crianças$Adultos (50+)$Terceira idade$Jovens (até 30)", "Terceira idade", 2)
    const question7 = new Question(7, "Que tipo de máscaras devemos usar?", "Cirurgicas$Mascaras de pano$Viseira é suficiente$Qualquer mascara", "Cirurgicas", 2)
    const question8 = new Question(8, "A Covid19 é curável?", "Sim$Sim, mas o tratamento depende da gravidade$Não, nunca$Sim, facilmente", "Sim, mas o tratamento depende da gravidade", 2)
    const question9 = new Question(9, "Onde se pensa ter originado a Covid19?", "India$Europa$China$EUA", "China", 3)
    const question10 = new Question(10, "Porque é que a Covid19 originou uma pandemia?", "Porque é um vírus$Porque originou no panamá$Porque infeta muita gente em muitos sítios ao mesmo tempo$Porque originou em 2019", "Porque infeta muita gente em muitos sítios ao mesmo tempo", 3)
    const question11 = new Question(11, "O que é o isolamento profilático?", "É quando tu te isolas por motivo nenhum$É isolar parte da tua casa$É isolares-te para prevenir o contágio$É ires morar para outro país", "É isolares-te para prevenir o contágio", 3)
    const question12 = new Question(12, "Quem pode terminar o isolamento profilático?", "A autoridade de saúde competente$A pessoa em si$A nossa mãe$Deus", "A autoridade de saúde competente", 3)
    const question13 = new Question(13, "A vacina contra a Covid-19 é obrigatória?", "A vacina é voluntária$Sim é obrigatória$Só para pessoas com menos de 30 anos$Só para pessoas com mais de 30 anos", "A vacina é voluntária", 4)
    const question14 = new Question(14, "Quem já esteve infetado precisa de ser vacinado?", "Sim, é mais seguro$Não$Não, porque já estão protegidas$Sim, para curar a doença", "Sim, é mais seguro", 4)
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