import { getShoePrice } from "./getShoePrice";

import { exchangeRates } from "../../constants/constants";

describe("Test the getShoePrice for price in €", () => {
  const listPriceString = "€100";

  describe("Test getShoePrice for Seller based in UK", () => {
    const sellerLocation = "UK";
    it("should return correct price for buyer in UK", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "UK");
      expect(shoePrice).toBe("84.66");
    });

    it("should return correct price for buyer in US", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "US");
      expect(shoePrice).toBe("120.26");
    });

    it("should return correct price for buyer in EU", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "EU");
      expect(shoePrice).toBe("107.00");
    });
  });

  describe("Test getShoePrice for Seller based in US", () => {
    const sellerLocation = "US";
    it("should return correct price for buyer in UK", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "UK");
      expect(shoePrice).toBe("91.32");
    });

    it("should return correct price for buyer in US", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "US");
      expect(shoePrice).toBe("117.52");
    });

    it("should return correct price for buyer in EU", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "EU");
      expect(shoePrice).toBe("109.00");
    });
  });

  describe("Test getShoePrice for Seller based in EU", () => {
    const sellerLocation = "EU";
    it("should return correct price for buyer in UK", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "UK");
      expect(shoePrice).toBe("90.49");
    });

    it("should return correct price for buyer in US", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "US");
      expect(shoePrice).toBe("121.39");
    });

    it("should return correct price for buyer in EU", () => {
      const shoePrice = getShoePrice(listPriceString, sellerLocation, "EU");
      expect(shoePrice).toBe("103.00");
    });
  });
});
