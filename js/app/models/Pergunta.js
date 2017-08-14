class Pergunta {

    constructor() {
        this._perguntas = [{
                "pergunta": "Como você se sente?",
                "respostas": ["bem", "mal", "mais ou menos", "horrivel"],
                "respostaCerta": "bem"
            },
            {
                "pergunta": "Quantos anos teve jesus?",
                "respostas": [33, 12, 17, 69],
                "respostaCerta": 32
            },
            {
                "pergunta": "Quando o Brasil foi descoberto?",
                "respostas": [1995, 1500, 1300, "Não tinha coberta pra descobrir"],
                "respostaCerta": 1500
            }
        ]
    }


    get perguntas() {
        return this._perguntas;
    }
}