import Header from "../../components/Header";
import "./styles.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <p className="not-found-title">Não encontrado!</p>
        </section>
      </main>
    </>
  );
}
