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

const chainMaker = {
  result: [],
  temp: [],
  tempR: [],
  Length: 0,

  getLength() {
    this.Length = this.temp.length;
    return this;
  },
  addLink(value) {
    //  if (value!==)

    this.temp.push(value);
    return this;
  },
  removeLink(position) {
    for (let i = 0; i < this.temp.length; i++) {
      if (i !== position) this.tempR.push(this.temp[i]);
    }
    this.temp = this.tempR;
    this.tempR = [];
    return this;
  },
  reverseChain() {
    this.temp = this.temp.reverse;
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.temp.length; i++) {
      if (i !== this.temp.length - 1) {
        this.result.push(`( ${this.temp[i]} )~~`);
      }
      if (i === this.temp.length - 1) {
        this.result.push(`( ${this.temp[i]} )`);
      }
    }
    this.temp = [];
    return this.result.join("");
  },
};
// console.log(chainMaker.addLink(1).addLink(2));
console.log(
  chainMaker
    .addLink("ABC")
    .reverseChain()
    .reverseChain()
    .addLink("DEF")
    .removeLink(1)
    .addLink({ 0: "first", 1: "second", length: 2 })
    .reverseChain()
    .addLink(1.233)
    .addLink(1.233)
    .reverseChain()
    .addLink("ABC")
    .finishChain()
);
