
function MatrixSelector({
  selectedProduct,
  selectedMatrix,
  matrixOptions,
  onMatrixChange,
}) {
  return (
    <div className="md:pl-5">

      <h2 className="mb-6 text-xl font-semibold">
        Matrix
      </h2>

      <select
        value={selectedMatrix}
        disabled={!selectedProduct}
        onChange={(e) => onMatrixChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
      >
        <option value="">
          Select Matrix
        </option>

        {matrixOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

      </select>

      {!selectedProduct && (
        <p className="mt-3 text-sm text-gray-400">
          Please select a product first
        </p>
      )}

    </div>
  );
}

export default MatrixSelector;
