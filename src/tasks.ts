// 1-task
const sum = (a: number, b: number): number => a + b;

// 2-task
const min_to_sec = (min: number): number => min * 60;

// 3-task
const nextInteger = (num: number): number => num + 1;

// 4-task
const triangleArea = (base: number, height: number): number =>
  (base * height) / 2;

// 5-task
const ageToDays = (age: number): number => age * 365;

// 6-task
const numThirdPower = (num: number): number => num ** 3;

// 7-task
const firstElement = (arr: any[]): any => arr[0];

// 8-task
const power = (num: number, num2: number): number => num * num2;

// 9-task
const hourToSec = (hour: number): number => hour * 3600;

// 10-task
const thirdSide = (a: number, b: number): number => a + b - 1;

// 11-task
const reminder = (a: number, b: number): number => a % b;

// 12-task
const squareArea = (a: number, b: number): number => a * b;

// 13-task
const addString = (str: string): string => "Something " + str;

// 14-task
const numSquare = (num: number): number => num ** 2;

// 15-task
const belowZero = (num: number): boolean => num <= 0;

// 16-task
const angles = (num: number): number => (num - 2) * 180;

// 17-task
const points = (point2: number, point3: number): number =>
  point2 * 2 + point3 * 3;

// 18-task
const addEdabit = (str: string): string => str + "Edabit";

// 19-task
const belowHundred = (num: number, num2: number): boolean => num + num2 < 100;

// 20-task
const fillArr = (num: number): number[] => {
  let arr: number[] = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

// 21-task
const legs = (chickens: number, cows: number, sheep: number): number =>
  chickens * 2 + (cows + sheep) * 4;

// 22-task
const isTrue = (val: boolean, val2: boolean): boolean => val && val2 === true;

// 23-task
const isEqual = (num: number, num2: number): boolean => num === num2;

// 24-task
const pointInFootball = (win: number, tie: number, lose: number): number =>
  win * 3 + tie;

// 25-task
const seconds = (hour: number, min: number): number => hour * 3600 + min * 60;

// 26-task
const fun = (x: number): boolean => x === 7;

// 27-task
const checkEquality = (x: any, y: any): boolean => typeof x === typeof y;

// 28-task
const booleanToString = (val: boolean): string => (val ? "true" : "false");

// 29-task
const returnArg = (arg: any): any => arg;

// 30-task
const FPScalculator = (min: number, frame: number): number => min * 60 * frame;

// 31-task
const calc = (str: string): number => eval(str);

// 32-task
const isTens = (num: number, num1: number): boolean =>
  num === 10 || num1 === 10 || num + num1 === 10;

// 33-task
const findFuel = (km: number): number => (km * 10 <= 100 ? 100 : km * 10);

// 34-task
const findBiggest = (num: number, num1: number): number =>
  num > num1 ? num : num1;

// 35-task
const createArr = (x: number, y: number): number[] => [x, y];

// 36-task
const equalStrings = (str1: string, str2: string): boolean =>
  str1.length === str2.length;

// 37-task
const emptyStr = (str: string): boolean => str === "";

// 38-task
const mod5 = (son: number): boolean => son % 5 === 0;

// 39-task
const mod100 = (son: number): boolean => son % 100 === 0;

// 40-task
const lengthString = (str: string): number =>
  str === "" ? 0 : 1 + lengthString(str.slice(1));

// 41-task
const mod0 = (x: number, y: number): boolean => x % y === 0;

// 42-task
const numberConvert = (str: string): number => parseInt(str);

// 43-task
const areaSquare = (a: number, b: number): number =>
  a > 0 && b > 0 ? a * b : -1;

// 44-task
const ismFam = (ism: string, familiya: string): string => `${familiya},${ism}`;

// 45-task
const bug = (isTrue: boolean): string => (isTrue ? "saddays" : "it'sagoodday");
