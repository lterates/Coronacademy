import Question from "../models/questionModel.js"

export let questions = [];

//Ir a base de dados buscar as questoes ou cria las
if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    // Só vai entrar aqui a primeira vez
    const question1 = new Question(1, "Qual a melhor maneira de te protegeres contra o Covid19?", "Evita tocar na cara$Lavar as mãos com frequência$Usar máscara$Todas as anteriores", "Todas as anteriores", 1)
    const question2 = new Question(2, "Como se passa o virus?", "Águas não potáveis$Pelo ar$Pelo sangue$Por gotas minúsculas de água que viajam pelo ar", "Por gotas minúsculas de água que viajam pelo ar", 1)
    const question3 = new Question(3, "Quais são sintomas de Covid19?", "Dores de estômago$Tosse$Dor de dentes$Visão turva", "Tosse", 1)
    const question4 = new Question(4, "Conseguimos sempre perceber se alguém tem COVID-19?", "Só depois do teste$Sim$Não$Sim, pelos sintomas", "Só depois do teste", 1)
    const question5 = new Question(5, "Porque é importante tomar a vacina?", "Não ter sintomas$Prevenir a doença$Evitar a doença$Não passar a doença", "Prevenir a doença", 2)
    const question6 = new Question(6, "Qual o grupo mais afetado pela doença", "Crianças$Adultos (50+)$Terceira idade$Jovens (até 30)", "Terceira idade", 2)
    const question7 = new Question(7, "Que tipo de máscaras devemos usar?", "Cirúrgicas$Máscaras de pano$Viseira é suficiente$Qualquer máscara", "Cirúrgicas", 2)
    const question8 = new Question(8, "COVID-19 é curável?", "Sim$Sim, mas o tratamento depende da gravidade$Não, nunca$Sim, facilmente", "Sim, mas o tratamento depende da gravidade", 2)
    const question9 = new Question(9, "Onde se pensa ter originado a Covid19?", "India$Europa$China$EUA", "China", 3)
    const question10 = new Question(10, "Porque é que a COVID-19 originou uma pandemia?", "Porque é um vírus$Porque originou no Panamá$Porque infeta muita gente em muitos sítios ao mesmo tempo$Porque originou em 2019", "Porque infeta muita gente em muitos sítios ao mesmo tempo", 3)
    const question11 = new Question(11, "O que é o isolamento profilático?", "É quando te isolas por motivo nenhum$É isolar parte da tua casa$É isolares-te para prevenir o contágio$É ires morar para outro país", "É isolares-te para prevenir o contágio", 3)
    const question12 = new Question(12, "Quem pode terminar o isolamento profilático?", "A autoridade de saúde competente$A pessoa em si$A nossa mãe$Deus", "A autoridade de saúde competente", 3)
    const question13 = new Question(13, "A vacina contra a COVID-19 é obrigatória?", "A vacina é voluntária$Sim é obrigatória$Só para pessoas com menos de 30 anos$Só para pessoas com mais de 30 anos", "A vacina é voluntária", 4)
    const question14 = new Question(14, "Quem já esteve infetado precisa de ser vacinado?", "Sim, é mais seguro$Não$Não, porque já estão protegidas$Sim, para curar a doença", "Sim, é mais seguro", 4)
    const question15 = new Question(15, "É Possível estar infetado com COVID-19 e não ter sintomas?", "Sim$Não$Só se estiver vacinado$Só se tiver menos de 60 anos", "Sim", 4)
    const question16 = new Question(16, "A perda do olfato é um possível sintoma de COVID-19?", "Sim$Não$Só se tiver mais de 60 anos$Só se tiver menos de 60 anos", "Sim", 4)
    const question17 = new Question(17, "Se tiver sintomas, posso ir à escola?", "Sim$Não, devo ficar em casa e ligar para o SNS 24$Posso mas com máscara$Posso mas com autorização dos pais", "Não, devo ficar em casa e ligar para o SNS 24", 5)
    const question18 = new Question(18, "É possível transmitir o vírus mesmo sem sintomas?", "Sim$Não$Só se não usar máscara$Sim, através do olhar", "Sim", 5)
    const question19 = new Question(19, "Se os meus amigos ficarem infetados, devo:", "Chamar-lhes nomes$Ficar em isolamento, porque posso também estar infetado(a)$Fugir deles$Ter medo de voltar a falar com eles", "Ficar em isolamento, porque posso também estar infetado(a)", 5)
    const question20 = new Question(20, "A perda do paladar é um possível sintoma de COVID-19?", "Sim$Não$Só se tiver mais de 60 anos$Só se tiver menos de 60 anos", "Sim", 5)
    const question21 = new Question(21, "Se tiver alguns sintomas de COVID-19, devo:", "Tomar medicação sozinho(a)$Ficar em isolamento em casa e ligar para o SNS 24$Não fazer nada e esperar que passe$Ir na mesma à escola, visto que não me devo preocupar", "Ficar em isolamento em casa e ligar para o SNS 24", 6)
    const question22 = new Question(22, "Qual dos seguintes não é um sintoma de COVID-19?", "Febre$Tosse$Esquecer do trabalho de casa$Dor muscular", "Esquecer do trabalho de casa", 6)
    const question23 = new Question(23, "O que é a imunidade de grupo?", "Quando pessoas do mesmo grupo se portam da mesma forma$Quando toda a gente já esteve doente$Quando todos são vacinados$Quando todos criam uma resistência natural ao vírus", "Quando todos criam uma resistência natural ao vírus", 6)
    const question24 = new Question(24, "Durante quanto tempo devemos lavar as nossas mãos?", "Não devemos lavar as mãos!$20 segundos$1 hora$1 Minuto", "20 segundos", 6)
    const question25 = new Question(25, "Durante quanto tempo é possível estar infetado sem saber?", "Até 2 dias$Até 1 mês$Entre 2 dias e 2 semanas$Entre 5 dias e 1 mês", "Entre 2 dias e 2 semanas", 7)
    const question26 = new Question(26, "Durante quanto tempo pode o vírus sobreviver numa superfície?", "Alguns minutos$Algumas horas$Alguns segundos$Alguns dias", "Alguns dias", 7)
    const question27 = new Question(27, "Quando não posso lavar as mãos, devo usar um álcool gel com pelo menos:", "20% de álcool$40% de álcool$16% de álcool$60% de álcool", "60% de álcool", 7)
    const question28 = new Question(28, "Qual é a distância de segurança que devo respeitar?", "1 Kilómetro$20 Metros$1 Metro$2 Metros", "2 Metros", 7)

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