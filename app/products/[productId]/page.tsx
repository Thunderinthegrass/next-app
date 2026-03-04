const ProductDetails = async ({params}: {params: Promise<{productId: string}>}) => {

  const { productId } = await params;

  return (
    <div>
      <div className="flex items-center">
        <h1>Описание продукта {productId}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;