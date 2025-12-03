import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../../styles/home/home.scss'

export default function Footer() {
    return (
        <footer className="footer" >

            <div className="info-footer">
                <p>© 2025 Mais Vida. Todos os direitos reservados.</p>
                <span>Projeto totalmente desenvolvido por <a href="https://github.com/Oluiscruz">.Oluisdev</a></span>
            </div>

            <div className="position-footer">

                <div className="linguage-footer">
                    <p>linguagens utilizadas no desenvolvimento:</p>
                    <ul>
                        <li>MySQL  |</li>
                        <li>Node.js  |</li>
                        <li>React.js  |</li>
                        <li>Scss</li>
                    </ul>
                </div>

                <div className="contato-footer">
                    <p>Entre em contato comigo e conheça mais sobre meus trabalhos:</p>
                    <div className="icons-footer">
                        <li><a href="https://github.com/Oluiscruz"><FaGithub size={28} /></a></li>
                        <li><a href=" https://wa.me/5581999155751?text=🧑🏽‍💻 Olá Luis, vi seu projeto sobre a clínica médica e gostaria de algumas informações"><FaWhatsapp size={28} /></a></li>
                        <li><a href="https://www.instagram.com/oluisdev/"><FaInstagram size={28} /></a></li>
                    </div>
                </div>
            </div>
        </footer >
    )
}