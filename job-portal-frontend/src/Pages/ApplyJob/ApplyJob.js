import { Divider } from "@mantine/core";
import Apply from "./ApplyJob/Apply";

const ApplyJob = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
            <Divider size={"xs"} mx={"md"} />
            <Apply />
        </div>
    );
};
export default ApplyJob;
