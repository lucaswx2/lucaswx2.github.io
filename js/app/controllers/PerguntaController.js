class PerguntaController {
    constructor() {

        this._selecionado = null;
        this._perguntas = document.querySelectorAll(".question")
        this._perguntaModel = new Pergunta();
        this._questoes = this._perguntaModel.perguntas;
        //console.log();
        this._perguntaView = new PerguntaView(document.querySelector("#perguntaView"));

        this.trocaPergunta();

    }


    seleciona(elemento) {
        this._perguntas.forEach(n => n.classList.remove("selected"));
        elemento.classList.add("selected");
        this._selecionado = elemento.textContent;
    }

    trocaPergunta() {
        let questionRand = this._questoes[Math.floor(Math.random() * this._questoes.length)];
        console.log(questionRand);
        this._perguntaView.update(questionRand);
    }
}