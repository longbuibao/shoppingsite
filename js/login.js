function logSubmit(e) {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if(email == 'user@gmail.com' && password == '1') {
        alert('Đăng nhập thành công')
    }
    else {
        alert('sai mật khẩu hoặc email sai')
        e.preventDefault()
    }
    
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);