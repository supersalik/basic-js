"use strict";

// function getDNSStats(domains) {
//   let ti;
//   let uniq=[];
//   let temp = [];
//   let tempRes=[];
//   let result={};
//   let resName,resValue;
//   for (let cur of domains) {
//     temp.push(cur.split(".").reverse());
//   }

// for (let el of temp)
//  if ()

// result.resName=resValue;

//   for (let t of temp) {
//     for (let i of t) {
//       t.includes(i) ? ti++ : 0;
//     }
//   }
//   console.log(temp);
// }

// getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

function sortByHeight(arr) {
  let arrInd = [];
  let arrM = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arrInd.push(i);
    if (arr[i] !== -1) arrM.push(arr[i]);
  }
  arrM = arrM.sort((a, b) => a - b);
  console.log(arrM);

  for (let i = 0; i < arr.length; i++) {
    if (arrInd.includes(i)) result.push(-1);
    else {
      result.push(arrM[0]);
      arrM.shift();
    }
  }

  console.log([[[]]].flat().length);
  console.log(result);
  return result;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
// [-1, 150, 160, 170, -1, -1, 180, 190],
// );
// assert.deepEqual(
// sortByHeight([-1, -1, -1, -1, -1]),
// [-1, -1, -1, -1, -1],
// );
// assert.deepEqual(
// sortByHeight([-1]),
// [-1],
// );
// assert.deepEqual(
// sortByHeight([4, 2, 9, 11, 2, 16]),
// [2, 2, 4, 9, 11, 16],
// );
// assert.deepEqual(
// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]),
// [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
