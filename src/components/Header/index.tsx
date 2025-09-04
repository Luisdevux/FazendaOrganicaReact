import "./style.css";

export default function Header() {
    return (
        <header>
            <nav className="header-nav">
                <ul>
                    <li>
                        <a href="#inicio" className="header-link">Inicio</a>
                    </li>
                    <li>
                        <a href="#produtos" className="header-link">Produtos</a>
                    </li>
                    <li>
                        <a href="#quemsomos" className="header-link">Quem Somos</a>
                    </li>
                </ul>
            </nav>
            <div className="header-img">
                <img src="/image 9.png" alt="" />
            </div>
        </header>
    )
}