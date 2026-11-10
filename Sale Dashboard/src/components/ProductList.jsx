
import ProductCard from "./ProductCard";

function ProductList({
  products,
  selectedProductId,
  selectedMatrix,
  onProductSelect,
}) {
  return (
    <div className="border-b pb-6 md:border-b-0 md:border-r md:px-5">

      <h2 className="mb-6 text-xl font-semibold">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProductId === product.id}
            selectedMatrix={selectedMatrix}
            onClick={onProductSelect}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductList;
