// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
/**
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array}
 */
let mergeTwoLists = function(list1= [], list2= []) {
    let list = [];
    let counter = list1.length + list2.length;
    for(let i = 0; i < counter; i++){
        if (list1.length && list2.length){
            list[i] = list1[0] < list2[0] ? list1.shift() : list2.shift()
        } else if (!list1.length) {
            list[i] = list2.shift();
        } else {
            list[i] = list1.shift();
        }
    }
    return list;
};

let a = [2,5,9]
let b = [1, 6, 8]
console.log(mergeTwoLists(a, b))