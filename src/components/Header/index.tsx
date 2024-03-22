import "./styles.css";
import { NavLink } from "react-router-dom";
import homeSvg from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container header-nav-items">
        <div className="header-nav-link">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "header-nav-link-items header-active"
                : "header-nav-link-items"
            }
          >
            Ínicio
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "header-nav-link-items header-active"
                : "header-nav-link-items"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "header-nav-link-items header-active"
                : "header-nav-link-items"
            }
          >
            Sobre nós
          </NavLink>
        </div>
        <Link to="/">
          <img src={homeSvg} alt="Página de ínicio" />
        </Link>
      </nav>
    </header>
  );
}
