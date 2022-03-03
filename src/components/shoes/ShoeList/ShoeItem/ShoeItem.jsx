import * as React from "react";
import "./ShoeItem.css";

export default function ShoeItem({ shoe, selectShoe }) {
  return (
    <div
      data-testid="shoe-item"
      onClick={() => selectShoe(shoe)}
      className={
        shoe.isSelected ? "shoeItemContainer selected" : "shoeItemContainer"
      }
    >
      <div>
        <img src={shoe.imageUrl} className="image" alt="Shoe" />
      </div>
      <div className="name">{shoe.name}</div>
      <div className="price">{shoe.initialListingPrice}</div>
    </div>
  );
}
