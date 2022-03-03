import * as React from "react";
import LocationSelection from "./LocationSelection";

export default function SellerLocation({ setSellerLocation }) {
  return (
    <div className="locationContainer">
      <div>Seller Location</div>
      <LocationSelection setLocation={setSellerLocation} />
    </div>
  );
}
