let nameUsersArr = [];
let check = true;

for(let i = 1; i < 6; i++) {
    nameUsersArr.push(prompt("Зареєструйте ім'я користувача № " + i));
}

while(check) {
    let nameLogin = prompt("Введіть ім'я для входу: ")

    for (let i = 0; i < nameUsersArr.length; i++) {
        if (nameLogin === nameUsersArr[i]) {
            alert("Ви успішно ввійшли " + nameLogin);
            check = false;
            break;
            }
        }
    if(check === true) {
    alert("Імені не знайдено");
    }
}