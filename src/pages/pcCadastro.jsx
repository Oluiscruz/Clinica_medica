import { User, ChevronLeft, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/pcCadastro.scss'


export default function PacienteCadastro() {

    const navigate = useNavigate();

    const voltarInicio = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className="container-cadastro">
            <div className="voltar">
                <button onClick={voltarInicio}>
                    <i><ChevronLeft size={23} /></i><p>Voltar</p>
                </button>
            </div>
            <div className="box-cadastro">
                <div className="banner-cadastro">
                    <i><User size={55} /></i>
                    <h1>Criar conta</h1>
                    <p>Acesso para pacientes</p>
                </div>
                <form>
                    <div className="lado1">

                        <label><span>*</span>Nome</label>
                        <input type="name" placeholder='Seu nome' />

                        <label><span>*</span>Telefone</label>
                        <input type="text" placeholder='(00) 00000-0000' />
                        
                        <label><span>*</span>Sexo</label>
                        <select name="sexo" id="">
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="lado2">

                        <label><span>*</span>CPF</label>
                        <input type="text" placeholder='000.000.000-00' />

                        <label><span>*</span>Email</label>
                        <input type="email" placeholder='exemplo@email.com' />

                        <label><span>*</span>Senha</label>
                        <input type="password" placeholder='******' />
                    </div>
                </form>
                <button type='submit'>Cadastrar</button>
                <div className="ir-logar">
                    <p>Já possui uma conta? <Link to='/paciente/login'>Fazer login</Link></p>
                </div>
            </div>
        </div >
    )
}