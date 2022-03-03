import { getShoeProcessingFee } from "./getShoeProcessingFee";

const listPrice = 100;

describe("Test the getShoeProcessingFee", () => {
  it("should return correct shoe processing fee for UK", () => {
    const processingFee = getShoeProcessingFee(listPrice, "UK");
    expect(Math.floor(processingFee)).toBe(2);
  });

  it("should return correct shoe processing fee for US", () => {
    const processingFee = getShoeProcessingFee(listPrice, "US");
    expect(Math.floor(processingFee)).toBe(4);
  });

  it("should return correct shoe processing fee for EU", () => {
    const processingFee = getShoeProcessingFee(listPrice, "EU");
    expect(Math.floor(processingFee)).toBe(3);
  });
});
