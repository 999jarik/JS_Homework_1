let nameUsersArr = [];
let check = true;

for(let i = 1; i < 6; i++) {
    var nameUser = null;
    while (nameUser === null || nameUser.trim() === "") {
      nameUser = prompt("Зареєструйте ім'я користувача № " + i);
      if (nameUser === null) {
        break;
      }
      if (nameUser.trim() === "") {
        alert("Введіть ім'я користувача перед тим, як продовжити.");
      }
    }
    if (nameUser === null) {
        break;
      }
    nameUsersArr.push(nameUser);
  }

while(check) {
    if (nameUser === null) {
        break;
      }
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
    };
};