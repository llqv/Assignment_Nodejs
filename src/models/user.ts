class User {
    name: String;
    email: String;
    password: String;
    role: Number;
    constructor(
        name: String,
        email: String,
        password: String,
        role: Number
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
export default User;