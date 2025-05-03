//
//Primitive types
//
let num1: number;
num1 = 10;
num1 = 12.32;

let str1: string = "Hello world";
console.log(str1);

let bool1: boolean = str1 === "Hello world";
console.log(bool1);

let undefined1: unknown;
console.log(undefined1);

undefined1 = null;
console.log(undefined1);

// Object types

interface Shape {
  area: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  width: number;
  color?: string;
  [props: string]: unknown;
}

// Arrays

const numbers: number[] = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + " ");
}
const numbers2: Array<number> = [3, 2, 1];

// Tuples
// Has fixed length
// Declares which type lives in which index

type someTuple = readonly [string, number];

const tupleSample: someTuple = ["Hello granny", 123];
console.log(tupleSample[0]);
