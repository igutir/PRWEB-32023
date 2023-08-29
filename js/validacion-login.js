const form = document.getElementById('form-login');

const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('Email-error').innerHTML = '';
    document.getElementById('Password-error').innerHTML = '';

    let contrasena = document.getElementById("Password").value;
    let tieneNumero = /\d/.test(contrasena);
    let tieneMayuscula = /[A-Z]/.test(contrasena);

    if (emailInput.value === '') {
        document.getElementById('email-error').innerHTML = 'Por favor ingrese su email';
        return;
    }

    if (passwordInput.value === '' || passwordInput.value.length < 6 || passwordInput.value.lenght > 18 || !tieneNumero || !tieneMayuscula) {

        document.getElementById('Password-error').innerHTML = 'Por favor ingrese su contraseña';
        return;
    }

    alert('form-login');

    form.submit();

})
