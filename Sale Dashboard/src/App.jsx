
import { useState } from "react";

import { products, matrixOptions } from "./data/product.js";

import Properties from "./components/Properties";
import ProductList from "./components/ProductList";
import MatrixSelector from "./components/MatrixSelector";
import Indication from "./components/Indication";

function App() {
  // Currently selected product
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Currently selected matrix
  const [selectedMatrix, setSelectedMatrix] = useState("");

  // Find selected product from dummy data
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  // Get measurement of selected product
  const measurement = selectedProduct && selectedMatrix
    ? selectedProduct.measurements[selectedMatrix]
    : null;

  // Handle product click
  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    setSelectedMatrix("");
  };

  // Handle matrix selection
  const handleMatrixChange = (matrixValue) => {
    setSelectedMatrix(matrixValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 rounded-xl bg-white p-6 shadow md:grid-cols-[1fr_2fr_1fr]">

        {/* Properties */}
        <Properties
          selectedProduct={selectedProduct}
          selectedMatrix={selectedMatrix}
          matrixOptions={matrixOptions}
        />

        {/* Products */}
        <ProductList
          products={products}
          selectedProductId={selectedProductId}
          selectedMatrix={selectedMatrix}
          onProductSelect={handleProductSelect}
        />

        {/* Matrix */}
        <MatrixSelector
          selectedProduct={selectedProduct}
          selectedMatrix={selectedMatrix}
          matrixOptions={matrixOptions}
          onMatrixChange={handleMatrixChange}
        />

      </div>

      {/* Indication */}
      <Indication />

    </div>
  );
}

export default App;
