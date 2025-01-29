import { Divider } from "@mantine/core";
import Apply from "./ApplyJob/Apply";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../../Services/JobService";

const ApplyJob = () => {
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
        <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
            <Divider size={"xs"} mx={"md"} />
            <Apply {...job}/>
        </div>
    );
};
export default ApplyJob;
