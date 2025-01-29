import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutCompany from "../Tabs/AboutCompany";
import CompanyJobs from "../Tabs/CompanyJobs";
import CompanyEmployees from "../Tabs/CompanyEmployees";

const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-48"
                    src="/Banner/Banner.avif"
                    alt=""
                />
                <img
                    className="rounded-3xl w-36 h-36 -bottom-1/4 absolute left-5 border-8 border-mine-shaft-950 bg-mine-shaft-950"
                    src="/Google.png"
                    alt=""
                />
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">
                    Google
                    <Avatar.Group>
                        <Avatar src="avatar1.png" />
                        <Avatar src="avatar2.png" />
                        <Avatar src="avatar3.png" />
                        <Avatar>+10K</Avatar>
                    </Avatar.Group>
                </div>
                <div className="flex items-center gap-0.5 text-mine-shaft-300 text-lg">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> New york,
                    United states
                </div>
            </div>
            <Divider my={"xl"} />
            <div>
                <Tabs variant="outline" radius={"lg"} defaultValue={"about"}>
                    <Tabs.List className=" mb-5 [&>button]:text-lg [&>button]:font-semibold [&_button[data-active='true']]:text-gold-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about">
                        <AboutCompany />
                    </Tabs.Panel>
                    <Tabs.Panel value="jobs">
                        <CompanyJobs />
                    </Tabs.Panel>
                    <Tabs.Panel value="employees">
                        <CompanyEmployees />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};
export default Company;
