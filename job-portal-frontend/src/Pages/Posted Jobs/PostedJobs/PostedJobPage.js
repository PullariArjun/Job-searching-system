import { Tabs } from "@mantine/core";
import { ActiveJobData } from "../../../Data/PostedJobsData";
import PostedJobCard from "../Components/PostedJobCard";

const PostedJobPage = () => {
    return (
        <div className="w-1/6 mt-5">
            <div className="text-xl font-semibold mb-5">Jobs</div>
            <div className="">
                <Tabs autoContrast variant="pills" defaultValue={"active"}>
                    <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts [2]</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="active">
                        <div className="flex flex-col gap-5 mt-5">
                            {ActiveJobData.map((job, index) => (
                                <PostedJobCard key={index} {...job} />
                            ))}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="draft">Second panel</Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};
export default PostedJobPage;
