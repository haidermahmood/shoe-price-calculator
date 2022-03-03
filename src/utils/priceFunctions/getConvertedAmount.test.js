import { getConvertedAmount } from "./getConvertedAmount";

import { exchangeRates } from "../../constants/constants";

const listPrice = 100;

describe("Test the getConvertedAmount for price in £", () => {
  const currency = "£";

  it("should return correct price for buyer in UK", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "UK");
    const expectedPrice = listPrice * exchangeRates.UK.gbp;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in US", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "US");
    const expectedPrice = listPrice * exchangeRates.UK.usd;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in EU", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "EU");
    const expectedPrice = listPrice * exchangeRates.UK.euro;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });
});

describe("Test the getConvertedAmount for price in $", () => {
  const currency = "$";

  it("should return correct price for buyer in UK", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "UK");
    const expectedPrice = listPrice * exchangeRates.US.gbp;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in US", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "US");
    const expectedPrice = listPrice * exchangeRates.US.usd;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in EU", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "EU");
    const expectedPrice = listPrice * exchangeRates.US.euro;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });
});

describe("Test the getConvertedAmount for price in €", () => {
  const currency = "€";

  it("should return correct price for buyer in UK", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "UK");
    const expectedPrice = listPrice * exchangeRates.EU.gbp;
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in US", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "US");
    const expectedPrice = Math.floor(listPrice * exchangeRates.EU.usd);
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });

  it("should return correct price for buyer in EU", () => {
    const convertedListPrice = getConvertedAmount(currency, listPrice, "EU");
    const expectedPrice = Math.floor(listPrice * exchangeRates.EU.euro);
    expect(Math.floor(convertedListPrice)).toBe(expectedPrice);
  });
});
