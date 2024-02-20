function checkName(name) {
    const regex =  /^.{8,40}$/i;
    return regex.test(name);
}

function checkEmail(email) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}


function checkPassword(password) {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
    return regex.test(password);
}


function checkSecretWord(secret_word) {
    const regex = new RegExp("^[a-zA-Zа-яА-Я0-9]{8,}$");
    return regex.test(secret_word);
}

// for (let validator in validatorsList) {
//     // validator = validator.replace(/\b\w/g, (match) => match.toUpperCase());
//     // console.log(validator);
//     let AuthValidator = validator.replace(/(?:^|_)([a-z])/g, (match, word) => {
//         return word.toUpperCase();
//     });
//     AuthValidator = 'check' + AuthValidator;
//     console.log(AuthValidator);
//
// }
// }

export  {checkEmail, checkName, checkPassword, checkSecretWord};

