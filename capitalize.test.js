const capitalize = require('./capitalize');

describe('Capitalizing test', () => {
    test ('it capitalizes the string that is passed', () =>{
        expect(capitalize('hello')).toBe('Hello');
    });
});


