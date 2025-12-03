import { Link } from "react-router-dom";
import '../../styles/home/main.scss';

export default function Main() {
    return (
        <main className="banner-home">
            <div className="content-banner">
                <h1>Cuide da sua saúde com <span>Mais Vida</span></h1>
                <p>Sua clínica médica online para agendamento de consultas e exames de forma rápida e prática.</p>
                <button className='get-started'>
                    <Link to='/entrar'>Começar Agora</Link>
                </button>
            </div>
        </main>
    )
}