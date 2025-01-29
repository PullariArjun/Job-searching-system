import { Badge, Tabs } from "@mantine/core";
import JobDescription from "../../JobProfile/JobProfile/JobDescription";
import TalentsData from "../../../Data/TalentsData";
import TalentCard from "../../Find Talent/Components/TalentCard";
const PostedJobDescription = () => {
    return (
        <div className="mt-5 px-5 w-3/4">
            <div className="text-2xl font-semibold flex items-center">
                Software Engineer{" "}
                <Badge variant="light" color="gold.4" size="sm">
                    Badge
                </Badge>
            </div>
            <div className="font-medium text-mine-shaft-300">
                New york, United states
            </div>
            <div>
                <Tabs variant="outline" radius={"lg"} defaultValue={"overview"}>
                    <Tabs.List className=" mb-5 [&>button]:text-lg [&>button]:font-semibold [&_button[data-active='true']]:text-gold-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full">
                        <JobDescription edit={true} />
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="flex mt-10 flex-wrap gap-10 justify-around">
                            {TalentsData.map((talent, index) => (
                                <TalentCard key={index} {...talent} posted />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="flex mt-10 flex-wrap gap-10 justify-around">
                            {TalentsData.map((talent, index) => (
                                <TalentCard key={index} {...talent} invited />
                            ))}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};
export default PostedJobDescription;
