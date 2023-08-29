const form = document.getElementById('formulario-registro');
const nombreInput = document.getElementById('nombrecompleto');
const emailInput = document.getElementById('Email1');
const passwordInput = document.getElementById('Password1');
const Password1Input = document.getElementById('repetirPassword1');
const nacimientoInput = document.getElementById('datenacimiento');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nombre-error').innerHTML = '';
    document.getElementById('email-error').innerHTML = '';
    document.getElementById('password1-error').innerHTML = '';
    document.getElementById('password2-error').innerHTML = '';
    document.getElementById('nacimiento-error').innerHTML = '';

    let fechaNacimiento = new Date(document.getElementById("datenacimiento").value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let contrasena = document.getElementById("Password1").value;
    let tieneNumero = /\d/.test(contrasena);
    let tieneMayuscula = /[A-Z]/.test(contrasena);

    if (nombreInput.value === '') {
        document.getElementById('nombre-error').innerHTML = 'Por favor ingrese su nombre';
        return;
    }

    if (emailInput.value === '') {
        document.getElementById('email-error').innerHTML = 'Por favor ingrese su Gmail';
        return;
    }

    if (passwordInput.value === '' || passwordInput.value.length < 6 || passwordInput.value.lenght > 18 || !tieneNumero || !tieneMayuscula) {
        document.getElementById('password1-error').innerHTML = 'Por favor ingrese su Password';
        return;
    }

    if (Password1Input.value === '' || passwordInput.value != Password1Input.value) {
        document.getElementById('password2-error').innerHTML = 'La contrasena tiene que ser la misma que la anterior';
        return;
    }

    if (nacimientoInput.value === '' || edad < 13) {
        document.getElementById('nacimiento-error').innerHTML = 'Por favor ingrese su Fecha de nacimiento';
        return;
    }

    alert('formulario-registro');

    form.submit();
})
