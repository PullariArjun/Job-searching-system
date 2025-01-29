import { useEffect, useState } from "react"
import JobsCard from "../Components/Jobscard"
import Sort from "../Components/Sort"
import {getAllJobs} from "../../../Services/JobService"

const Jobs = () =>{
    const [jobList, setJobList] = useState([{}])
    useEffect(()=>{
        getAllJobs()
        .then((res)=>{
            setJobList(res)
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort/>
            </div>
            <div className="flex mt-10 flex-wrap gap-5 justify-between">
                {
                    jobList?.map((job, index)=> <JobsCard key={index} {...job}/>)
                }

            </div>
        </div>
    )
}
export default Jobs