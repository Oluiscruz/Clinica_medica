import '../../styles/home/home.scss';
import {useNavigate} from 'react-router-dom';

export default function Section() {

    const navigate = useNavigate();
    const handleTesteGratis = () => {
        navigate('/entrar');
    }


    return (
        <section className="section-home">
            <div className="content-section">
                <h2>Ideal para qualquer tipo de negócio - o foco é a agilização</h2>
                <p>Com o Mais Vida, você pode marcar consultas médicas online com apenas alguns cliques. <br></br>Nossa plataforma intuitiva facilita o processo, permitindo que você escolha a data, tipo de consulta e o profissional de saúde de sua preferência.</p>
                <button onClick={handleTesteGratis}>Teste grátis</button>
            </div>
        </section>
    )
}