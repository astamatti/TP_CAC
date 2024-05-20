document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formRegister");
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("tel");
    const country = document.getElementById("country");
    const birthday = document.getElementById("birthdate");
    const terms = document.getElementById("terms");
    const errorName = document.getElementById("error-firstname");
    const errorLastName = document.getElementById("error-lastname");
    const errorEmail = document.getElementById("error-email");
    const errorPhone = document.getElementById("error-telefono");
    const errorCountry = document.getElementById("error-country");
    const errorTerms = document.getElementById("error-terms");
    const errorFile = document.getElementById("error-file");
    const errorBirthday = document.getElementById("error-birthdate");
    const select = document.getElementById("country");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let errors = {};
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (firstName.value.trim() === "") {
            errorName.textContent = "El campo nombre es obligatorio.";
            errors.firstName = "El campo nombre es obligatorio.";
        } else {
            delete errors.firstName;
            errorName.textContent = "";
        }

        if (lastName.value.trim() === "") {
            errorLastName.textContent = "El campo apellido es obligatorio.";
            errors.lastName = "El campo apellido es obligatorio.";
        } else {
            delete errors.lastName;
            errorLastName.textContent = "";
        }

        if (email.value.trim() === "") {
            errorEmail.textContent = "El campo email es obligatorio.";
            errors.email = "El campo email es obligatorio.";
        } else if (!emailRegex.test(email.value)) {
            errorEmail.textContent = "El email no es válido.";
            errors.email = "El email no es válido.";
        } else {
            delete errors.email;
            errorEmail.textContent = "";
        }

        if (phone.value.trim() === "") {
            errorPhone.textContent = "El campo teléfono es obligatorio.";
            errors.phone = "El campo teléfono es obligatorio.";
        } else if (isNaN(phone.value)) {
            errorPhone.textContent = "El teléfono no es válido.";
            errors.phone = "El teléfono no es válido.";
        } else {
            delete errors.phone;
            errorPhone.textContent = "";
        }

        if (birthday.value === "") {
            errorBirthday.textContent =
                "El campo fecha de nacimiento es obligatorio.";
            errors.birthday = "El campo fecha de nacimiento es obligatorio.";
        } else if (new Date(birthday.value) > new Date()) {
            errorBirthday.textContent =
                "La fecha de nacimiento no puede ser mayor a la fecha actual.";
            errors.birthday =
                "La fecha de nacimiento no puede ser mayor a la fecha actual.";
        } else {
            delete errors.birthday;
            errorBirthday.textContent = "";
        }

        if (!terms.checked) {
            errorTerms.textContent = "Debe aceptar los términos y condiciones.";
            errors.terms = "Debe aceptar los términos y condiciones.";
        } else {
            delete errors.terms;
            errorTerms.textContent = "";
        }

        if (select.value === "") {
            errorCountry.textContent = "Por favor, seleccione un barrio.";
            errors.country = "Por favor, seleccione un barrio.";
        } else {
            delete errors.country;
            errorCountry.textContent = "";
        }
        
        if (file.value.trim() === "") {
            errorFile.textContent = "El archivo es obligatorio.";
            errors.file = "El el archivo es obligatorio.";
        } else {
            delete errors.file;
            errorFile.textContent = "";
        }

        Object.keys(errors).length > 0
            ? console.error("El formulario tiene errores.")
            : this.submit();
    });
});
