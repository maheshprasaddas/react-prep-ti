
function Properties({
  selectedProduct,
  selectedMatrix,
  matrixOptions,
}) {
  const selectedMatrixLabel = matrixOptions.find(
    (option) => option.value === selectedMatrix
  )?.label;

  return (
    <div className="border-b pb-6 md:border-b-0 md:border-r md:pr-5">

      <h2 className="mb-6 text-xl font-semibold">
        Properties
      </h2>

      {selectedProduct ? (
        <div className="space-y-4">

          <div>
            <p className="text-sm text-gray-500">
              Product Name
            </p>
            <p className="font-semibold">
              {selectedProduct.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Selected Matrix
            </p>
            <p className="font-semibold">
              {selectedMatrixLabel || "Not selected"}
            </p>
          </div>

        </div>
      ) : (
        <p className="text-gray-400">
          Select a product to view properties
        </p>
      )}

    </div>
  );
}

export default Properties;
