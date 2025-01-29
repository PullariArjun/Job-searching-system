import JobsData from "../../../Data/JobsData"
import JobsCard from "../Components/Jobscard"
import Sort from "../Components/Sort"

const Jobs = () =>{
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort/>
            </div>
            <div className="flex mt-10 flex-wrap gap-5 justify-between">
                {
                    JobsData.map((job, index)=> <JobsCard key={index} {...job}/>)
                }

            </div>
        </div>
    )
}
export default Jobs