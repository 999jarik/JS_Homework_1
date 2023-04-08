let nameUsersArr = [];
let nameLogin;
let check = true;
let i = 1;

while(i < 6) {
    nameUsersArr.push(prompt("Зареєструйте ім'я користувача № " + i));
    i ++;
}

while(check) {
        nameLogin = prompt("Введіть ім'я для входу: ")

    for (let i = 0; i < nameUsersArr.length; i++) {
        if (nameLogin === nameUsersArr[i]) {
            alert("Ви успішно ввійшли " + nameLogin);
            check = false;
        }
    }
    if(check === true) {
        alert("Імені не знайдено")
    }
}
