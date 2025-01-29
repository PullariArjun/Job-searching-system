import { Divider } from "@mantine/core";
import JobHistoryPage from "./Job History/JobHistoryPage";

const JobHistory = () => {
    return (
        <div className="bg-mine-shaft-950 min-h-[100vh] px-4">
            <Divider size={"xs"} />
            <div className="my-5 bg-mine-shaft-950">
                <JobHistoryPage />
            </div>
        </div>
    );
};

export default JobHistory;
