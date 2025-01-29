import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../Services/UserService";
import { LoginValidation } from "../../../Services/FormValidation";
import {
    ErrorNotification,
    SuccessNotification,
} from "../../../Utilities/Notifications/Notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Slices/UserSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const form = {
        email: "",
        password: "",
    };

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);
    const [opened, { open, close }] = useDisclosure(false);
    const handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;
        setFormError((prevError) => ({
            ...prevError,
            [name]: LoginValidation(name, value),
        }));
        setData({ ...data, [name]: value });
    };
    const handleSubmit = () => {
        setLoading(true);
        for (let key in form) {
            if (data[key] === "" || formError[key] !== "") {
                ErrorNotification("Please enter you details");
                return;
            }
        }
        loginUser(data)
            .then((res) => {
                console.log(res);
                SuccessNotification(
                    "Login success..",
                    "Redirecting to Home page.."
                );
                setTimeout(() => {
                    setLoading(false);
                    dispatch(setUser(res));
                    navigate("/home");
                }, 4000);
            })
            .catch((err) => {
                setLoading(false);
                ErrorNotification(
                    err.response?.data?.errorMessage || "An Error occured"
                );
            });
    };
    return (
        <>
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
                loaderProps={{ color: "gold.4", type: "bars" }}
            />
            <div className="w-1/2 px-20 flex flex-col justify-center gap-3 h-full">
                <div className="text-2xl font-semibold">Create Account</div>
                <TextInput
                    name="email"
                    error={formError.email}
                    onChange={handleChange}
                    withAsterisk
                    leftSection={
                        <IconAt style={{ width: rem(16), height: rem(16) }} />
                    }
                    label="Email"
                    placeholder="Enter Email"
                />
                <PasswordInput
                    name="password"
                    error={formError.password}
                    onChange={handleChange}
                    withAsterisk
                    leftSection={
                        <IconLock style={{ width: rem(16), height: rem(16) }} />
                    }
                    label="Password"
                    placeholder="Enter Password"
                />
                <Button
                    loading={loading}
                    onClick={handleSubmit}
                    autoContrast
                    variant="filled"
                >
                    Login
                </Button>
                <div className="mx-auto">
                    Don't have an account?{" "}
                    <Link
                        to={"/sign-up"}
                        className="text-gold-400 hover:underline"
                    >
                        Signup
                    </Link>
                </div>
                <div
                    onClick={open}
                    className="text-gold-400 hover:underline cursor-pointer mx-auto"
                >
                    Forget password?
                </div>
            </div>
            <ResetPassword opened={opened} close={close} />
        </>
    );
};
export default LoginPage;
