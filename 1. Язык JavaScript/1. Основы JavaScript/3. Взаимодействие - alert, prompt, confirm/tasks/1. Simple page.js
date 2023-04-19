/* Создайте страницу, которая спрашивает имя у пользователя и выводит его. */

// const userName = prompt('Как Вас зовут?');
// userName === null || userName === '' ? alert('Вы не назвали себя!') : alert(`Привет ${userName}!`);

let userName;

while (!userName) {
    userName = prompt('Введите имя');
}

alert(`Привет, ${userName}!`);


