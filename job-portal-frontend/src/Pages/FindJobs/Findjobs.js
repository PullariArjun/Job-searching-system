import { Divider } from "@mantine/core"
import SearchBar from "./FindJobs/Searchbar"
import Jobs from "./FindJobs/Jobs"

const FindJobs = () =>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950">

            <Divider size={"xs"} mx={"md"}/>
            <SearchBar/>
            <Divider size={"xs"} mx={"md"}/>
            <Jobs/>
            
        </div>
    )
}
export default FindJobs