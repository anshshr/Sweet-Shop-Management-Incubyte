import { SweetShop } from "../app";
import { Sweet } from "../types/Sweet";


describe("Sweetshop - restockSweet", () => {
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

    test("should return true when sweet is successfully restocked", () => {
        const result = sweetShop.restockSweet('Barfi', 20)
        expect(result).toBe(true);
    })


    test("should return false when trying to restock a sweet that do not exist", () => {
        const result = sweetShop.restockSweet('KajuKatli', 20)
        expect(result).toBe(false);
    })

    test("should return an error when trying to restock a sweet that with negative or zero quantity", () => {
        expect(() => sweetShop.restockSweet("Kalakand", -29)).toThrow("Restock quantity must be positive")
    })


    test("should return an error when restcoking a sweet without any name", () => {
        expect(() => sweetShop.restockSweet('', 20)).toThrow("Sweet name cannot be empty")
    })

    test("should correctly increase the quantity of the sweet after restocking", () => {
        sweetShop.restockSweet("Barfi", 10);
        const updatedSweet = sweetShop.searchByName("Barfi");
        expect(updatedSweet.quantity).toBe(25); 
    });

});



