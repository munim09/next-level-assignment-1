DRY (Don’t Repeat Yourself) is a software development principle. It means we should avoid writing the same code multiple times. Pick and Omit help follow the DRY principle by allowing us to create new types from an existing interface instead of redefining the same properties multiple times.

A master interface usually contains all the properties of a model. But different parts of an application often need only some specific fields. Instead of manually creating multiple similar interfaces, Pick and Omit let developers create smaller, specialized “slices” from the original interface in a clean and reusable way.

Suppose the following represents master interface:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

Pick can create new type by selecting only specific properties from the existing interface. In the following example, pick creates new type LoginUser by only selecting "email" and "password" from User interface.

```ts
type LoginUser = Pick<User, "email" | "password">;

const loginData: LoginUser = {
    email: "user@email.com",
    password: "1234",
};
```

Omit cant create a new type by removing specific properties like "password" from an existing interface. In the following example, moit creates new type PublicUser by omiting "password" perperties from User interface.

```ts
type PublicUser = Omit<User, "password">;

const user: PublicUser = {
    id: 1,
    name: "user",
    email: "user@email.com",
};
```
