import ProductItem from "../../../../components/ProductItem";

export default function Electronics() {
  const category = "Eletronicos"
  return (
    <div className="container">
      <ProductItem category={category} />
    </div>
  );
}
