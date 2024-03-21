import './styles.css';
import { NavLink } from "react-router-dom";
import Card from "../../../components/Card";

export default function Product() {
  return (
    <main>
      <section>
        <nav className="container">
          <div className="nav-link-container">
            <NavLink to="" className="product-nav-link-item">Computadores</NavLink>
            <NavLink to="" className="product-nav-link-item">Eletrônicos</NavLink>
            <NavLink to="" className="product-nav-link-item">Livros</NavLink>
          </div>
        </nav>
        <Card />
      </section>
    </main>
  );
}
