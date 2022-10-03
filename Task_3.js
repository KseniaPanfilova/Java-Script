// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
console.log("\n-----------ex 1-----------\n");

let x = 2;
for (let i = 1; i <= 10; i = ++i) {
    let a;
    console.log("2 в степени", i,"=", a = x ** i);
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
console.log("\n-----------ex 1*-----------\n");

let y = 2;
function exp(exponent) {
    for (let i = 1; i <= exponent; i = ++i) {
        console.log("2 в степени", i,"=", a = y ** i);
    }
}

exp(8);


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:cntgty
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
console.log("\n-----------ex 2-----------\n");

let smile = ":)";
for (let i = 1; i <= 5; i = ++i) {
    console.log(smile.repeat(i));
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

console.log("\n-----------ex 2*-----------\n");

function moreSmilesForSmileGod(smile, smilesAmount) {
    if (typeof smile != "string") {
        smile = smile.toString();
    }
    for (let i = 1; i <= smilesAmount; i = ++i) {
        console.log(smile.repeat(i));
    }
}

moreSmilesForSmileGod("=P", 7);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

console.log("\n-----------ex 3**-----------\n");

function getWordStructure(word) {
    let vowels = "AEIOUАЕЁИОУЫЭЮЯ";
    let consonants = "BCDFGHJKLMNPQRSTVWXYZБВГДЖЗЙКЛМНПРСТФХЦЧШЩЬЪ";
    let vowelsCounter = 0;
    let consonantsCounter = 0;
    if (typeof(word) != "string" || ((typeof(+word) == "number" && !isNaN(+word)))) {
        return(console.log("Данная функция обрабатывает только слова. Введите, пожалуйста, слово."));
    } else {
        for (let i = 0; i < word.length; i = ++i) {
            for (let j = 0; j < vowels.length; j = ++j) {
                if (word[i].toUpperCase() == vowels[j]) {
                    vowelsCounter = ++vowelsCounter;
                }
                if (word[i].toUpperCase() == consonants[j]) {
                    consonantsCounter = ++consonantsCounter;
                }
            }
        }    
        console.log("Слово", word, "состоит из", vowelsCounter, "гласных букв и", consonantsCounter, "согласных букв.");
    }
}
     
getWordStructure("1111");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

console.log("\n-----------ex 4**-----------\n");

function isPalindrom(str) {
    if (typeof str != "string") {
        return(console.log("Данная функция обрабатывает только строки. Введите строку."));
    } else {
        let strLow = str.toLowerCase();
        let strWithoutSpaces = strLow.match(/[^\s]/g);
        let counter = 0;
        for (let i = 0; i < strWithoutSpaces.length; i = ++i) {
            if (strWithoutSpaces[i] == strWithoutSpaces.reverse()[i]) {
                counter = ++counter;
            }
        }
        if (strWithoutSpaces.length == counter) {
            console.log("Слово/фраза","'" + str + "'", "является полиндромом.");
        } else {
            console.log("Слово/фраза","'" + str + "'", "не является полиндромом.");
        }
    }
}

isPalindrom("Abba");


