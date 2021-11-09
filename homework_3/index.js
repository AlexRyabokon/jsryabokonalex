/* - Написать функцию filterBy(), которая будет принимать
 в себя 2 аргумента. Первый аргумент - массив, который будет 
 содержать в себе любые данные, второй аргумент - тип данных. 
 
 - Функция должна вернуть новый массив, который будет содержать 
 в себе все данные, которые были переданы в аргумент, за 
 исключением тех, тип которых был передан вторым аргументом. 
То есть, если передать массив ['hello', 'world', 23, '23', null],
 и вторым аргументом передать 'string', то функция вернет массив [23, null].*/


//author - Alexander Ryabokon

// first solution


let arr = ['Vasya', 'Petya', 'Uchat', 'JS', 109, 55, 99, null,]; 

function filterBy(arr, type) { 
    return arr.filter(item => typeof item !== type);
 } 
 
 console.log(filterBy(arr, "string")); 
 console.log(filterBy(arr, "number"));


// second solution - delete comment symbols for examination

/*

let item1 = prompt('Put first item in array', '');
    item2 = prompt('Put second item in array', '');
    item3 = +prompt('Put the number in array', '');

let arr2 = [item1, item2, item3];


function filterBy(arr2, type) { 
  return arr2.filter(item => typeof item !== type);
} 

console.log(filterBy(arr2, "string")); 
console.log(filterBy(arr2, "number")); 
*/