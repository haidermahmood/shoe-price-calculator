import * as React from "react";

export default function PriceText({
  sellerLocation,
  buyerLocation,
  calculatedPrice,
}) {
  let currency = "";
  switch (buyerLocation) {
    case "UK":
      currency = "£";
      break;
    case "US":
      currency = "$";
      break;
    case "EU":
      currency = "€";
      break;
    default: currency = "$";
  }
  const priceText = `There is a shoe seller based in ${sellerLocation}. With the buyer based in ${buyerLocation}, the total price of of the shoe would be ${currency}${calculatedPrice}.`;

  return <div className="calculatedPrice">{priceText}</div>;
}
