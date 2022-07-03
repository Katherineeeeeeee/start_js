// ! 1
// Запитати в користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді на змінні і вивести в консоль:
// User's full name is [name] [lastName]. He is [age] years old.

//* const userName = prompt('your name');
//*const userLastName = prompt('your lastname');
//*const userAge = Number.parseFloat(prompt('yor age'));

//*console.log( `User's full name is ${userName} ${userLastName}. She is ${userAge} years old`);
// ! 2
// Написати програму, яка переведе введену оцінку студента у болонський формат
// 89 – 100 це A,  75 – 88 це В, 60 – 74 це С, 45 – 59 це D,  20 – 44 це Е, до 20 це F

//* const userResult = Number(prompt('Введіть оцінку'));

// if (89  <= userResult && 100 >= userResult) {
//     console.log('A');
// } else if (userResult >= 75 && userResult <= 88) {
//     console.log('B');
// } else if (userResult >= 60 && userResult <= 74) {
//     console.log('C');
// } else if (userResult >= 45 && userResult <= 59) {
//     console.log('D');
// } else if (userResult >= 20 && userResult <= 44) {
//     console.log('E');
// } else if (userResult < 20) {
//*     console.log('F');}

// ! 3
// Використовуючи конструкцію if..else, напишіть код, який перевіряє, чи вистачає користувачу грошей на таксі :)
// Якщо так, показати 'Let`s go!', якщо ні 'Not enough'.

//* const taxiPrice = 100;
// const cash = Number.parseFloat(prompt('Enter your cash'));

// if(taxiPrice <= cash) {
//     console.log('Let`s go!');
// } else if (taxiPrice >= cash) {
//     console.log('Not enough');
// }

// const message = cash >= taxiPrice ? 'Let`s go!' : 'Not enough';
//* console.log(message);

// ! 4
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: 'What is your budget for the trip?'.
// Якщо більше або дорівнює 20000, показати: 'Welcome to Turkey',
// якщо більше або 15000, то показати: 'Welcome to Egypt',
// якщо більше або 10000, то показати: 'Welcome to Bulgaria',
// якщо більше або дорівнює 5000, то показати: 'Welcome to Truskavets',
// інакше – відобразити: 'Go to work'

//* const answear = prompt('What is your budget for the trip?')

// if(answear >= 20000) {
//     console.log('Welcome to Turkey');
// } else if (answear >= 15000) {
//     console.log('Welcome to Egypt');
// } else if (answear >= 10000) {
//     console.log('Welcome to Bulgaria');
// } else if(answear >= 5000) {
//     console.log('Welcome to Truskavets');
// } else {
//     console.log( 'Go to work');
//* }

// ! 5
// Напишіть програму, яка буде находити сумму, різницю, множення, частку двох чисел.
// Користувач вводить 2 числа, потім вводить знак операції і отримує результат у форматі
// "Сумма чисел a i b дорівнює result" (шаблон для кожного відповіді)

//* const userA = Number.parseFloat(prompt('first num'));
// const userB = Number.parseFloat(prompt('second num'));
// const userOperation = prompt('your operation');

// let result;

// switch(userOperation) {
//     case '+':
//         result =`Сумма чисел ${userA} i ${userB} дорівнює ${userA + userB}`;
//         alert(result);
//         break;

//         case '-':
//             result =`Сумма чисел ${userA} i ${userB} дорівнює ${userA - userB}`;
//             alert(result);
//             break;

//             case '*':
//                 result =`Сумма чисел ${userA} i ${userB} дорівнює ${userA * userB}`;
//                 alert(result);
//                 break;

//                 case '/':
//                     result =`Сумма чисел ${userA} i ${userB} дорівнює ${userA / userB}`;
//                     alert(result);
//                     break;

//* }

// ! 6
// Використовуючи prompt задайте питання, на яке можна відповісти "так" чи "ні"
// Випадкове число для відповіді генерується функцією Math.floor(Math.random() * 5)
// Використовуйте switch для створення випадкових відповідей, де:
// 0 - 'Все будет ОК'
// 1 - 'Може так, а може ні'
// 2 - 'Певно, ні'
// 3 - 'Дуже ймовірно'
// def - 'Я нічого про це не знаю'
// Вивести відповідь із запитанням ("Поставлене запитання - question.
//  Шар думає, що - answer")

//* const userQuestion = prompt('Запитай мене?');
// const number = Math.floor(Math.random() * 5);
// let message;

// switch(number) {
//     case 0:
//     message = 'Все будет ОК';
//     break;

//     case 1:
//     message = 'Може так, а може ні';
//     break;

//     case 2:
//     message = 'Певно, ні';
//     break;

//     case 3:
//     message = 'Дуже ймовірно';
//     break;

//     default:
//     message = 'Я нічого про це не знаю';

// }

//* console.log(`Поставлене запитання - ${userQuestion}. Шар думає, що - ${message}`)

// ! 7
// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.

// Якщо відвідувач вводить Admin, то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc – вивести рядок "Cancelled"
// Інакше вивести рядок "I don't know you"

// Пароль перевіряти так:
// Якщо введено пароль "I am the boss", вивести рядок "Hello!"
// Інакше виводити рядок "Wrong password"

//* const login = prompt('your login');
// console.log(login);

// let result;

// if(!login){
//     console.log("Cancelled");
// } else {
//             console.log("I don't know you")
//         }

// const pass = prompt('your password')
// if (pass === "I am the boss") {
//     console.log("Hello!");
// } else {
//     console.log( "Wrong password");
//* }

// ! 8
// Написати програму, яка отримає від користувача число (кількість хвилин) і виведе на екран рядок у форматі годин
// та хвилин.

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// function calculateEngravingPrice(message, pricePerWord) {
// let array = message.split(' ');

//     console.log(array.length * pricePerWord);
// }

// function calculateEngravingPrice(message, pricePerWord) {
//      let array = message.split(" ");
//      return (array.length * pricePerWord);
//  }

// ! 9
// Написати ф-ю countVowels, яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// countVowels('the quick brown fox') // 5

// ! 10
// Напишіть функцію logItems(array), яка отримує масив та використовує цикл for, який для кожного масиву виводитиме
// у консоль повідомлення у форматі [номер елемента] - [значення елемента].
// Нумерація починається з 1. Наприклад, для першого масиву елементів
// ['Mango', 'Poly', 'Ajax'] з індексом 0 виведе '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ! 11
// Написати ф-ю capitalize, яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

// ! 12
// Написати функцію median, яка приймає масив і знаходить його медіану.
// Медіана - це центральна статистика положення, яка розділяє розподіл на дві частини, тобто вона залишає таку ж
// кількість значень на одній стороні, як і на іншій.
// У масиві з непарним числом елементів медіана це число всередині масиву.
// Для масиву з парним числом елементів, де немає жодного елемента точно посередині,
// медіана – це середнє значення двох чисел, що знаходяться всередині масиву.
// У цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану цього масиву.

// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

//! 13
// Написати ф-ю єObjectEmpty, яка перевіряє об'єкт порожній чи ні. Якщо об'єкт порожній, повернути true, інакше false
// isObjectEmpty({}) // true
// console.log(isObjectEmpty({name: 'user', age: 21})); // false

//! 14
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я самого
// продуктивного (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта у форматі "ім'я": "кількість задач".
// console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,})); // lorence
// console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,})); // mango
// console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux

//! 15
// Маємо масив користувачів
// 1) Написати функцію getEmailsByGender(users, gender), яка отримуватиме масив користувачів та стать, і повертатиме масив
// імейлів усіх користувачів даної статі.
// 2) Написати функцію addNewUser(users, newUser), яка отримуватиме масив користувачів та об'єкт з новим користувачем.
// Функція повинна додати об'єкт у масив та повернути новий масив. Але якщо користувач з даним імейлом вже існує,
// додаватися не повинно. В такому випадку можна вивести в консоль повідомлення:
// `User with email "${email}" already exists` і повернути масив без змін.
// 3) Написати функцію deleteUser(users, userEmail), яка отримуватиме масив користувачів та email користувача, якого
// потрібно видалити. Функція повинна виконати видалення та повернути новий масив. Але якщо користувача з даним імейлом не
//  існує, потрібно вивести в консоль повідомлення:  `There is no user with email "${email}"` і повернути масив без змін.
// 4) Написати функцію editUser(users, userEmail, newName), яка отримуватиме масив користувачів, email користувача, ім'я
// якого потрібно змінити та нове ім'я. Функція повинна змінити та повернути новий масив. Але якщо користувача з даним
// імейлом не існує, потрібно вивести в консоль повідомлення: `There is no user with email "${email}"` і повернути масив
// без змін.

// const users = [
//     {
//         first_name: 'Peterus',
//         last_name: 'Verlander',
//         email: 'pverlander0@bloomberg.com',
//         gender: 'male',
//     },
//     {
//         first_name: 'Charis',
//         last_name: 'Tennant',
//         email: 'ctennant1@t-online.de',
//         gender: 'female',
//     },
//     {
//         first_name: 'Hortense',
//         last_name: 'Lammerding',
//         email: 'hlammerding2@blog.com',
//         gender: 'female',
//     },
//     {
//         first_name: 'Anatollo',
//         last_name: 'Ricards',
//         email: 'aricards3@washington.edu',
//         gender: 'male',
//     },
// ];

// 1)
//  const femaleEmails = getEmailsByGender(users, 'female');
//  console.log(femaleEmails); // ['ctennant1@t-online.de', 'hlammerding2@blog.com']
// 2)
//  const newUser = {
//    first_name: 'Oralie',
//    last_name: 'Langshaw',
//    email: 'olangshaw4@google.pl',
//    gender: 'female',
//  };
//  const updatedUsers = addNewUser(users, newUser);
//  console.log(updatedUsers); // 5 users

// // //
//  const newUser2 = {
//    first_name: 'Oralie',
//    last_name: 'Langshaw',
//    email: 'ctennant1@t-online.de',
//    gender: 'female',
//  };
//  const updatedUsers2 = addNewUser(users, newUser2);
//  console.log(updatedUsers2); // User with email "ctennant1@t-online.de" already exists

// 3)
// const updatedUsers = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers); // 3 users

// const updatedUsers2 = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers2); // There is no user with email "pverlander0@bloomberg.com"

// 4)
// const updatedUsers = editUser(users, 'aricards3@washington.edu', 'Anatoliy')
// console.log(updatedUsers); // last user has name Anatoliy

// const updatedUsers2 = editUser(users, 'fakeEmail', 'Marlene')
// console.log(updatedUsers2); // There is no user with email "fakeEmail"

//! 16
// Напишіть функцію leaveUnique(arr), яка повертає масив, що містить лише унікальні елементи arr (Вирішити через reduce)

// const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

//! 17
// Даний масив із числами. Отримайте суму квадратів його елементів, але тільки тих квадратів, які перевищують 40.

// let arr = [5, 6, 7, 8, 9];

//!18
// const inventors = [
//     {
//       name: 'Albert',
//       surname: 'Einstein',
//       born: 1879,
//       passed: 1955,
//     },
//     {
//       name: 'Isaac',
//       surname: 'Newton',
//       born: 1643,
//       passed: 1727,
//     },
//     {
//       name: 'Galileo',
//       surname: 'Galilei',
//       born: 1564,
//       passed: 1642,
//     },
//     {
//       name: 'Marie',
//       surname: 'Curie',
//       born: 1867,
//       passed: 1934,
//     },
//     {
//       name: 'Johannes',
//       surname: 'Kepler',
//       born: 1571,
//       passed: 1630,
//     },
//     {
//       name: 'Nicolaus',
//       surname: 'Copernicus',
//       born: 1473,
//       passed: 1543,
//     },
//     {
//       name: 'Max',
//       surname: 'Planck',
//       born: 1858,
//       passed: 1947,
//     },
//     {
//       name: 'Katherine',
//       surname: 'Blodgett',
//       born: 1898,
//       passed: 1979,
//     },
//     {
//       name: 'Ada',
//       surname: 'Lovelace',
//       born: 1815,
//       passed: 1852,
//     },
//     {
//       name: 'Sarah E.',
//       surname: 'Goode',
//       born: 1855,
//       passed: 1905,
//     },
//     {
//       name: 'Lise',
//       surname: 'Meitner',
//       born: 1878,
//       passed: 1968,
//     },
//     {
//       name: 'Hanna',
//       surname: 'Hammarström',
//       born: 1829,
//       passed: 1909,
//     },
//   ];

//   Отримати відсортовані за алфавітом імена винахідників, які народилися 18-му столітті або раніше




//! 19
// Користувач
// Напиши клас User для створення користувача з наступними властивостями: 
// name - ім'я, рядок
// age - вік, число
// postsCount - кількість постів, число

// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок:
//     User ${ім'я} is ${вік} years old and has ${у постів} posts.

//* class User {
//   constructor({name, age, postsCount} = {}) {
//     this.name = name;
//     this.age = age;
//     this.postsCount = postsCount;
//   }

//   getInfo() {
//     `User ${this.name} is ${this.age} years old and has ${this.postsCount} posts.`;
//   }
// }

// const mangoData = {
//   name: "Mango",
//   age: 45,
//   postsCount: 20,
// };

// const mango = new User(mangoData);

// console.log(mango);
//* console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts

//! 20 not sure
// Напиши клас Client, який створює об'єкт із властивостями login та email.
// login повинен бути суспільною властивістю, а email приватним.
// Доступ до email зроби через геттер та сетер.
// Перед тим як змінити імейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
// Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'

//* class Client {
//     #email

//     constructor({login, email} = {}) {
//         this.login = login;
//         this.#email = email;
//     }

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//         if(newEmail.includes('@')){
//             return;
//         }
//         'Email is not valid!';
//     }
// }


// const mango = new Client({
// login: 'Mango',
// email: 'mango@dog.woof',
// });

//* console.log('mango', mango);
