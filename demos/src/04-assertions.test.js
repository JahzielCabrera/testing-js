test('test obj', () => {
    const obj = { name: 'Jahziel' };
    obj.lastname = 'Cabrera';
    expect(obj).toEqual({ name: 'Jahziel', lastname: 'Cabrera' });
});

test('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
});

test('lists', () => {
    const data = [1, 2, 3, 4];
    expect(data).toContain(2);
});
