document.addEventListener('DOMContentLoaded', function () {
    let nombreInput = document.getElementById('nombre');
    let telefonoInput = document.getElementById('telefono');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('password-confirm');
    let condicionesCheckbox = document.getElementById('condiciones');
    let registrarButton = document.getElementById('registrar');

    nombreInput.addEventListener('blur', validarNombre);
    telefonoInput.addEventListener('blur', validarTelefono);
    passwordInput.addEventListener('blur', validarPassword);
    confirmPasswordInput.addEventListener('blur', validarConfirmPassword);
    condicionesCheckbox.addEventListener('change', validarFormulario);

    function validarNombre() {
        let nombre = nombreInput.value.trim();
        let regex = /^[A-Za-z\s]{1,20}$/;

        if (regex.test(nombre)) {
            nombreInput.style.borderColor = 'green';
            return true;
        } else {
            nombreInput.style.borderColor = 'red';
            return false;
        }
    }

    function validarTelefono() {
        let telefono = telefonoInput.value.trim();
        let regex = /^\d{9}$/;

        if (regex.test(telefono)) {
            telefonoInput.style.borderColor = 'green';
            return true;
        } else {
            telefonoInput.style.borderColor = 'red';
            return false;
        }
    }

    function validarPassword() {
        let password = passwordInput.value;
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (regex.test(password)) {
            passwordInput.style.borderColor = 'green';
            return true;
        } else {
            passwordInput.style.borderColor = 'red';
            return false;
        }
    }

    function validarConfirmPassword() {
        let confirmPassword = confirmPasswordInput.value;
        let password = passwordInput.value;

        if (confirmPassword === password) {
            confirmPasswordInput.style.borderColor = 'green';
            return true;
        } else {
            confirmPasswordInput.style.borderColor = 'red';
            return false;
        }
    }

    function validarFormulario() {
        let nombreValido = validarNombre();
        let telefonoValido = validarTelefono();
        let passwordValido = validarPassword();
        let confirmPasswordValido = validarConfirmPassword();

        if (nombreValido && telefonoValido && passwordValido && confirmPasswordValido && condicionesCheckbox.checked) {
            registrarButton.disabled = false;
        } else {
            registrarButton.disabled = true;
        }
    }
});
