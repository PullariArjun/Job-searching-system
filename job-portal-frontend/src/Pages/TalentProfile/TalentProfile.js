import { Divider } from "@mantine/core";
import Profile from "./TalentProfile/Profile";
import ExtendedTalentsData from "../../Data/ExtendedTalentsData";
import RecommendedTalent from "./Components/RecommendTalent";
const TalentProfile = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <div className="flex gap-5">
                <Profile {...ExtendedTalentsData[0]} />
                <RecommendedTalent />
            </div>
        </div>
    );
};
export default TalentProfile;
