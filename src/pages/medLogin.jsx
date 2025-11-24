import { Stethoscope, ChevronLeft, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/medicoLogin.scss'


export default function MedicoLogin() {

    const navigate = useNavigate();

    const voltarInicio = (e) => {
        e.preventDefault();
        navigate('/')
    }
    
    return (
        <div className="container-login">
            <div className="voltar-home">
                <button onClick={voltarInicio}>
                    <i><ChevronLeft size={23} /></i><p>Voltar</p>
                </button>
            </div>
            <div className="box-medico-login">
                <div className="banner-login">
                    <i><Stethoscope size={55}/></i>
                    <h1>Bem vindo(a) de volta</h1>
                    <p>Acesso para médicos</p>
                </div>
                <form>
                    <label><span>*</span>Email</label>
                    <input type="email" placeholder='exemplo@email.com' />

                    <label><span>*</span>Senha</label>
                    <input type="password" placeholder='******' />
                </form>
                <button type='submit'>Entrar</button>
                <div className="ir-cadastrar">
                    <p>Não tem uma conta? <Link to='/medico/cadastro'>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}