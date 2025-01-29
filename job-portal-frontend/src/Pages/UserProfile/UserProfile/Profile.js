import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import ExperienceSection from "./ExperienceSection";
import CertificationSection from "./CertificationSection";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { getBase64 } from "../../../Utilities/Base64Converter/Base64Converter";

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile)
    
    const { hovered, ref } = useHover();
    const handleFileChange = async (image) =>{
        let picture = await getBase64(image);
        let updatedProfile = {...profile, picture:picture.split(',')[1]}
        dispatch(changeProfile(updatedProfile));
        SuccessNotification("Profile Picture Changed successfully...")

    }
    
    return (
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-48"
                    src="/Banner/Banner.avif"
                    alt=""
                />
                <div ref={ref} className="absolute -bottom-1/3 left-3 flex items-center justify-center">
                    <Avatar className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full" src={profile.picture?`data:image/jpeg;base64, ${profile.picture}`:"./Avatar1.png"} alt="" />
                    {hovered && <Overlay color="#000" className="!rounded-full" backgroundOpacity={0.75}/>}
                    {hovered && <IconEdit className="absolute z-[300]"/>}
                    {hovered && <FileInput onChange={handleFileChange} className="absolute z-[301] !h-full !w-full [&_*]:!h-full [&_*]:!rounded-full [&_*]:!border-none [&_*]:p-0" variant="transparent"/>}
                </div>
            </div>
            <div className="px-3 mt-16">
                <Info />
                <Divider mx={"xs"} my={"xl"} />
                <About />
                <Divider mx={"xs"} my={"xl"} />
                <Skills />
                <Divider mx={"xs"} my={"xl"} />
                <ExperienceSection />
                <Divider mx={"xs"} my={"xl"} />
                <CertificationSection />
            </div>
        </div>
    );
};
export default Profile;
