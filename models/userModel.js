export default class User {
    constructor(name, data, photo, nivel, textNivel, password, email, entidade) {
        this.name = name
        this.data = data
        this.photo = photo
        this.nivel = nivel
        this.textNivel = textNivel
        this.exp = 0
        this.textExp = 0
        this.password = password
        this.email = email
        this.entidade = entidade
        this.currentQuest = 0
    }
}