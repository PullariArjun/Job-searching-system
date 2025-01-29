import { Divider } from "@mantine/core";
import PostedJobPage from "./PostedJobs/PostedJobPage";
import PostedJobDescription from "./PostedJobs/PostedJobDescription";

const PostedJobs = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <div className="flex gap-5 px-5">
                <PostedJobPage />
                <PostedJobDescription />
            </div>
        </div>
    );
};
export default PostedJobs;
