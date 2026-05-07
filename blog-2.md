DRY (Don't Repeat Yourself) is a software development principle. It means avoid writing the same code multiple times. Pick and Omit help to follow the DRY principle by allowing developers to create new types from an existing interface instead of rewriting the same properties multiple times. Master interface may contain all properties of a model. Different parts of the application may only need certain fields. Instead of creating multiple similar interfaces manually, Pick and Omit allow developers to create specialized “slices” from the original interface.

Suppose the following part is master interface:

interface User {
id: number;
name: string;
email: string;
password: string;
}

Pick can create new type by selecting only specific properties from the existing interface. In the following example, pick creates new type LoginUser by only selecting "email" and "password" from User interface.

type LoginUser = Pick<User, "email" | "password">;

const loginData: LoginUser = {
email: "user@email.com",
password: "1234"
};

Omit cant create a new type by removing specific properties like "password" from an existing interface. In the following example, moit creates new type PublicUser by omiting "password" perperties from User interface.

type PublicUser = Omit<User, "password">;

const user: PublicUser = {
id: 1,
name: "user",
email: "user@email.com"
};
