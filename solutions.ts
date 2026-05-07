function filterEvenNumbers(inputNumbers: number[]): number[] {
    let evenNumbers: number[] = [];
    for (const num of inputNumbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

function reverseString(input: string): string {
    let reverseString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reverseString = reverseString + input[i];
    }

    return reverseString;
}

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "number") {
        return "Number";
    } else return "String";
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface BookWithReadStatus extends Book {
    isRead: boolean;
}

function toggleReadStatus(book: Book): BookWithReadStatus {
    return {
        ...book,
        isRead: "isRead" in book ? !book.isRead : true,
    };
}

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

function getIntersection(numList1: number[], numList2: number[]): number[] {
    const res: number[] = [];
    for (const num of numList1) {
        if (numList2.includes(num) && !res.includes(num)) {
            res.push(num);
        }
    }

    return res;
}
