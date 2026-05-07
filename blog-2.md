DRY (Don’t Repeat Yourself) is a software development principle which helps us to avoid duplicate code. Pick and Omit helps us to create new types from an existing interface instead of re-writing the same properties multiple times. A master interface may contain all the properties of a model. But sometimes, you may need some specific fields. Pick and Omit help us to create specialized “slices” from the master interface.

Suppose the following represents master interface:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
}
```

Pick can create a new type by selecting only specific properties from the existing interface. In the following example, pick creates new type LoginUser by selecting only "email" and "password" from User interface.

```ts
type LoginUser = Pick<User, "email" | "password">;

const loginData: LoginUser = {
    email: "user@email.com",
    password: "1234",
};
```

Omit can create a new type by removing specific properties like "password" from an existing interface. In the following example, omit creates new type PublicUser by omiting "password" perperties from User interface.

```ts
type PublicUser = Omit<User, "password">;

const user: PublicUser = {
    id: 1,
    name: "user",
    email: "user@email.com",
    age: 20,
};
```
