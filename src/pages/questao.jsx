import { useEffect, useState } from "react"

export default function questoes() {
    //aplicanod um estado
    const [questao, setQuestao] = useState(null)

    //declarar estado do componente
    useEffect(() => {
            //retornando uma promessa
        fetch('http://localhost:3000/api/questao/123')
        .then(resp => resp.json())
        //convertando para o back-end
        .then(setQuestao)
    }, [])


    function renderizarRespostas(){
        if(questao) {
            return questao.resposta.map((resp, i) => {
                return <li key={i}>{resp}</li>
        })
        } 
            return false
    } 
    
    return (
        <div>
            <h1>Question</h1>
            <div>
                <span>{questao?.id} {questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}