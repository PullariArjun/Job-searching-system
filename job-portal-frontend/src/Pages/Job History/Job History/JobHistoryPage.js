import { Tabs } from "@mantine/core";

import JobsData from "../../../Data/JobsData";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../../Services/JobService";
import { useSelector } from "react-redux";
const JobHistoryPage = () => {
    const profile = useSelector((state) => state.profile);
    const user = useSelector(state => state.user)
    const [activeTab, setActiveTab] = useState("APPLIED");
    const [jobList, setJobList] = useState([]);
    const [showList, setShowList] = useState([]);
    useEffect(() => {
        getAllJobs()
            .then((res) => {
                setJobList(res);
                setShowList(
                    res.filter(
                        (job) =>
                            job.applicants?.filter(
                                (applicant) =>
                                    applicant.applicantId === user.id &&
                                    applicant.applicationStatus == "APPLIED"
                            ).length > 0
                    )
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleTabChange = (value) => {
        setActiveTab(value);
        if (value === "SAVED") {
            setShowList(
                jobList.filter((job) => profile.savedJobs?.includes(job.id))
            );
        } else {
            setShowList(
                jobList.filter(
                    (job) =>
                        job.applicants?.filter(
                            (applicant) =>
                                applicant.applicantId === user.id &&
                                applicant.applicationStatus === value
                        ).length > 0
                )
            );
        }
    };

    return (
        <div className="bg-mine-shaft-950">
            <div className="text-2xl font-semibold mb-5">Job History</div>
            <div>
                <Tabs
                    variant="outline"
                    color="minShaft.950"
                    radius={"lg"}
                    defaultValue={"applied"}
                    value={activeTab}
                    onChange={handleTabChange}
                >
                    <Tabs.List className=" mb-5 [&>button]:text-lg [&>button]:font-semibold [&_button[data-active='true']]:text-gold-400">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={activeTab}>
                        <div className="flex flex-wrap mt-10 gap-5">
                            {showList?.map((job, index) => (
                                <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}} />
                            ))}
                        </div>
                    </Tabs.Panel>
                    {/* <Tabs.Panel value="saved">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {jobList?.map((job, index) => (
                                <Card key={index} {...job} saved />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {jobList?.map((job, index) => (
                                <Card key={index} {...job} offered />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="interviewing">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {jobList?.map((job, index) => (
                                <Card key={index} {...job} interviewing />
                            ))}
                        </div>
                    </Tabs.Panel> */}
                </Tabs>
            </div>
        </div>
    );
};
export default JobHistoryPage;
