const Person = require('./06-person');

describe('Person', () => {
    let person;
    // Arrange
    beforeEach(() => {
        person = new Person('John', 70, 1.8);
    });
    test('should be down', () => {
        // Act
        person.weight = 50;
        // Assert
        expect(person.calcIMC()).toBe('down');
    });

    test('should be normal', () => {
        person.weight = 70;
        expect(person.calcIMC()).toBe('normal');
    });

    test('should be overweight', () => {
        person.weight = 80;
        expect(person.calcIMC()).toBe('overweight');
    });
});
