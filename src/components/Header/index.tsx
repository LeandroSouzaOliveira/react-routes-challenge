import "./styles.css";
import { NavLink } from "react-router-dom";
import homeSvg from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <nav className="container nav-items">
        <div className="nav-link">
          <NavLink to="" className="nav-link-items">Ínicio</NavLink>
          <NavLink to="" className="nav-link-items">Produtos</NavLink>
          <NavLink to="" className="nav-link-items">Sobre nós</NavLink>
        </div>
        <img src={homeSvg} alt="Página de ínicio" />
      </nav>
    </header>
  );
}
