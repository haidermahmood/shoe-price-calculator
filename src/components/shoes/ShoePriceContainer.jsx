import * as React from "react";
import "./ShoePriceContainer.css";
import ShoeList from "./ShoeList/ShoeList";
import SellerLocation from "./LocationSelection/SellerLocation";
import BuyerLocation from "./LocationSelection/BuyerLocation";
import PriceText from "./PriceText";
import { getShoePrice } from '../../utils/priceFunctions/getShoePrice';


export default function ShoePriceContainer() {
  const [sellerLocation, setSellerLocation] = React.useState("");
  const [buyerLocation, setBuyerLocation] = React.useState("");
  const [shoeSelected, setShoeSelected] = React.useState({});
  const [calculatedPrice, setCalculatedPrice] = React.useState(0);

  React.useEffect(() => {
    if (
      shoeSelected &&
      shoeSelected.initialListingPrice &&
      sellerLocation &&
      buyerLocation
    ) {
      setCalculatedPrice(
        getShoePrice(
          shoeSelected?.initialListingPrice,
          sellerLocation,
          buyerLocation
        )
      );
    }
  }, [shoeSelected, sellerLocation, buyerLocation]);

  const priceTextProps = {
    calculatedPrice,
    sellerLocation,
    buyerLocation,
  };

  const shoeListProps = {
    setShoeSelected,
  };

  const sellerLocationProps = {
    sellerLocation,
    setSellerLocation,
  };

  const buyerLocationProps = {
    buyerLocation,
    setBuyerLocation,
  };

  return (
    <div className="showPriceContainer">
      <ShoeList {...shoeListProps} />
      <SellerLocation {...sellerLocationProps} />
      <BuyerLocation {...buyerLocationProps} />
      {shoeSelected &&
        shoeSelected.initialListingPrice &&
        sellerLocation &&
        buyerLocation && <PriceText {...priceTextProps} />}
    </div>
  );
}
