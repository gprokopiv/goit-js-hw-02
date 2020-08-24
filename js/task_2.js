// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) 
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.


function calculateEngravingPrice (message = "", pricePerWord = 0){
return(message.split(' ').length * pricePerWord);
}
// const calculate = function(message = "", pricePerWord = 0){
//  console.log(message.split(' ').length * pricePerWord);
// return message;
// }    
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));


 console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240