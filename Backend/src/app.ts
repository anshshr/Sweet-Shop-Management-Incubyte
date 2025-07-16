import { Sweet } from "./types/Sweet";

export class SweetShop {
    private sweets: Sweet[] = [];

    addSweet(sweet: Sweet): Sweet & { id: string } {

        const Newsweet = {
            id: "SWEET-101",
            name: "Cupcake",
            category: "Chocolate",
            price: 20,
            quantity: 30
        };
        return Newsweet;
    }
}