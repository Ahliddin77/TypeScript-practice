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

// 56-task
function songiElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

// 57-task
function kabisa(yil: number): boolean {
  return (yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0;
}

// 58-task
function soz(word: string): string {
  return word.slice(1);
}

// 59-task
function flipBool(bool: boolean): boolean {
  return !bool;
}

// 60-task
function juftMiToqmi(son: number): string {
  return son % 2 === 0 ? "juft" : "toq";
}

// 61-task
function qutilar(qavat: number): number {
  return qavat ** 2;
}

// 62-task
function arrayToString(arr: (string | number)[]): string {
  return arr.join("");
}

// 63-task
function birlash<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

// 64-task
function topIndex(arr: string[], str: string): number {
  return arr.indexOf(str);
}

// 65-task
function arrElement<T>(arr: T[], index: number): T {
  return arr[Math.floor(index)];
}

// 66-task
function namuna(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

// 67-task
function sozSon(soz: string): number {
  const lugat: Record<string, number> = {
    nol: 0,
    bir: 1,
    ikki: 2,
    uch: 3,
    "to’rt": 4,
    besh: 5,
    olti: 6,
    yetti: 7,
    sakkiz: 8,
    "to’qqiz": 9,
  };
  return lugat[soz] ?? -1;
}

// 68-task
function bormi(arr: number[], son: number): boolean {
  return arr.includes(son);
}

// 69-task
function sonString(arr: number[]): string[] {
  return arr.map(String);
}

// 70-task
function kubikchalar(qator: number): number {
  return 6 * qator ** 2;
}

// 71-task
function sayohat(odamlar: number): number {
  return Math.ceil(odamlar / 5);
}

// 72-task
function boshJoy(str: string): boolean {
  return str.includes(" ");
}

// 73-task
interface Quti {
  height: number;
  length: number;
  width: number;
}
function hajm(quti: Quti): number {
  return quti.height * quti.length * quti.width;
}

// 74-task
function sonlar(son1: number, son2: number, arr: number[]): number[] {
  return arr.filter((x) => x > son1 && x < son2);
}

// 75-task
function turlar(arr: unknown[]): string[] {
  return arr.map((el) => typeof el);
}

// 76-task
function qaytarString(str: any, miqdor: number): string {
  if (typeof str !== "string") return "NotAString!!";
  return str.repeat(miqdor);
}

// 77-task
function sozlar(str: string): number {
  return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
}

// 78-task
function faqatString(arr: any[]): string[] {
  return arr.filter((x) => typeof x === "string");
}

// 79-task
function olishKalitlar(obj: object): string[] {
  return Object.keys(obj);
}

// 80-task
function olishQiymatlar(obj: Record<string, any>): any[] {
  const qiymatlar: any[] = [];
  for (const kalit in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, kalit)) {
      qiymatlar.push(obj[kalit]);
    }
  }
  return qiymatlar;
}

// 81-task
function qiymatlarYigindi(obj: Record<string, number>): number {
  let sum = 0;
  for (const kalit in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, kalit)) {
      sum += obj[kalit];
    }
  }
  return sum;
}

// 82-task
function tozalash<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

// 83-task
function engKatta(arr: number[]): number {
  return Math.max(...arr);
}

// 84-task
function kattaHarflar(arr: string[]): string[] {
  return arr.map((x) => x.toUpperCase());
}

// 85-task
function massivString(arr: (string | number)[]): string {
  return arr.join(", ");
}

// 86-task
function stringMassiv(str: string): string[] {
  return str.split(" ");
}

// 87-task
function palindrom(str: string): boolean {
  str = str.toLowerCase().replace(/\s+/g, "");
  return str === str.split("").reverse().join("");
}

// 88-task
function nechtaTrue(arr: boolean[]): number {
  return arr.filter((x) => x === true).length;
}

// 89-task
function raqamAjrat(son: number): number[] {
  return String(son).split("").map(Number);
}

// 90-task
function teskariSon(son: number): number {
  return Number(String(son).split("").reverse().join(""));
}

// 91-task
function ascii(str: string): number[] {
  return str.split("").map((x) => x.charCodeAt(0));
}

// 92-task
function belgilar(str: string): Record<string, number> {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

// 93-task
function harflarAjrat(str: string): { unli: string[]; undosh: string[] } {
  const unli = "aeiouAEIOU";
  return {
    unli: [...str].filter((x) => unli.includes(x)),
    undosh: [...str].filter((x) => !unli.includes(x) && /[a-z]/i.test(x)),
  };
}

// 94-task
function fasl(oy: number): string {
  if ([12, 1, 2].includes(oy)) return "qish";
  if ([3, 4, 5].includes(oy)) return "bahor";
  if ([6, 7, 8].includes(oy)) return "yoz";
  if ([9, 10, 11].includes(oy)) return "kuz";
  return "noto‘g‘ri oy";
}

// 95-task
function yoshHisobla(tugilganYil: number): number {
  const hozirgiYil = new Date().getFullYear();
  return hozirgiYil - tugilganYil;
}

// 96-task
function ekranOlchami(): string {
  return `${window.innerWidth}x${window.innerHeight}`;
}

// 97-task
function butunSonmi(x: number): boolean {
  return Number.isInteger(x);
}

// 98-task
function alfavit(str: string): string {
  return str.split("").sort().join("");
}

// 99-task
function harfKatta(str: string): string {
  return str.toUpperCase();
}

// 100-task
function boshHarfKatta(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
