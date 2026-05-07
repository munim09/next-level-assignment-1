# why is "unknown" safer choice than "any"?

"any" labeled a "type safety hole" as it does not force type checking. It enables any operation on variable which can be the reason of runtime error.
But "unknown" is safe to use as it forces type checking before using the value.

In the below example, data.push(10) operation is allowable in complie time but it shows error at runtime.

```ts
let data: any = "hello";
data.push(10);
```

In the below example, data.toUpperCase() forces type checking before using the value.

```ts
let data: unknown = "hello";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
```

Type narrowing:
Type narrowing is a concept that converts data from general type to a specific type. "typeof", "instanceof", or "in" operators are used to check data type. It helps to find out the exact type at runtime and enables safe operation on the value.

```ts
function print(data: string | number) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    } else {
        console.log(data.toFixed(2));
    }
}
```

"unknown" and type narrowing makes TypeScript code safer and helps avoid runtime errors.
