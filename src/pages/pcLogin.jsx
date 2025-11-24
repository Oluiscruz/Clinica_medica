import { User, ChevronLeft, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.scss'


export default function PacienteLogin() {

    const navigate = useNavigate();

    const voltarInicio = (e) => {
        e.preventDefault();
        navigate('/')
    }
    
    return (
        <div className="container-login">
            <div className="voltar">
                <button onClick={voltarInicio}>
                    <i><ChevronLeft size={23} /></i><p>Voltar</p>
                </button>
            </div>
            <div className="box-login">
                <div className="banner-login">
                    <i><User size={55}/></i>
                    <h1>Bem vindo(a) de volta</h1>
                    <p>Acesso para pacientes</p>
                </div>
                <form>
                    <label><span>*</span>Email</label>
                    <input type="email" placeholder='exemplo@email.com' />

                    <label><span>*</span>Senha</label>
                    <input type="password" placeholder='******' />
                </form>
                <button type='submit'>Entrar</button>
                <div className="ir-cadastrar">
                    <p>Não tem uma conta? <Link to='/paciente/cadastro'>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}