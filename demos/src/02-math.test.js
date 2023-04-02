const { sum, multiply, divide } = require('./02-math');

describe('Test for math functions', () => {
    describe('sum', () => {
        test('add 1 to 4 should be 5', () => {
            const result = sum(1, 4);
            expect(result).toBe(5);
        });
    });
    describe('multiply', () => {
        test('multiply 2 by 4 should be 8', () => {
            const result = multiply(2, 4);
            expect(result).toBe(8);
        });
    });

    describe('divide', () => {
        test('divide', () => {
            const result = divide(4, 2);
            expect(result).toBe(2);

            const result2 = divide(120, 30);
            expect(result2).toBe(4);

            const result3 = divide(85, 5);
            expect(result3).toBe(17);
        });

        test('divide by 0', () => {
            const result = divide(4, 0);
            expect(result).toBeNull();

            const result2 = divide(120, 0);
            expect(result2).toBeNull();

            const result3 = divide(85, 0);
            expect(result3).toBeNull();
        });
    });
});
