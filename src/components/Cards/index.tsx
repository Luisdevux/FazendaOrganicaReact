import "./style.css";

export default function Cards() {
    return (
        <main className="card-galeria">
            <div className="card">
                <div>
                    <img src="/uva.png" alt="Foto de uma carreira de uvas" className="card-imagem" />
                </div>
                <div>
                    <h2 className="card-titulo">Produção de Uvas</h2>
                </div>
                <div>
                    <p className="card-texto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque quam quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?
                    </p>
                </div>
                <div>
                    <a href="#" className="card-link">Saiba Mais</a>
                </div>
            </div>
            <div className="card">
                <div>
                    <img src="/gado.png" alt="Foto de 2 vacas" className="card-imagem" />
                </div>
                <div>
                    <h2 className="card-titulo">Gado de corte</h2>
                </div>
                <div>
                    <p className="card-texto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque quam quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?
                    </p>
                </div>
                <div>
                    <a href="#" className="card-link">Saiba Mais</a>
                </div>
            </div>
            <div className="card">
                <div>
                    <img src="/laranja.png" alt="Foto de uma carreira de laranjas" className="card-imagem" />
                </div>
                <div>
                    <h2 className="card-titulo">Produção de laranjas</h2>
                </div>
                <div>
                    <p className="card-texto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque quam quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?
                    </p>
                </div>
                <div>
                    <a href="#" className="card-link">Saiba Mais</a>
                </div>
            </div>
            <div className="card">
                <div>
                    <img src="/ovelha.png" alt="Foto de um rebanho de ovelhas" className="card-imagem" />
                </div>
                <div>
                    <h2 className="card-titulo">Caprinos</h2>
                </div>
                <div>
                    <p className="card-texto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque quam quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?
                    </p>
                </div>
                <div>
                    <a href="#" className="card-link">Saiba Mais</a>
                </div>
            </div>
        </main>
    )
}