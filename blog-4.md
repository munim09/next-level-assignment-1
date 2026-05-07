Object-Oriented Programming (OOP) has four pillars-Inheritance, Polymorphism, Abstraction, and Encapsulation. This four pillars help manage logic and reduce complexity in large scale project.

Inheritance:
Inheritance enables to create a class using properties from different class. The new class (called subclass) inherit the properties from another class (called parent class). It helps to reduce duplicate code.

In the following example, subclass Student inherit properties from parent class Person.

```ts
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
```

Polymorphism:
Polymorphism means different classes can have the same method with different implementation. Different subclass can define the shared method inheretied from the parent class based on their own logic. It helps to make the code flexible for customization in large projects.

Abstraction:
Abstraction focuses on showing the important features to the user while hiding the internal implementtion details. It hides complex logic and shows important details.

Encapsulation:
It binds the data and methods inside a class. It also retricts the access to the data and methods using the access modifier "private", "protected" and "public". It protects data and controls access.

In large project, these four pillars help to manage the code and reduce complexity.
