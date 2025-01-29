import JobsData from "../../../Data/JobsData";
import JobsCard from "../../FindJobs/Components/Jobscard";

const RecommendedJobs = () => {
    return (
        <div>
            <div className="text-xl font-semibold my-5">Recommended Jobs</div>
            <div className="flex flex-col gap-5">
                {JobsData.map((job, index) => {
                    return index < 6 && <JobsCard key={index} {...job} />;
                })}
            </div>
        </div>
    );
};
export default RecommendedJobs;
