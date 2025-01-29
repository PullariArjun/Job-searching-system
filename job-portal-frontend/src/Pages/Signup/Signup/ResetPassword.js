import {
    Button,
    Divider,
    Modal,
    PasswordInput,
    PinInput,
    TextInput,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import {
    changePassword,
    sendOtp,
    verifyOtp,
} from "../../../Services/UserService";
import { SignupValidation } from "../../../Services/FormValidation";
import {
    SuccessNotification,
    ErrorNotification,
} from "../../../Utilities/Notifications/Notifications";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [resendLoader, setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        } else setSeconds((s) => s - 1);
    }, 1000);
    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email)
            .then((res) => {
                SuccessNotification(
                    "OTP sent successfully...",
                    "Please check your mail"
                );
                setOtpSent(true);
                setOtpSending(false);
                setResendLoader(true);
                interval.start();
            })
            .catch((err) => {
                console.log(err);
                ErrorNotification(
                    "OTP sending faild ",
                    err.response?.data?.errorMessage
                );
                setOtpSending(false);
            });
    };
    const handleVerifyOtp = (otp) => {
        verifyOtp(email, otp)
            .then((res) => {
                console.log(res);
                SuccessNotification(
                    "OTP verified successfully",
                    "Enter new password..."
                );
                setVerified(true);
            })
            .catch((err) => {
                console.log(err);
                ErrorNotification(
                    "OTP verification faild",
                    err.response?.data?.errorMessage
                );
            });
    };
    const resendOtp = () => {
        if (resendLoader) return;
        handleChangePassword();
    };
    const changeEmail = () => {
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    };
    const handleChangePassword = () => {
        changePassword(email, password)
            .then((res) => {
                console.log(res);
                SuccessNotification(
                    "Password changed",
                    "Login with new password"
                );
                props.close();
            })
            .catch((err) => {
                console.log(err);
                ErrorNotification(
                    "Password change failed..",
                    err.response?.data?.errorMessage
                );
            });
    };
    return (
        <Modal
            opened={props.opened}
            onClose={props.close}
            title="Authentication"
        >
            <div className="flex flex-col gap-5">
                <TextInput
                    name="email"
                    size="md"
                    onChange={(event) => setEmail(event.target.value)}
                    leftSection={<IconAt size={16} />}
                    label="Email"
                    withAsterisk
                    placeholder="Enter your email"
                    rightSection={
                        <Button
                            loading={otpSending && !otpSent}
                            onClick={handleSendOtp}
                            autoContrast
                            variant="filled"
                            size="xs"
                            className="mr-1"
                            disabled={email === "" || otpSent}
                        >
                            Send OTP
                        </Button>
                    }
                    rightSectionWidth={"xl"}
                />
                <Divider size={"xs"} />
                {otpSent && (
                    <PinInput
                        onComplete={handleVerifyOtp}
                        length={6}
                        type="number"
                        className="mx-auto"
                        size="md"
                        gap={"lg"}
                    />
                )}
                {!verified && otpSent && (
                    <div className="flex gap-2">
                        <Button
                            fullWidth
                            color="gold.4"
                            loading={otpSending}
                            onClick={resendOtp}
                            autoContrast
                            variant="light"
                        >
                            {resendLoader ? seconds : "Resend"}
                        </Button>
                        <Button
                            fullWidth
                            onClick={changeEmail}
                            autoContrast
                            variant="filled"
                        >
                            Change Email
                        </Button>
                    </div>
                )}
                {verified && (
                    <PasswordInput
                        error={passwordError}
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(
                                SignupValidation("password", e.target.value)
                            );
                        }}
                        label="Password"
                        withAsterisk
                        placeholder="Enter new Password"
                    />
                )}
                {verified && (
                    <Button
                        onClick={handleChangePassword}
                        autoContrast
                        variant="filled"
                    >
                        Change Password
                    </Button>
                )}
            </div>
        </Modal>
    );
};
export default ResetPassword;
