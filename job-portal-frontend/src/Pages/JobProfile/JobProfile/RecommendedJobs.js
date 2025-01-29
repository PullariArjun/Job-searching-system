import { useParams } from "react-router-dom";
import JobsCard from "../../FindJobs/Components/Jobscard";
import { getAllJobs } from "../../../Services/JobService";
import { useEffect, useState } from "react";

const RecommendedJobs = () => {
    const {id} = useParams()
    const [jobList, setJobList] = useState(null)
    useEffect(()=>{
        getAllJobs()
        .then((res)=>{
            setJobList(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <div className="text-xl font-semibold my-5">Recommended Jobs</div>
            <div className="flex flex-col gap-5">
                {jobList?.map((job, index) => {
                    return index < 6 && id != job.id && <JobsCard key={index} {...job} />;
                })}
            </div>
        </div>
    );
};
export default RecommendedJobs;
