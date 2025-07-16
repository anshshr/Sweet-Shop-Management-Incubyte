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
                price: 15.99,
                quantity: 10
            };

            const result = sweetShop.addSweet(sweet);
            expect(result.id).toBe('TEST-001');
            expect(result.name).toBe('Chocolate Cake');
            expect(result.category).toBe('Cakes');
            expect(result.price).toBe(15.99);
            expect(result.quantity).toBe(10);
        });

        test('should add sweet with auto-generated ID', () => {
            const sweet: Sweet = {
                name: 'Vanilla Cupcake',
                category: 'Cupcakes',
                price: 5.99,
                quantity: 20
            };

            const result = sweetShop.addSweet(sweet);
            expect(result.id).toMatch(/^SWEET-\d+-\d+-\d+$/);
            expect(result.name).toBe('Vanilla Cupcake');
            expect(result.category).toBe('Cupcakes');
            expect(result.price).toBe(5.99);
            expect(result.quantity).toBe(20);
        });

        test('should reject invalid sweet name', () => {
            const sweet: Sweet = {
                name: '',
                category: 'Cookies',
                price: 3.99,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet name is required');
        });

        test('should reject empty category', () => {
            const sweet: Sweet = {
                name: 'Sugar Cookie',
                category: '',
                price: 3.99,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet category is required');
        });

        test('should reject negative price', () => {
            const sweet: Sweet = {
                name: 'Sugar Cookie',
                category: 'Cookies',
                price: -1.99,
                quantity: 5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet price cannot be negative');
        });

        test('should reject negative quantity', () => {
            const sweet: Sweet = {
                name: 'Brownie',
                category: 'Cakes',
                price: 8.99,
                quantity: -5
            };

            expect(() => sweetShop.addSweet(sweet)).toThrow('Sweet quantity cannot be negative');
        });

        test('should allow zero quantity', () => {
            const sweet: Sweet = {
            name: 'Out of Stock Item',
            category: 'Cakes',
            price: 12.99,
            quantity: 0
            };

            const result = sweetShop.addSweet(sweet);
            expect(result.quantity).toBe(0);
        });

        test('should reject duplicate sweet names', () => {
            const sweet1: Sweet = {
                name: 'Chocolate Cake',
                category: 'Cakes',
                price: 10.99,
                quantity: 5
            };

            const sweet2: Sweet = {
                name: 'Chocolate Cake', 
                category: 'Desserts', 
                price: 8.99,
                quantity: 3
            };

            sweetShop.addSweet(sweet1);
            expect(() => sweetShop.addSweet(sweet2)).toThrow("Sweet with name 'Chocolate Cake' already exists");
        });

    });
});
