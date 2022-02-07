"use strict";
// Map

// Пусть дан массив массивов ([[1,"first"], [3,"third"]]).
// Создайте коллекцию Map из этого массива.
// Получите список ключей и значений отдельно.
// Получите текущее количество элементов.
// Добавьте и удалите элемент
// Произведите поиск по ключу

const map = new Map([
  [1, "first"],
  [3, "third"],
]);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map.size);
console.log(map.set(2, "second"));
console.log(map.delete(3));
console.log(map.has(1));
console.log(map);

// Set

// Создайте коллекцию Set с начальными значениями 1,2,3.
// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
// Добавите еще несколько элементов.
// С помощью цикла for-of переберите ее значения и выведите в консоль.
// Найдите сумму этих значений.
// Удалите элемент 2.
// Очистите всю коллекцию.

// Из массива [1,6,9,4,9,1,5,6] получить массив уникальных значений.
// Из массивов [1,6,9,4,9,1,5,6] и [5, 10, 11] получить один массив уникальных значений.

const set = new Set();
console.log(set.add(1));
console.log(set.add(2));
console.log(set.add(3));
console.log(set.has(3));
console.log(set.has(4));
console.log(set.add(5));
console.log(set.add(7));
for (let val of set.values()) {
  console.log(val);
}
console.log(set.delete(2));
console.log(set.clear());
console.log(set);

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];

const uniqueValues1 = Array.from(new Set(arr1));
console.log(uniqueValues1);

const array1 = [1, 6, 9, 4, 9, 1, 5, 6];
const array2 = [5, 10, 11];

const uniqueValues2 = Array.from(new Set(array1));
const uniqueValues3 = Array.from(new Set(array2));
const alluniqueValues = new Set([...array1, ...array2]);
console.log(alluniqueValues);

// MyArray
// * Сделать MyArray итерируемым.
// (Пример: https://github.com/pecourses/pe2021-2-js-intro/blob/main/js/symbol.iterator.js)
