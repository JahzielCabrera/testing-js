describe('group 1', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });
    afterAll(() => {
        console.log('afterAll');
    });
    beforeEach(() => {
        console.log('beforeEach');
    });
    test('case 1', () => {
        console.log('case 1');
        expect(1 + 1).toBe(2);
    });
    test('case 2', () => {
        console.log('case 2');
        expect(1 + 6).toBe(7);
    });

    describe('other group', () => {
        beforeAll(() => {
            console.log('beforeAll');
        });
        afterAll(() => {
            console.log('afterAll');
        });
        test('case 3', () => {
            console.log('case 3');
            expect(4 + 3).toBe(7);
        });
        test('case 4', () => {
            console.log('case 4');
            expect(9 + 6).toBe(15);
        });
    });
});
