import './Header.css';
import logo from '../../assets/Bayside Logo.jpg';

export default function Header() {
  const menuItems = [
    'HOME',
    'O SHOPPING',
    'LOJAS',
    'ACONTECE',
    'LOCALIZAÇÃO',
    'FALE COM O SÍNDICO'
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Bayside Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}><a href="#">{item}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
