import { Divider, Text } from "@mantine/core"
import { IconBookmark, IconClock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const JobsCard = (props) => {
    return(
        <Link to={"/find-jobs/job-profile"} className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-gold-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                        <img className="h-7" src={`/Companies/${props.Company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.JobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{props.Company} &#x2022; {props.NumberOfApplicants} Applicants</div>
                    </div>
                </div>
                <div><IconBookmark className="text-mine-shaft-300 cursor-pointer"/></div>
            </div>

            {/* Need change */}
            <div className="flex justify-around mt-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-gold-400 [&>div]:rounded-lg text-xs">
                <div>{props.Experience}</div>
                <div>{props.JobType}</div>
                <div>{props.Location}</div>
            </div>
            <Text className="!text-xs !text-mine-shaft-300 text-justify" lineClamp={3}>
                {props.Description}
            </Text>
            <Divider size={"xs"} mx={"md"} color="mineShaft.7"/>
            <div className="flex justify-between items-center text-xs">
                <div className="font-semibold text-mine-shaft-200">
                    &#8377; {props.Package} LPA
                </div>
                <div className="flex items-center gap-0.5 text-mine-shaft-400 text-xs">
                    <IconClock size={16} stroke={1.5} /> {props.PostedDaysAgo} Days ago
                </div>
            </div>
        </Link>
    )
}
export default JobsCard