const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) != true) {return false;}
  
  let arr = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {arr.push(members[i]);}
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) { //цикл по массиву
    arr[i] = arr[i].toUpperCase();
    
    for (let j = 0; j < arr[i].length; j++) { //цикл по ячейке массива
      if (arr[i].indexOf(" ") == 0) { //проверка, является ли первый символ строки пробелом
        arr[i] = arr[i].substr(1); //выделение строки уже без пробела                      
      }
    }
    
    newArr.push(arr[i].substr(0, 1)); //создание массива из первых букв каждой строки 
  }
  
  newArr.sort(); //сортировка массива

  let str = newArr.join(""); //изменение массива в строку
  return str;
};
