import { Router, useRouter } from "next/router"

export default function Buscar() {

    const Router = useRouter()
    
    const codigo = Router.query.codigo

    return (
        <div>
            <h1> rotas / {codigo} / buscar</h1>
        </div>
    )
}