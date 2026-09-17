function checkLogin(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Export hàm ra để có thể sử dụng trong môi trường Node.js (dành cho Jest)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkLogin };
}
