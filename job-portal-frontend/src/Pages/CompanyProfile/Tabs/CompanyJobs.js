import JobsData from "../../../Data/JobsData";
import JobsCard from "../../FindJobs/Components/Jobscard";

const CompanyJobs = () => {
    return (
        <div className="flex mt-10 ml-10 flex-wrap justify-between gap-5">
            {JobsData.map((job, index) => (
                <JobsCard key={index} {...job} />
            ))}
        </div>
    );
};
export default CompanyJobs;
