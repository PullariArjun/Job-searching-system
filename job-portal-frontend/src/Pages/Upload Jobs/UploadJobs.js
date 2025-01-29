import { Divider } from "@mantine/core";
import PostJobs from "./Upload Jobs/PostJobs";

const UploadJobs = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <PostJobs />
        </div>
    );
};
export default UploadJobs;
