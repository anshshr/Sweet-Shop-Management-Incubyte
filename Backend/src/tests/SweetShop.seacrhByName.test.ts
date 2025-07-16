import { SweetShop } from "../app"
import { Sweet } from "../types/Sweet";

describe("SweetShop - searchByName", () => {
    let sweetShop: SweetShop;
    let sweet: Sweet;
    
    beforeEach(() => {
        sweetShop = new SweetShop();
        sweet = {
            name: "Chocolate Barfi",
            category: "milk-based",
            price: 6,
            quantity: 10
        };
    });

    test("should find sweet with exact name match", () => {
        sweetShop.addSweet(sweet);
        const result = sweetShop.searchByName("Chocolate Barfi");
        expect(result).toEqual(sweet);
    });

    test("should find sweet with case-insensitive search", () => {
        sweetShop.addSweet(sweet);
        const result = sweetShop.searchByName("CHOCOLATE BARFI");
        expect(result).toEqual(sweet);
    });

    test("should find sweet with mixed case search", () => {
        sweetShop.addSweet(sweet);
        const result = sweetShop.searchByName("ChOcOlAtE bArFi");
        expect(result).toEqual(sweet);
    });
   
    test("should throw an error when a sweet is not found", () => {
        expect(() => sweetShop.searchByName('KajuKatli')).toThrow("Sweet with name 'KajuKatli' not found");
    });

    test("should throw error when search name is empty", () => {
        expect(() => sweetShop.searchByName('')).toThrow("Search name cannot be empty");
    });

    test("should throw error when search name is only whitespace", () => {
        expect(() => sweetShop.searchByName('   ')).toThrow("Search name cannot be empty");
    });
});