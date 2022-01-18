/*
1. Напишите скрипт на JS, который в заданном тексте удалит два символа, выбранных случайно.
    a. Усложнение: удалять можно только буквы в словах, а знаки пунктуации и цифры удалять нельзя
*/

function randomNumber(num) {    //получаем случайное число до числа num
    let random = Math.random() * (num + 1);
    return Math.floor(random);
}
//////////////////////
function removeSymbol(str, count = 2) {
    const alwaysEmpty = str === '' || str.length <= count;
    const regexp = /[a-zа-я]+/gi;
    const isLetters = str.match(regexp);
    if (!isLetters && alwaysEmpty) {
        return (str);
    } else {
        let result = str;
        let i = 0;
        while (i < count) {
            let len = result.length; // длина строки
            let randomNum = randomNumber(len);// случайное число в диапазоне  длины строки
            if (result[randomNum].match(regexp)) {//проверка символа
                result = result.slice(0, randomNum) + result.slice(randomNum + 1);
                i++;
            }
        }
        return (result);
    }
}

removeSymbol(" Напишите скрипт на  который Lorem ipsum dolor sit amet. | 1234567890 !@#$%^&*()_+?><.'\"");
