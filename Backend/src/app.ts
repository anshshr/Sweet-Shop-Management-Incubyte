import { Sweet } from "./types/Sweet";
import { generateSweetId } from "./utils/IdGenerator";

export class SweetShop {
    private sweets: Sweet[] = [];

    //Feature to add the sweets in the shop
    addSweet(sweet: Sweet): Sweet & { id: string } {

        if (!sweet) {
            throw new Error('Sweet cannot be null or undefined');
        }
        else if (!sweet.name || sweet.name.trim() === '') {
            throw new Error('Sweet name is required');
        }
        else if (!sweet.category || sweet.category.trim() === '') {
            throw new Error('Sweet category is required');
        }
        else if (sweet.price < 0) {
            throw new Error('Sweet price cannot be negative');
        }
        else if (sweet.quantity < 0) {
            throw new Error('Sweet quantity cannot be negative');
        }


        // Check if sweet with same name already exists
        const exists = this.sweets.find(s => s.name.toLowerCase() === sweet.name.trim().toLowerCase());
        if (exists) {
            throw new Error(`Sweet with name '${sweet.name.trim()}' already exists`);
        }

        let finalId: string;
        finalId = generateSweetId();


        const finalSweet: Sweet & { id: string } = {
            id: finalId,
            name: sweet.name.trim(),
            category: sweet.category.trim(),
            price: sweet.price,
            quantity: sweet.quantity
        };

        this.sweets.push(finalSweet);
        return finalSweet;
    }

    //Feature to delete sweets from the shop
    deleteSweet(name: string): boolean {
        if (!name || name.trim() === '') {
            return false;
        }

        const indexToDelete = this.sweets.findIndex(s =>
            s.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (indexToDelete === -1) {
            return false;
        }

        this.sweets.splice(indexToDelete, 1);
        return true;
    }

    //view all the sweets in the shop
    viewSweets() : Sweet[]{
        return this.sweets;
    }

    



}