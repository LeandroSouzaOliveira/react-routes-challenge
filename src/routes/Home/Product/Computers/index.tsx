import ProductItem from "../../../../components/ProductItem";

export default function Computers() {
  const category = "Computadores";

  return (
    <div className="container">
      <ProductItem category={category} />
    </div>
  );
}
