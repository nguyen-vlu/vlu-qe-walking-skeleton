const { checkLogin } = require('./login');

describe('Kiểm tra hàm đăng nhập (checkLogin)', () => {
    
    test('Nên trả về true khi username là "admin" và password là "123"', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi sai mật khẩu', () => {
        expect(checkLogin('admin', 'wrongpass')).toBe(false);
    });

    test('Nên trả về false khi sai tên đăng nhập', () => {
        expect(checkLogin('user', '123')).toBe(false);
    });

    test('Nên trả về false khi sai cả tên đăng nhập và mật khẩu', () => {
        expect(checkLogin('guest', 'abc')).toBe(false);
    });

    test('Nên trả về false khi để trống trường dữ liệu', () => {
        expect(checkLogin('', '')).toBe(false);
    });

});
