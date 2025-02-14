import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { JobDescriptionData } from "../../../Data/Data";
import DOMPurify from "dompurify";
import { timeAgo } from "../../../Utilities/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slices/ProfileSlice";
import { useEffect, useState } from "react";

const JobDescription = (props) => {
    const data = DOMPurify.sanitize(props.description);

    const [applied, setApplied] = useState(false)
    const profile = useSelector((state) => state.profile);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleSaveJob = () => {
        let savedJobs = profile.savedJobs ? [...profile.savedJobs] : [];
        if (savedJobs?.includes(props.id)) {
            savedJobs = savedJobs?.filter((id) => id != props.id);
        } else {
            savedJobs = [...savedJobs, props.id];
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs };
        dispatch(changeProfile(updatedProfile));
    };
    useEffect(()=>{
        if(props.applicants?.filter(applicant => applicant.applicantId == user.id).length > 0){
            setApplied(true);
        }else{
            setApplied(false)
        }
    },[props])
    return (
        <div className="w-2/3 p-5">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 flex items-center justify-center rounded-xl">
                        <img
                            className="h-14"
                            src={`/Companies/${props.company}.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">
                            {props.jobTitle}
                        </div>
                        <div className="text-lg text-mine-shaft-300">
                            {props.company} &bull; {timeAgo(props.postTime)}{" "}
                            &bull;{" "}
                            {props.applicants ? props.applicants.length : 0}{" "}
                            Applicants
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    {(props.edit || !applied) && <Link to={`/find-jobs/job-profile/apply/${props.id}`}>
                        <Button color="gold.4" size="sm" variant="light">
                            {props.edit ? "Edit" : "Apply"}
                        </Button>
                    </Link>}
                    {
                        applied && <Button color="green.8" size="sm" variant="light" >Applied</Button>
                    }
                    {props.edit ? (
                        <Button color="gold.4" size="sm" variant="outline">
                            Delete
                        </Button>
                    ) : profile.savedJobs?.includes(props.id) ? (
                        <IconBookmarkFilled
                            onClick={handleSaveJob}
                            className="text-mine-shaft-300 cursor-pointer hover:text-gold-400"
                            stroke={1.5}
                        />
                    ) : (
                        <IconBookmark
                            onClick={handleSaveJob}
                            className="text-mine-shaft-300 cursor-pointer hover:text-gold-400"
                            stroke={1.5}
                        />
                    )}
                </div>
            </div>
            <Divider my={"xl"} />
            <div className="flex justify-between">
                {JobDescriptionData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                    >
                        <ActionIcon
                            color="gold.4"
                            className="!h-12 !w-12"
                            variant="light"
                            radius="xl"
                            aria-label="Settings"
                        >
                            {item.icon}
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-300">
                            {item.name}
                        </div>
                        <div className="font-bold">
                            {props ? props[item.id] : "NA"}
                            {item.id === "packageOffered" ? " LPA" : ""}
                        </div>
                    </div>
                ))}
            </div>
            <Divider my={"xl"} />
            <div>
                <div className="text-xl font-semibold mb-5">
                    Required Skills
                </div>
                <div className="flex gap-2 flex-wrap">
                    {props?.skillsRequired?.map((item, index) => (
                        <ActionIcon
                            key={index}
                            color="gold.4"
                            p={"xs"}
                            className="!h-fit !text-sm font-medium !w-fit"
                            variant="light"
                            radius="xl"
                            aria-label="Settings"
                        >
                            {item}
                        </ActionIcon>
                    ))}
                </div>
            </div>
            <Divider my={"xl"} />
            <div
                className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-gold-400 [&_li]:mb-1 [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
                dangerouslySetInnerHTML={{ __html: data }}
            ></div>
            <Divider my={"xl"} />
            <div>
                <div className="text-xl font-semibold mb-5">About Company</div>
                <div>
                    <div className="flex justify-between mb-3">
                        <div className="flex gap-2 items-center">
                            <div className="p-3 bg-mine-shaft-800 flex items-center justify-center rounded-xl">
                                <img
                                    className="h-8"
                                    src={`/Companies/${props.company}.png`}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-medium text-lg">
                                    {props.company}
                                </div>
                                <div className="text-mine-shaft-300">
                                    10K+ Employees
                                </div>
                            </div>
                        </div>
                        <Link to={`/company-profile/${props.company}`}>
                            <Button color="gold.4" variant="light">
                                Company page
                            </Button>
                        </Link>
                    </div>
                    <div className="text-mine-shaft-300 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos, tempore? Placeat error aliquam nemo sed ab!
                        Pariatur unde sed inventore ab velit. Nihil reiciendis
                        molestiae doloribus nesciunt sequi fugiat esse alias
                        maiores quia tempore, aperiam repudiandae optio fugit
                        inventore a.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default JobDescription;
