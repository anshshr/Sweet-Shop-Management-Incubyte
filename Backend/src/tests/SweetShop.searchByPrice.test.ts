import { SweetShop } from "../app";
import { Sweet } from "../types/Sweet";

describe("SweetShop - searchByPriceRange", () => {
    let sweetShop: SweetShop;
    let cheapSweet: Sweet;
    let moderateSweet: Sweet;
    let expensiveSweet: Sweet;
    let premiumSweet: Sweet;

    beforeEach(() => {
        sweetShop = new SweetShop();

        cheapSweet = {
            name: "Mint Candy",
            category: "Candies",
            price: 50,
            quantity: 50
        };

        moderateSweet = {
            name: "Chocolate Bar",
            category: "Chocolates",
            price: 100,
            quantity: 25
        };

        expensiveSweet = {
            name: "Pineapple Cake",
            category: "Cakes",
            price: 250,
            quantity: 10
        };

        premiumSweet = {
            name: "Luxury Truffle Box",
            category: "Chocolates",
            price: 400,
            quantity: 5
        };

        sweetShop.addSweet(cheapSweet);
        sweetShop.addSweet(moderateSweet);
        sweetShop.addSweet(expensiveSweet);
        sweetShop.addSweet(premiumSweet);
    });

    test("should find sweets within exact price range", () => {

        const result = sweetShop.searchByPriceRange(200, 500);

        expect(result).toHaveLength(2);
        expect(result[0].name).toBe("Pineapple Cake");
        expect(result[0].price).toBe(250);
    });

    test("should return empty array when no sweets in price range", () => {

        const result = sweetShop.searchByPriceRange(10, 40);

        expect(result).toHaveLength(0);
        expect(result).toEqual([]);
    });

    test("should throw error when minimum price or maximum price or both is negative", () => {
        expect(() => sweetShop.searchByPriceRange(-5, 10))
            .toThrow("Price range cannot contain negative values");

        expect(() => sweetShop.searchByPriceRange(5, -10))
            .toThrow("Price range cannot contain negative values");

        expect(() => sweetShop.searchByPriceRange(-5, -2))
            .toThrow("Price range cannot contain negative values");
    });

    test("should throw error when minimum price is greater than maximum price", () => {
        expect(() => sweetShop.searchByPriceRange(15, 10))
            .toThrow("Minimum price cannot be greater than maximum price");
    });
});
