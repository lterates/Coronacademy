export default class Question {
    constructor(id, question, answers, correctAnswer, level) {
        this.id = id
        this.question = question
        this.answers = answers
        this.correctAnswer = correctAnswer
        this.level = level
    } 
}