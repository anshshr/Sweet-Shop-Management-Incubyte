import { SweetShop } from "../app";
import { Sweet } from "../types/Sweet";

describe("Sweetshop - purchaseSweet", () => {
    let sweetShop: SweetShop;
    let cakeSweet: Sweet;
    let milkSweet: Sweet;


    beforeEach(() => {
        sweetShop = new SweetShop();

        cakeSweet = {
            name: "Chocolate Cake",
            category: "Cakes",
            price: 150,
            quantity: 50
        };

        milkSweet = {
            name: "Barfi",
            category: "Milk-based",
            price: 120,
            quantity: 15
        };

        sweetShop.addSweet(cakeSweet);
        sweetShop.addSweet(milkSweet);

    });

    test("user should able to purchase a sweet with a defined quantity", () => {
        const result = sweetShop.purchaseSweet("Barfi", 10)
        expect(result).toBe(true);
    })

    test("should throw an error if trying to but an sweet, not present in sufficient Quantity", () => {
        expect(() => sweetShop.purchaseSweet("Barfi", 100)).toThrow('Insufficient stock available')
    })

    test("should return false if trying to buy a sweet in neagtive or zero quantity", () => {
        expect(() => sweetShop.purchaseSweet("Barfi", -40)).toThrow('Purchase quantity must be positive')
    })

    test("should throw an error if trying to buy an sweet without any name", () => {
        expect(() => sweetShop.purchaseSweet('', 40)).toThrow('Sweet name cannot be empty')
    })

    test("should be able to purchase sweet with mixed case name", () => {
        const result = sweetShop.purchaseSweet(" bArFi" , 10); 
        expect(result).toBe(true);
    });

})