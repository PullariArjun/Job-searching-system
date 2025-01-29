import { IconBriefcase } from "@tabler/icons-react";
import SignupPage from "./Signup/SignupPage";
import LoginPage from "./Signup/LoginPage";
import { useLocation } from "react-router-dom";

const Signup = () => {
    const location = useLocation();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <div
                className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${
                    location.pathname === "/sign-up"
                        ? "-translate-x-1/2"
                        : "translate-x-0"
                }`}
            >
                <LoginPage />
                <div
                    className={`w-1/2 transition-all ease-in-out duration-1000 h-[100vh] overflow-y-hidden bg-mine-shaft-900 flex items-center justify-center flex-col gap-2 ${
                        location.pathname === "/sign-up"
                            ? "rounded-r-[200px]"
                            : "rounded-l-[200px]"
                    }`}
                >
                    <div className="flex gap-1 items-center text-gold-400">
                        <IconBriefcase className="h-16 w-16" stroke={1.5} />
                        <div className="text-6xl font-semibold">iJOBS</div>
                    </div>
                    <div className="text-2xl font-semibold text-mine-shaft-200">
                        Find the job made for you
                    </div>
                </div>
                {/* <div className="w-[5px] h-1/2 bg-gold-400/50"></div> */}
                <SignupPage />
            </div>
        </div>
    );
};
export default Signup;
