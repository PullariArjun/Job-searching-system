import { Divider } from "@mantine/core";
import Profile from "./UserProfile/Profile";

const UserProfile = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950">
            <Divider mx={"md"} mb={"xl"} />
            <Profile />
        </div>
    );
};
export default UserProfile;
