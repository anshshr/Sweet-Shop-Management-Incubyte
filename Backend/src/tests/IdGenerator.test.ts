import { generateUniqueId } from '../utils/IdGenerator';

describe('IdGenerator Function', () => {
   
    test('generateUniqueId creates valid ID', () => {
        const id = generateUniqueId();
        expect(id).toBeDefined();
        expect(typeof id).toBe('string');
        expect(id.length).toBeGreaterThan(0);
    });

    test('generateUniqueId creates unique IDs', () => {
        const id1 = generateUniqueId();
        const id2 = generateUniqueId();
        expect(id1).not.toBe(id2);
    });


    test('multiple IDs are unique', () => {
        const ids = new Set();
        for (let i = 0; i < 10; i++) {
            ids.add(generateUniqueId());
        }
        expect(ids.size).toBe(10);
    });
});
