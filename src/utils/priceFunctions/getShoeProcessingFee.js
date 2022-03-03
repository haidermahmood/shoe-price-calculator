export const getShoeProcessingFee = (listPrice, location) => {
  switch (location) {
    case "UK":
      return listPrice * 0.02;
    case "US":
      return listPrice * 0.04;
    case "EU":
      return listPrice * 0.03;
    default:
      return listPrice;
  }
};
