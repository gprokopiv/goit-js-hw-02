// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в 
// конец строки троеточие ..., после чего возвращает укороченную версию.


function formatString (string, maxLength = 40) {
    // let words = string.length;
    // return (string.length <= maxLength) 
    // ? string  
    // : string.pop(words.length - maxLength);
    
    
    // return (string.length > maxLength) ? string.slice(0, maxLength - 1) + '…' : string;
    return (string.length < maxLength) ? `${string}` : `${string.slice(0, maxLength)}`;
}
// return (string.length > maxLength) ? 
// `${string.slice(0, maxLength)}...`: `${string}`;
  

  
//   function(n){
//     return (this.length > n) ? this.substr(0, n-1) + '&hellip;' : this;
// };
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'

//   for (const words of string) {
//     if (string.length <= maxLength) {
//     return string;
//     }
//  } else {
// //     string.length.
// // }
// }
//   return longestWord; 