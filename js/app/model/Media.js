class Media {
   
    constructor() {
        this._campos = []
    }

    adiciona (campo) {
        this._campos.push(campo)
    }

    getCampos() {
       return [].concat(this._campos)
    }
}