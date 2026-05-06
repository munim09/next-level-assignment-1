//Problem 1

function filterEvenNumbers(inputNumbers: number[]): number[] {
    let evenNumbers: number[] = [];
    for (const num of inputNumbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

//console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
//console.log(filterEvenNumbers(["asdasd", "asdasd"]));

//Problem 2

function reverseString(input: string): string {
    let reverseString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reverseString = reverseString + input[i];
    }

    return reverseString;
}

console.log(reverseString("typescript"));

//Problem 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "number") {
        return "Number";
    } else return "String";
}
console.log(checkType("Hello"));
console.log(checkType(42));

//Problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "id"));

//Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & {
    isRead: boolean;
} {
    return {
        ...book,
        isRead: true,
    };
}

const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));

//Problem 6

class Person {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    private grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//Problem 7

function getIntersection(numList1: number[], numList2: number[]): number[] {
    const res: number[] = [];
    for (const num of numList1) {
        if (numList2.includes(num) && !res.includes(num)) {
            res.push(num);
        }
    }

    return res;
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
console.log(getIntersection([1, 2, 3, 4, 5], []));
console.log(getIntersection([], []));
console.log(getIntersection([], [1, 2]));
console.log(getIntersection([], []));
