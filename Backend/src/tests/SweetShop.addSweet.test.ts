import { SweetShop } from '../app';
import { Sweet } from '../types/Sweet';

describe('SweetShop', () => {
    let sweetShop: SweetShop;

    beforeEach(() => {
        sweetShop = new SweetShop();
    });

    describe('addSweet', () => {
        test('should add sweet with manual ID', () => {
            const sweet: Sweet = {
                id: 'TEST-001',
                name: 'Chocolate Cake',
                category: 'Cakes',
                price: 150,
                quantity: 10
            };

            const result = sweetShop.addSweet(sweet);
            expect(result.name).toBe('Chocolate Cake');
            expect(result.category).toBe('Cakes');
            expect(result.price).toBe(150);
            expect(result.quantity).toBe(10);
        });

        test('should reject invalid sweet name', () => {
            const sweet: Sweet = {
                name: '',
                category: 'Cookies',
                price: 300,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet name is required');
        });

        test('should reject empty category', () => {
            const sweet: Sweet = {
                name: 'Sugar Cookie',
                category: '',
                price: 300,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet category is required');
        });

        test('should reject negative price', () => {
            const sweet: Sweet = {
                name: 'Sugar Cookie',
                category: 'Cookies',
                price: -190,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet price cannot be negative');
        });

        test('should reject negative quantity', () => {
            const sweet: Sweet = {
                name: 'Brownie',
                category: 'Cakes',
                price: 500,
                quantity: -5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet quantity cannot be negative');
        });

        test('should allow zero quantity', () => {
            const sweet: Sweet = {
            name: 'Out of Stock Item',
            category: 'Cakes',
            price: 120,
            quantity: 0
            };

            const result = sweetShop.addSweet(sweet);
            expect(result.quantity).toBe(0);
        });

        test('should reject duplicate sweet names', () => {
            const sweet1: Sweet = {
                name: 'Chocolate Cake',
                category: 'Cakes',
                price: 100,
                quantity: 5
            };

            const sweet2: Sweet = {
                name: 'Chocolate Cake', 
                category: 'Desserts', 
                price: 800,
                quantity: 3
            };

            sweetShop.addSweet(sweet1);
            expect(() => sweetShop.addSweet(sweet2)).toThrow("Sweet with name already exists");
        });

        test('should reject duplicate sweet names (case insensitive)', () => {
            const sweet1: Sweet = {
                name: 'Vanilla Cupcake',
                category: 'Cupcakes',
                price: 590,
                quantity: 10
            };

            const sweet2: Sweet = {
                name: 'VANILLA CUPCAKE', // Same name but different case
                category: 'Cakes',
                price: 650,
                quantity: 8
            };

            sweetShop.addSweet(sweet1);
            expect(() => sweetShop.addSweet(sweet2)).toThrow("Sweet with name already exists");
        });

    });
});
