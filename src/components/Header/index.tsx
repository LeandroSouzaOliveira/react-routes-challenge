import "./styles.css";
import { NavLink } from "react-router-dom";
import homeSvg from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <nav className="container header-nav-items">
        <div className="header-nav-link">
          <NavLink to="/" className="header-nav-link-items">Ínicio</NavLink>
          <NavLink to="/product" className="header-nav-link-items">Produtos</NavLink>
          <NavLink to="/about" className="header-nav-link-items">Sobre nós</NavLink>
        </div>
        <img src={homeSvg} alt="Página de ínicio" />
      </nav>
    </header>
  );
}
