
function Indication() {
  const indications = [
    {
      label: "Low",
      range: "0% - 33.33%",
      color: "bg-green-500",
    },
    {
      label: "Mid",
      range: "33.34% - 66.66%",
      color: "bg-yellow-400",
    },
    {
      label: "High",
      range: "66.67% - 100%",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="mx-auto mt-6 max-w-7xl rounded-xl bg-white p-5 shadow">

      <h2 className="mb-4 text-lg font-semibold">
        Indication
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        {indications.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <div className={`h-4 w-4 rounded ${item.color}`} />

            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-500">
                {item.range}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Indication;
