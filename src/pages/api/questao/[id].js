

export default function questao(req,resp) {

    if(req.method === "GET"){
        const id = req.query.id

        resp.status(200).json({
            id,
            enunciado: 'Qual sua comida favorita',
            resposta: [
                'Miojo', 'Feijão', 'Batata Frita', "Purê"
            ]
        })
    } else {
        resp.status(405).send()
    }

}