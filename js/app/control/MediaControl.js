class MediaControl {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputNome = $('#nome')
        this._inputPrimeiraNota = $('#primeiraNota')
        this._inputSegundaNota = $('#segundaNota')
        this._inputFrequencia = $('#frequencia')
        this._inputProvaFinal = $('#provaFinal')

        this._media = new Media()

        this._mediaView = new MediaView($('#js-mediaView'))

        this._mediaView.update(this._media)
        
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#js-mensagem-view'))
        this._mensagemView.update(this._mensagem)
    }
    
    adiciona(event) {
        
        event.preventDefault()

        let campo = this._criaGerenciadorDeMedias()
        this._media.adiciona(campo);
        this._mediaView.update(this._media )

        this._limpaFormulario()

        this._mensagem.texto = `Aluno adicionado com sucesso.`
        this._mensagemView.update(this._mensagem )
    }

    _criaGerenciadorDeMedias() {
        return new GerenciadorDeMedias(
            this._inputNome.value,
            this._inputPrimeiraNota.value,
            this._inputSegundaNota.value,
            this._inputFrequencia.value,
            this._inputProvaFinal.value
        )
    }

    _limpaFormulario() {
        this._inputNome.value = ''
        this._inputPrimeiraNota.value = ''
        this._inputSegundaNota.value = ''
        this._inputFrequencia.value = ''
        this._inputProvaFinal.value = ''

        this._inputNome.focus()
    }
}