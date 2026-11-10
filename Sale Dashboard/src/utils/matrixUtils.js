
export const getProductColor = (value) => {
  if (
    value === null ||
    value === undefined ||
    typeof value !== "number" ||
    value < 0 ||
    value > 100
  ) {
    return "blue";
  }

  if (value <= 33.33) return "green";

  if (value <= 66.66) return "yellow";

  return "red";
};

export const getColorClass = (color) => {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };

  return colorClasses[color] || colorClasses.blue;
};
