const SignupValidation = (name, value) => {
    switch (name) {
        case "name":
            if (value.length === 0) return `Name is required`;
            return "";
        case "email":
            if (value.length === 0) return `Email is required`;
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
                return "Invalid email";
            return "";
        case "password":
            if (value.length === 0) return `Password is required`;
            if (
                !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    value
                )
            )
                return "Password should contain lowercase, uppercase, special characters and numbers with length 8";
            return "";
        default:
            return "";
    }
};
const LoginValidation = (name, value) => {
    switch (name) {
        case "email":
            if (value.length === 0) return "Enter you'r email";
            return "";
        case "password":
            if (value.length === 0) return "Enter you'r password";
            return "";
        default:
            return "";
    }
};
export { SignupValidation, LoginValidation };
