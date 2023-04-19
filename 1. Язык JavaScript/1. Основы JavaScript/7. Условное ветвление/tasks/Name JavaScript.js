/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

const nameJS = prompt('Какое «официальное» название JavaScript?');

if (nameJS === 'ECMAScript') {
    console.log('Верно!')
} else {
    console.log('Не знаете? ECMAScript!');
}