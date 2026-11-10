
export const products = [
  {
    id: 1,
    name: "iPhone 14",
    measurements: {
      saleImpacted: 20,
      avgSale: 45,
      notSold: null,
    },
  },
  {
    id: 2,
    name: "iPhone 15",
    measurements: {
      saleImpacted: 55,
      avgSale: 80,
      notSold: 10,
    },
  },
  {
    id: 3,
    name: "iPhone 16",
    measurements: {
      saleImpacted: 90,
      avgSale: 25,
      notSold: null,
    },
  },
  {
    id: 4,
    name: "iPhone 17",
    measurements: {
      saleImpacted: null,
      avgSale: 60,
      notSold: 75,
    },
  },
];

export const matrixOptions = [
  { label: "Sale Impacted", value: "saleImpacted" },
  { label: "Avg Sale", value: "avgSale" },
  { label: "Not Sold", value: "notSold" },
];
