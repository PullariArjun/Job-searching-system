import {
    Anchor,
    Button,
    Checkbox,
    Group,
    LoadingOverlay,
    PasswordInput,
    Radio,
    rem,
    TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../Services/UserService";
import { SignupValidation } from "../../../Services/FormValidation";
import {
    ErrorNotification,
    SuccessNotification,
} from "../../../Utilities/Notifications/Notifications";

const SignupPage = () => {
    const form = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT",
    };
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);
    const navigate = useNavigate();
    const [loading, setLoading] = useState();
    const handleChange = (event) => {
        if (typeof event === "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name,
            value = event.target.value;

        // Update the data state
        setData({ ...data, [name]: value });

        // Perform validation
        if (name === "confirmPassword") {
            setFormError((prevError) => ({
                ...prevError,
                confirmPassword:
                    data.password !== value ? "Password should match" : "",
            }));
        } else {
            setFormError((prevError) => ({
                ...prevError,
                [name]: SignupValidation(name, value),
            }));
        }
    };

    const handleSubmit = () => {
        // Check for form errors and missing fields
        for (let key in formError) {
            if (key === "accountType") continue;
            if (formError[key] !== "") {
                ErrorNotification("Enter valid details");
                return;
            }
            if (data[key] === "") {
                ErrorNotification("Enter valid details");
                return;
            }
        }
        setLoading(true);
        registerUser(data)
            .then((res) => {
                console.log(res);
                SuccessNotification(
                    "Registered Successfully",
                    "Redirecting to login page..."
                );
                setTimeout(() => {
                    setLoading(false);
                    setData(form);
                    navigate("/login");
                }, 4000);
            })
            .catch((err) => {
                setLoading(false);
                ErrorNotification(
                    err.response?.data?.errorMessage || "An error occurred"
                );
            });
    };

    return (
        <>
            <LoadingOverlay
                visible={loading}
                className="translate-x-1/2"
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
                loaderProps={{ color: "gold.4", type: "bars" }}
            />
            <div className="w-1/2 px-20 flex flex-col justify-center gap-3 h-full">
                <div className="text-2xl font-semibold">Create Account</div>
                <TextInput
                    label="Full Name"
                    name="name"
                    placeholder="Enter your Name"
                    withAsterisk
                    onChange={handleChange}
                    error={formError.name}
                />
                <TextInput
                    withAsterisk
                    name="email"
                    leftSection={
                        <IconAt style={{ width: rem(16), height: rem(16) }} />
                    }
                    label="Email"
                    placeholder="Enter a valid Email"
                    onChange={handleChange}
                    error={formError.email}
                />
                <PasswordInput
                    withAsterisk
                    name="password"
                    leftSection={
                        <IconLock style={{ width: rem(16), height: rem(16) }} />
                    }
                    label="Password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    error={formError.password}
                />
                <PasswordInput
                    withAsterisk
                    name="confirmPassword"
                    leftSection={
                        <IconLock style={{ width: rem(16), height: rem(16) }} />
                    }
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    error={formError.confirmPassword}
                />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleChange}
                    label="You are?"
                    withAsterisk
                >
                    <Group mt={"xs"}>
                        <Radio
                            className="px-6 py-4 border border-mine-shaft-800 rounded-lg hover:bg-mine-shaft-900 has-[:checked]:border-gold-400 transition-all ease-in-out duration-1000"
                            value="APPLICANT"
                            label="Applicant"
                        />
                        <Radio
                            className="px-6 py-4 border border-mine-shaft-800 rounded-lg hover:bg-mine-shaft-900 has-[:checked]:border-gold-400 transition-all ease-in-out duration-1000"
                            value="EMPLOYER"
                            label="Employer"
                        />
                    </Group>
                </Radio.Group>
                <Checkbox
                    autoContrast
                    label={
                        <span>
                            I accept <Anchor>terms & Conditions</Anchor>
                        </span>
                    }
                />
                <Button
                    loading={loading}
                    onClick={handleSubmit}
                    autoContrast
                    variant="filled"
                >
                    Sign up
                </Button>
                <div className="mx-auto">
                    Have an account?{" "}
                    <Link
                        to={"/login"}
                        className="text-gold-400 hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};
export default SignupPage;
