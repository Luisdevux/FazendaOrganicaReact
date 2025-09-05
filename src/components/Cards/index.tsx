import './style.css'

export interface Cards {
    imagem: string,
    titulo: string,
    texto: string
}

export default function Card(props: Cards) {
    return (
        <div className='card'>
            <div className='topo'>
                <h2>{props.titulo}</h2>
                <img src={props.imagem} alt={props.titulo} />
            </div>
            <div className='baixo'>
                {props.texto}
            </div>
            <div className='botao'>
                <a href="#">Saiba mais</a>
            </div>
        </div>
    )
}