import ProductItem from "../../../../components/ProductItem";

export default function Book() {
  const category = "Books"
  return (
    <div className="container">
      <ProductItem category={category} />
    </div>
  );
}
