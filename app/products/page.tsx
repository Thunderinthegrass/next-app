import Link from "next/link";

const ProductList = () => {

  const products = [
    {id: 1, name: "Продукт 1"},
    {id: 2, name: "Продукт 2"},
    {id: 3, name: "Продукт 3"},
    {id: 4, name: "Продукт 4"},
    {id: 5, name: "Продукт 5"},
  ]

  return (
    <div>
      <div className="flex items-center">
        <h1>Продукты</h1>
        <div className="flex items-center justify-center flex-col">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>Продукт {product.id}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;