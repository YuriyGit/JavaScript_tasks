/*
1. Напишите скрипт на JS, который в заданном тексте удалит два символа, выбранных случайно
*/
function randomNumber(num) {    //получаем случайное число до числа num
    let random = Math.random() * (num + 1);
    return Math.floor(random);
}
//////////////////////
function removeSymbol(str, count = 2) {
    const alwaysEmpty = str === '' || str.length <= count;
    if (!alwaysEmpty) {
        let result = str;
        for (let i = 0; i < count; i++) {
            let len = result.length;
            let randomNum = randomNumber(len);
            result = result.slice(0, randomNum) + result.slice(randomNum + 1);
        }
        return (result);
    } else {
        return ("");
    }
}
removeSymbol("Далеко-далеко, за словесными.");