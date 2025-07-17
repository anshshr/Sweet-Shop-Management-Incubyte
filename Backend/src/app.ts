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
            throw new Error(`Sweet with name already exists`);
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
    viewSweets(): Sweet[] {
        return this.sweets;
    }

    // to search the sweets by name
    searchByName(name: string): Sweet {
        if (!name || name.trim() === "") {
            throw new Error("Search name cannot be empty");
        }

        const searchName = name.trim().toLowerCase();
        const sweet = this.sweets.find(s => s.name.toLowerCase() === searchName);

        if (!sweet) {
            throw new Error(`Sweet with name '${name.trim()}' not found`);
        }

        return sweet;
    }

    // search a name by category
    searchByCategory(category: string): Sweet[] {
        const searchTerm = category?.trim().toLowerCase();
        if (!searchTerm) {
            throw new Error('Search category cannot be empty');
        }
        return this.sweets.filter(s => s.category.toLowerCase().includes(searchTerm));
    }


    // search by price range
    searchByPriceRange(minPrice: number, maxPrice: number): Sweet[] {
        if (minPrice < 0 || maxPrice < 0) {
            throw new Error('Price range cannot contain negative values');
        }
        if (minPrice > maxPrice) {
            throw new Error('Minimum price cannot be greater than maximum price');
        }

        return this.sweets.filter(s =>
            s.price >= minPrice && s.price <= maxPrice
        );
    }

    //feature to purchase sweets (reduce quantity)
    purchaseSweet(name: string, quantity: number) {

    }


}