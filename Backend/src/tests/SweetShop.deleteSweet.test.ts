import { SweetShop } from "../app"
import { Sweet } from "../types/Sweet";

describe('SweetShop - deleteSweet', () => {

    let sweetShop: SweetShop;

    beforeEach(() => {
        sweetShop = new SweetShop();
    })

    test("should successfully delete an existing sweet by name and return true", () => {
        sweetShop.addSweet({
            name: "Barfi",
            category: "milk-based",
            price: 5.99,
            quantity: 10
        });

        const result = sweetShop.deleteSweet("Barfi");
        expect(result).toBe(true);
    })

    test("should return false when attempting to delete a non-existent sweet", () => {
        const result = sweetShop.deleteSweet("Barfi");
        expect(result).toBe(false);
    })

    test("should return false when trying to delete with empty or invalid name", () => {
        const result = sweetShop.deleteSweet("");
        expect(result).toBe(false);
    })

    test("should perform case-insensitive deletion of sweet by name", () => {
        sweetShop.addSweet({
            name: "barfi",
            category: "milk-based",
            price: 5.99,
            quantity: 10
        });

        const result = sweetShop.deleteSweet("BArfI"); // Mixed case
        expect(result).toBe(true);
    })


})