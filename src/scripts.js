var fields = {};

document.addEventListener("DOMContentLoaded", function(){
    fields.firstName = document.getElementById('grid-first-name');
    fields.lastName = document.getElementById('grid-last-name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isEmail(email) {
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
   
    return valid;
   }

class User {
    constructor(firstName, lastName, email, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
}
}

function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, message.value);
        alert(`${usr.firstName} your message has been sent.`)
    } else {
        alert("An error occurred")
    }

}
