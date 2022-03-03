import * as React from "react";
import LocationSelection from "./LocationSelection";

export default function BuyerLocation({ setBuyerLocation }) {
  return (
    <div className="locationContainer">
      <div>Buyer Location</div>
      <LocationSelection setLocation={setBuyerLocation} />
    </div>
  );
}
