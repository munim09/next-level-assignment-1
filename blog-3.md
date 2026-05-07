Generics allows to create reusable components and functions that can work with different data types while maintaining type safety. Instead of creating separate components and functions for string, numbers, or objects, generics allow to adapt different data types in single funciton or component.

Genetic Funciton:

Without generics:
func1 takes number as argument which is too specific and which only allows number type where func2 is too broad which removes type safety.

```ts
function func1(arg: number): number {
    return arg;
}

function func2(arg: any): any {
    return arg;
}
```

With genrics:
Generics use type parameter (Like <T>) which allows the function or component to work with different data types. The type will be decided later when the function is called.

```ts
function func3<T>(arg: T): T {
    return arg;
}

let output1 = func3<string>("data");
let output2 = func3<string>(100);
```

Generic Component:

In the floowing example, instead of creating multiple interface, we can create single generic interface that can work with different data type like string, number

```ts
interface Content<T> {
    content: T;
}

const textContent: Content<string> = { content: "Hello" };
const numberContent: Content<number> = { content: 42 };
```
