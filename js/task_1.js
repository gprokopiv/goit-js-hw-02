// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в
// формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
// а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const element = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const number = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// element[1] = 'Mango';
// console.log(element[1]); 


const getItemsString = function(array) {
  let result = '';
  
    for (let i=0; i<array.length; i+=1) {
      result+= `'${i + 1} - ${array[i]}'\n`;
    }

    return result;
};


console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15]));

  /*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */
  
  /*
  '1 - 5
  2 - 10
  3 - 15
  '
  */
