import './styles.css';
import { NavLink } from "react-router-dom";

export default function ProductLink() {
  return (
    <main>
      <section>
        <nav className="container">
          <div className="nav-link-container">
            <NavLink
              to="/product/computers"
              className={({ isActive }) =>
                isActive
                  ? "product-nav-link-item product-active"
                  : "product-nav-link-item"
              }
            >
              Computadores
            </NavLink>
            <NavLink
              to="/product/electronics"
              className={({ isActive }) =>
                isActive
                  ? "product-nav-link-item product-active"
                  : "product-nav-link-item"
              }
            >
              Eletrônicos
            </NavLink>
            <NavLink
              to="/product/book"
              className={({ isActive }) =>
                isActive
                  ? "product-nav-link-item product-active"
                  : "product-nav-link-item"
              }
            >
              Livros
            </NavLink>
          </div>
        </nav>
      </section>
    </main>
  );
}
