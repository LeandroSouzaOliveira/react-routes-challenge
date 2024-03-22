type Props = {
  category: string;
};

export default function ProductItem({ category }: Props) {
  let products: string[] = [];

  if (category === "Computadores") {
    products = ["Computador 1", "Computador 2", "Computador 3"];
  } else if (category === "Eletronicos") {
    products = ["Eletrônico 1", "Eletrônico 2", "Eletrônico 3"];
  } else {
    products = ["Livro 1", "Livro 2", "Livro 3"];
  }

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  );
}
