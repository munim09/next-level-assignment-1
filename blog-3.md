Generic enables to create reusable components and functions that can work with different data types while maintaining type safety. Generic adapts different data types in single function or component.

Function:

Without generic:
func1 takes number as argument which is too specific and which only allows number type where func2 is too broad which removes type safety.

```ts
function func1(arg: number): number {
    return arg;
}

function func2(arg: any): any {
    return arg;
}
```

With generic:
Generic uses type parameter (Like <T>) which allows the function or component to work with different data types. The type will be decided later when the function is called. func3 allows multiple data types like "string", "number" etc.

```ts
function func3<T>(arg: T) {
    return arg;
}

let output1 = func3<string>("data");
let output2 = func3<string>(100);
```

Component:

In the following example, instead of creating multiple interface, we can create single generic interface that can work with different data types like "string", "number" etc.

```ts
interface Data<T> {
    data: T;
}

const textData: Data<string> = { data: "Hello" };
const numberData: Data<number> = { data: 42 };
```
