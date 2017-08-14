class PerguntaView {

    constructor(elemento) {
        this._elemento = elemento;

    }

    template(questao) {
        //console.log(questao);
        let pergunta = questao["pergunta"];
        let respostaCerta = questao["respostaCerta"];
        let respostas = questao["respostas"];
        console.log(questao);

        return `                
                <ul class="collection with-header center-align">
                    <li class="collection-header">
                        <h1>${pergunta}</h1>
                    </li>
                    <li class="collection-item avatar selected question" onclick="perguntaController.seleciona(this)" id="option1">
                        <img src="img/spiderman.jpg" alt="Imagem do Homem Aranha" class="circle"> ${respostas[0]}
                    </li>
                    <li class="collection-item avatar question" onclick="perguntaController.seleciona(this)" id="option2">
                        <img src="img/superman.jpg" alt="Imagem do Homem Aranha" class="circle"> ${respostas[1]}
                    </li>
                    <li class="collection-item avatar question" onclick="perguntaController.seleciona(this)" id="option3">
                        <img src="img/ironman.jpg" alt="Imagem do Homem Aranha" class="circle"> ${respostas[2]}
                    </li>
                    <li class="collection-item avatar question" onclick="perguntaController.seleciona(this)" id="option4">
                        <img src="img/batman.jpg" alt="Imagem do Homem Aranha" class="circle"> ${respostas[3]}
                    </li>
                </ul>
                `;
    }

    update(questao) {

        //this._elemento.innerHtml = this.template(questao);
        this._elemento.innerHTML = this.template(questao);
    }
}