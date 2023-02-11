//rotas dinamicas

import { useState } from "react"



export default function Form() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario() {
        await fetch('/api/form', {
            method:'POST',
            body: JSON.stringify({nome, idade})
        })

        setNome("")
        setIdade(0)

    const resp = await fetch('/api/form')
    const usuarios = await resp.json()
    setUsuarios(usuarios) 

    }

    function renderizarUsuarios() {
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome} tem {usuario.idade} de idade</li>
        })
    }


    return (
        <div style={{
         display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
        }}>
            <h1>F O R M - Integrando com a API #2</h1>
            <div><input type="text" value={nome} 
            onChange={ e => setNome(e.target.value)}/>
            <input type="number" value={idade}
            onChange={e => setIdade(+e.target.value)}/>
            <button onClick={salvarUsuario} >Enviar</button>
            </div>
            <ul> 
                {renderizarUsuarios()}
            </ul>
        </div>
    )
}