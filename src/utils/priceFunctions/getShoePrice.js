import { deliveryCharges } from "../../constants/constants";
import { getConvertedAmount } from "./getConvertedAmount";
import { getShoeProcessingFee } from "./getShoeProcessingFee";

export const getShoePrice = (
  listPriceString,
  sellerLocation,
  buyerLocation
) => {
  const currency = listPriceString[0];
  const listPrice = Number(listPriceString.slice(1));
  const convertedListPrice = getConvertedAmount(
    currency,
    listPrice,
    buyerLocation
  );
  const convertedShoeProcessingFee = getConvertedAmount(
    currency,
    getShoeProcessingFee(listPrice, sellerLocation),
    buyerLocation
  );
  const deliveryCharge =
    sellerLocation === buyerLocation ? 0 : deliveryCharges[buyerLocation];

  const totalPrice =
    convertedListPrice + convertedShoeProcessingFee + deliveryCharge;

  return totalPrice.toFixed(2);
};
