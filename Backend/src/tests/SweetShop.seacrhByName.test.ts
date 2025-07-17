
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
            price: 600,
            quantity: 10
        };

        sweetShop.addSweet(sweet);
    });

    test("should find sweet with exact name", () => {

        const result = sweetShop.searchByName("Chocolate Barfi");
        expect(result).toMatchObject(sweet);
    });

    test("should find sweet case-insensitive search", () => {

        const result = sweetShop.searchByName("CHOCOLATE BARFI");
        expect(result).toMatchObject(sweet);
    });

    test("should find sweet with mixed case  search", () => {

        const result = sweetShop.searchByName("ChOcOlAtE bArFi");
        expect(result).toMatchObject(sweet);
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