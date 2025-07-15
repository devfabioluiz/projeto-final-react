import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer-content">
      <div className="footer-column">
        <h3>Shopping Bayside</h3>
        <p>Experiência completa em compras online, qualidade e entrega rápida.</p>
      </div>

      <div className="footer-column">
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="/contato" aria-label="Página de contato">Contato</a></li>
          <li><a href="/sobre" aria-label="Sobre nós">Sobre Nós</a></li>
          <li><a href="/politica" aria-label="Política de Privacidade">Política de Privacidade</a></li>
        </ul>
      </div>

      <div className="footer-column info-icons">
        <h4>Informações</h4>
        <p><FiMapPin className="icon" aria-hidden="true" /> Av. das Américas, 1234 - Barra da Tijuca, RJ</p>
        <p><FiClock className="icon" aria-hidden="true" /> Seg a Sáb: 10h às 22h</p>
        <p><FiPhone className="icon" aria-hidden="true" /> (21) 3333-4444 / (21) 99999-9999</p>
      </div>

      <div className="footer-column">
        <h4>Siga-nos</h4>
        <div className="social-icons" aria-label="Redes sociais do Shopping Bayside">
          <a href="https://facebook.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/shoppingbayside" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Shopping Bayside. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;