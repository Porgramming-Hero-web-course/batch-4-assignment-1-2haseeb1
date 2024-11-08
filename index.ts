
"use strict";

// Problem 1
function sumArray(numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}
// Sample input & output
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Problem 2
function removeDuplicates(array: number[]): number[] {
    return array.filter((num, index) => array.indexOf(num) === index);
}
// Sample input & output
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1,2,3,4,5]

// Problem 3
function countWordOccurrences(inputSentence: string, inputWord: string): number {
    const lowercaseSentence = inputSentence.toLowerCase();
    const lowercaseWord = inputWord.toLowerCase();
    const allWords = lowercaseSentence.split(" ");
    return allWords.filter(w => w === lowercaseWord).length;
}
// Sample input & output
console.log(countWordOccurrences("i like typescript", "typescript")); // Output: 1

// Problem 4
type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    return shape.shape === "circle"
        ? Math.PI * Math.pow(shape.radius, 2)
        : shape.width * shape.height;
}

// Sample inputs
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea.toFixed(2)); // Output: 78.54 (approximately)

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // Output: 24

// Problem 5
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample input
const person = {
    name: "Alice",
    age: 30,
};
// Sample output
console.log(getProperty(person, "name")); // Output: Alice

// Problem 6
function updateProfile<T>(profile: T, updates: Partial<T>): T {
    return { ...profile, ...updates };
}

const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};
// Sample input & output
console.log(updateProfile(myProfile, { age: 26 }));
// Output: { name: 'Alice', age: 26, email: 'alice@example.com' }

// Problem 7
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);
// Sample output
console.log(`${car.getCarAge()}`); // Output: 6

// Problem 8
function validateKeys(obj: Record<string, unknown>, keys: string[]): boolean {
    return keys.every(key => key in obj);
}

// Sample Input
const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"])); // Output: true
console.log(validateKeys(person2, ["name", "phone"])); // Output: false
