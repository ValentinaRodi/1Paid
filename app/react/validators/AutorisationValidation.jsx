class AutorisationValidation {


    checkEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    }


    checkPassword(password) {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
        return regex.test(password);
    }


    checkSecretWord(secret_word) {
        const regex = new RegExp("^[a-zA-Zа-яА-Я0-9]{8,}$");
        return regex.test(secret_word);
    }
}