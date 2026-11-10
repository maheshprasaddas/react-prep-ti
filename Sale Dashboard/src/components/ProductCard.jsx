
import {
  getProductColor,
  getColorClass,
} from "../utils/matrixUtils";

function ProductCard({
  product,
  isSelected,
  selectedMatrix,
  onClick,
}) {
  const measurement = selectedMatrix
    ? product.measurements[selectedMatrix]
    : null;

  // Only the selected product gets a measurement color
  const color = isSelected
    ? getProductColor(measurement)
    : "blue";

  const backgroundClass = getColorClass(color);

  return (
    <button
      onClick={() => onClick(product.id)}
      className={`
        ${backgroundClass}
        min-h-40 w-full rounded-xl p-5
        text-white shadow-md
        transition-all duration-200
        hover:scale-[1.02]
        ${isSelected ? "ring-4 ring-gray-800" : ""}
      `}
    >
      <span className="text-lg font-semibold">
        {product.name}
      </span>

      {isSelected && selectedMatrix && (
        <p className="mt-3 text-sm">
          {measurement ?? "No measurement"} 
          {typeof measurement === "number" ? "%" : ""}
        </p>
      )}
    </button>
  );
}

export default ProductCard;
