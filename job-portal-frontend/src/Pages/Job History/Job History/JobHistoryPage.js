import { Tabs } from "@mantine/core";

import JobsData from "../../../Data/JobsData";
import Card from "../Components/Card";
const JobHistoryPage = () => {
    return (
        <div className="bg-mine-shaft-950">
            <div className="text-2xl font-semibold mb-5">Job History</div>
            <div>
                <Tabs
                    variant="outline"
                    color="minShaft.950"
                    radius={"lg"}
                    defaultValue={"applied"}
                >
                    <Tabs.List className=" mb-5 [&>button]:text-lg [&>button]:font-semibold [&_button[data-active='true']]:text-gold-400">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="applied">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {JobsData.map((job, index) => (
                                <Card key={index} {...job} applied />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {JobsData.map((job, index) => (
                                <Card key={index} {...job} saved />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {JobsData.map((job, index) => (
                                <Card key={index} {...job} offered />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="interviewing">
                        <div className="flex flex-wrap mt-10 gap-5">
                            {JobsData.map((job, index) => (
                                <Card key={index} {...job} interviewing />
                            ))}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};
export default JobHistoryPage;
