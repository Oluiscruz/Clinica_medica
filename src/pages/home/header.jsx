import { Link } from "react-router-dom";
import { HeartPlus } from 'lucide-react';
import '../../styles/home/home.scss';

export default function Header() {

    function soon() {
        alert('🚧 Em construção! 🚧')
    }

    return (
        <header className="header">
            <div className="logo">
                <h1> <i><HeartPlus size={40} /></i> Mais Vida</h1>
            </div>

            <div className="links-header">
                <li><a href="https://wa.me/5581999155751?text=🧑🏽‍💻 Olá Luis, vi seu projeto sobre a clínica médica e gostaria de algumas informações">Contato</a></li>
                <li><a href="#" onClick={soon}>Sobre</a></li>
                <li>
                    <button className='account'>
                        <Link to='/entrar'>Consultas & Exames</Link>
                    </button>
                </li>
            </div>
        </header>
    )
}