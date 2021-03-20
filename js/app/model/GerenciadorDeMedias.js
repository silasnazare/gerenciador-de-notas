class GerenciadorDeMedias {
    constructor(nome, primeiraNota, segundaNota, frequencia, provaFinal) {
        this._nome = nome
        this._primeiraNota = primeiraNota
        this._segundaNota = segundaNota
        this._frequencia = frequencia
        this._provaFinal = provaFinal

        Object.freeze(this)
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get primeiraNota() {
        return this._primeiraNota
    }

    set primeiraNota(primeiraNota) {
        this._primeiraNota = primeiraNota
    }

    get segundaNota() {
        return this._segundaNota
    }

    set segundaNota(segundaNota) {
        this._segundaNota = segundaNota
    }

    get frequencia() {
        return this._frequencia
    }

    set frequencia(frequencia) {
        this._frequencia = frequencia
    }

    get provaFinal() {
        return this._provaFinal
    }

    set provaFinal(provaFinal) {
        this._provaFinal = provaFinal
    }

    getMedia() {
        return (parseFloat(this._primeiraNota) + parseFloat(this._segundaNota)) / 2
    }

    getResultado() {
        if (this._frequencia < 75) {
            return 'Reprovado'
        }
        else if (this.getMedia() < 30) {
            return 'Reprovado'
        }
        else if ((parseFloat(this.getMedia()) + parseFloat(this._provaFinal) / 2) < 50) {
            return 'Reprovado'
        }
        else {
            return 'Aprovado'
        }
    }
}