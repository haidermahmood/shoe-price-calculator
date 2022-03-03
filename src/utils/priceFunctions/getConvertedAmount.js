import { exchangeRates } from "../../constants/constants";

export const getConvertedAmount = (currency, amount, location) => {
  let exchangeRate = {};
  if (currency === "£") {
    exchangeRate = exchangeRates.UK;
  } else if (currency === "$") {
    exchangeRate = exchangeRates.US;
  } else if (currency === "€") {
    exchangeRate = exchangeRates.EU;
  }

  switch (location) {
    case "UK":
      return amount * exchangeRate.gbp;
    case "US":
      return amount * exchangeRate.usd;
    case "EU":
      return amount * exchangeRate.euro;
    default:
      return amount;
  }
};
