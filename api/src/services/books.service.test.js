const BooksService = require('./books.service');

const fakeBooks = [
    {
        _id: '5e6d8f6e0f6b7e0b0c6e8f7d',
        name: 'Harry Potter and the Chamber of Secrets',
    },
    {
        _id: '5e6d8f6e0f6b7e0b0c6e8f7e',
        name: 'Harry Potter and the Prisoner of Azkaban',
    },
]

const MongoLibStub = {
    getAll: () => [...fakeBooks],
    create: () => { },
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for books service', () => {
    let service

    beforeAll(() => {
        service = new BooksService();
        jest.clearAllMocks();
    });

    describe('Test for get Books', () => {
        test('should return an array of books', async () => {
            const books = await service.getBooks({});
            console.log(books);
            expect(books.length).toEqual(2);
        });

        test('should return a name of books', async () => {
            const books = await service.getBooks({});
            console.log(books);
            expect(books[0].name).toEqual('Harry Potter and the Chamber of Secrets');
        });
    });
});