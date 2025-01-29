import { Divider } from "@mantine/core";
import JobDescription from "./JobProfile/JobDescription";
import RecommendedJobs from "./JobProfile/RecommendedJobs";
const JobProfile = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <div className="flex gap-5 justify-around">
                <JobDescription />
                <RecommendedJobs />
            </div>
        </div>
    );
};
export default JobProfile;
