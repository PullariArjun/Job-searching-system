import { Divider } from "@mantine/core";
import JobDescription from "./JobProfile/JobDescription";
import RecommendedJobs from "./JobProfile/RecommendedJobs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJob } from "../../Services/JobService";
const JobProfile = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        getJob(id)
            .then((res) => {
                console.log(res)
                setJob(res);
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <div className="flex gap-5 justify-around">
                <JobDescription {...job}/>
                <RecommendedJobs />
            </div>
        </div>
    );
};
export default JobProfile;
