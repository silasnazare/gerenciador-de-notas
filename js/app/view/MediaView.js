class MediaView extends View {

    constructor(elemento) {
        super(elemento)
    }

    _template(media) {
        return `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome do Aluno</th>
                    <th>Primeira Nota</th>
                    <th>Segunda Nota</th>
                    <th>Frequência (%)</th>
                    <th>Prova Final</th>
                    <th>Média</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                ${media.getCampos().map(campo => `  
                    <tr>
                        <td>${campo.nome}</td>
                        <td>${campo.primeiraNota}</td>
                        <td>${campo.segundaNota}</td>
                        <td>${campo.frequencia}</td>
                        <td>${campo.provaFinal}</td>
                        <td>${campo.getMedia()}</td>
                        <td>${campo.getResultado()}</td>
                    </tr>
                `).join('')}                
            </tbody>
           <tfoot>
                <td colspan="1">Média da Turma</td>
                <td>
                    ${(media.getCampos().reduce((total, campo) => 
                    total + campo.getMedia(), 0.0)).toFixed(2)}
                </td>
            </tfoot>   
        </table>`;
    }
}