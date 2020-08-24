// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.



// function findLongestWord (string = "") {
// //    for (const word of string)}
// //    if (word === LongestWord) {
// //     LongestWord === findLongestWord;
// //    }
// //     return findLongestWord ;
// let words = string.split(' ');
//  let LongestWord = words[0];

//  for (const word of words) {
//      const isLongestWord = word.length < LongestWord.length;
//      if (isLongestWord === LongestWord) {
//         word === LongestWord.length;
//      }
//  } return LongestWord;  

//   }

  function findLongestWord (string = " ") {
    const words = string.split(' ');
    let longestWord = "";
    
      for (const word of words) {
        if (word.length > longestWord.length) {
        longestWord = word;
    }
    }
      return longestWord; 
    }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  