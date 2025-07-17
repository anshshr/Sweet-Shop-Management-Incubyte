import { SweetShop } from "../app";
import { Sweet } from "../types/Sweet";

describe("SweetShop - searchByCategory", () => {
    let sweetShop: SweetShop;
    let cakeSweet: Sweet;
    let chocolateSweet: Sweet;
    let milkSweet: Sweet;
    let candySweet: Sweet;

    beforeEach(() => {
        sweetShop = new SweetShop();

        cakeSweet = {
            name: "Chocolate Cake",
            category: "Cakes",
            price: 150,
            quantity: 5
        };

        chocolateSweet = {
            name: "Dark Chocolate Bar",
            category: "Chocolates",
            price: 850,
            quantity: 20
        };

        milkSweet = {
            name: "Barfi",
            category: "Milk-based",
            price: 120,
            quantity: 15
        };

        candySweet = {
            name: "Gummy Bears",
            category: "Candies",
            price: 490,
            quantity: 30
        };

        sweetShop.addSweet(cakeSweet);
        sweetShop.addSweet(chocolateSweet);
        sweetShop.addSweet(milkSweet);
        sweetShop.addSweet(candySweet);
    });

    test("should find sweets with exact category match", () => {

        const result = sweetShop.searchByCategory("Cakes");

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Chocolate Cake");
        expect(result[0].category).toBe("Cakes");
    });

    test("should find sweets with case-insensitive category search", () => {


        const result = sweetShop.searchByCategory("CAKES");

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Chocolate Cake");
    });

    test("should find sweets with mixed case category search", () => {

        const result = sweetShop.searchByCategory("MiLk-BaSeD");

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Barfi");
    });

    test("should throw error when category is empty string", () => {
        expect(() => sweetShop.searchByCategory("")).toThrow("Search category cannot be empty");
    });

    test("should handle category search with extra whitespace", () => {

        const result = sweetShop.searchByCategory("  Cakes  ");

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Chocolate Cake");
    });

});