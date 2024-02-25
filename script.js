// Учитывая целочисленный массив arr и функцию фильтрации fn, верните отфильтрованный массив filteredArr.
//
//     Функция fn принимает один или два аргумента:
//
//     arr[i] - number from the arr
// i - index of arr[i]
// filteredArr должен содержать только элементы из arr, для которых вычисляется выражение fn(arr[i], i)
// к истинному значению. Истинное значение — это значение, при котором Boolean(value) возвращает true.
//
//     Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let filter = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)){
            res.push(arr[i])
        }
    }
    return res
};
fn = function greaterThan10(n) { return n > 10; }
const a = [0,10,20,30];
console.log(filter(a,fn))