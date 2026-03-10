const ProductReview = async ({params}: {params: Promise<{productId: string; reviewId: string}>}) => {

  const { productId, reviewId } = await params;

  return (
    <div>
      <div className="flex items-center">
        <h1>Отзыв {reviewId} о продукте {productId}</h1>
      </div>
    </div>
  );
};

export default ProductReview;