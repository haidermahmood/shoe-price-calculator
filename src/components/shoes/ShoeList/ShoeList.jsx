import * as React from "react";
import "./ShoeList.css";
import ShoeItem from "./ShoeItem/ShoeItem";

const shoeList = [
  {
    id: 1,
    name: "Air Jordan 1 Mid Smoke Grey Black (2022)",
    initialListingPrice: "€164",
    imageUrl:
      "https://www.klekt.com/_next/image?url=https%3A%2F%2Fprocess.filestackapi.com%2FAazSisOjUQx2TZJQX0PdNz%2Fresize%3Dheight%3A614%2Cwidth%3A900%2Cfit%3Acrop%2Foutput%3Dcompress%3Atrue%2Cquality%3A60%2Cstrip%3Atrue%2Fauto_image%2Fcache%3Dexpiry%3A31536000%2Fhttps%3A%2F%2Fstorage.googleapis.com%2Fkt-apiv2-default%2Fc367e302-defd-48dc-af7a-fb976231e7a2..png&w=1920&q=75",
  },
  {
    id: 2,
    name: "Nike Air Force 1 Low White '07 (2021)",
    initialListingPrice: "€100",
    imageUrl:
      "https://www.klekt.com/_next/image?url=https%3A%2F%2Fprocess.filestackapi.com%2FAazSisOjUQx2TZJQX0PdNz%2Fresize%3Dheight%3A614%2Cwidth%3A900%2Cfit%3Acrop%2Foutput%3Dcompress%3Atrue%2Cquality%3A60%2Cstrip%3Atrue%2Fauto_image%2Fcache%3Dexpiry%3A31536000%2Fhttps%3A%2F%2Fcdn.filestackcontent.com%2F9D9DcDswTZut3ITzsw5s&w=1920&q=75",
  },

  {
    id: 3,
    name: "Nike Air Max BW Sport Red (2022)",
    initialListingPrice: "€234",
    imageUrl:
      "https://www.klekt.com/_next/image?url=https%3A%2F%2Fprocess.filestackapi.com%2FAazSisOjUQx2TZJQX0PdNz%2Fresize%3Dheight%3A614%2Cwidth%3A900%2Cfit%3Acrop%2Foutput%3Dcompress%3Atrue%2Cquality%3A60%2Cstrip%3Atrue%2Fauto_image%2Fcache%3Dexpiry%3A31536000%2Fhttps%3A%2F%2Fstorage.googleapis.com%2Fkt-apiv2-default%2F6c217743-2728-47f6-93a0-2c9a170af4dd..jpg&w=1920&q=75",
  },
];

export default function ShoeList({ setShoeSelected }) {
  const [shoes, setShoes] = React.useState(shoeList);

  const selectShoe = (shoe) => {
    const updatedShoes = shoes.map((s) =>
      s.id === shoe.id
        ? { ...s, isSelected: true }
        : { ...s, isSelected: false }
    );
    setShoes(updatedShoes);
    setShoeSelected(shoe);
  };

  return (
    <div className="shoeListContainer">
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe} selectShoe={selectShoe} />
      ))}
    </div>
  );
}
