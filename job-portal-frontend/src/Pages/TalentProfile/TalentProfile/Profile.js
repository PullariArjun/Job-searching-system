import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "../Components/ExperienceCard";
import CertificationsCard from "../Components/CertificationsCard";

const Profile = (props) => {
    return (
        <div className="w-2/3 p-5">
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-48"
                    src="/Banner/Banner.avif"
                    alt=""
                />
                <img
                    className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-8 border-mine-shaft-900"
                    src="/Avatar2.png"
                    alt=""
                />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {props.name}
                    <Button color="gold.4" variant="light">
                        Message
                    </Button>
                </div>
                <div className="text-xl flex gap-1 items-center">
                    <IconBriefcase className="h-5 w-5" stroke={1.5} />
                    {props.JobRole}&bull; Google
                </div>
                <div className="flex items-center gap-0.5 text-mine-shaft-300 text-lg">
                    <IconMapPin className="h-5 w-5" stroke={1.5} />{" "}
                    {props.location}
                </div>
            </div>
            <Divider mx={"xs"} my={"xl"} />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-xs text-mine-shaft-300 text-justify">
                    {props.about}
                </div>
            </div>
            <Divider mx={"xs"} my={"xl"} />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex flex-wrap gap-2">
                    {props.TopSkills?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-gold-300 text-xs font-medium bg-opacity-15 rounded-3xl text-gold-400 px-3 py-1"
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Divider mx={"xs"} my={"xl"} />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Experience</div>
                {props.Experience?.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <ExperienceCard {...item} />
                        </div>
                    );
                })}
            </div>
            <Divider mx={"xs"} my={"xl"} />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">
                    Certifications
                </div>
                {props.Certifications?.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <CertificationsCard {...item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Profile;
