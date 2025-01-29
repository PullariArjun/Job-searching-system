import { useState } from "react";
import SelectInputDataForProfile from "../../../Data/SingleInputDataForProfile";
import { ActionIcon } from "@mantine/core";
import {
    IconBriefcase,
    IconCheck,
    IconMapPin,
    IconPencil,
    IconX,
} from "@tabler/icons-react";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import SelectInput from "../Components/SelectInput";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slices/ProfileSlice";
const Info = (props) => {
    const profile = useSelector((state) => state.profile);
    const user = useSelector((state) => state.user);
    const data = SelectInputDataForProfile;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const form = useForm({
        mode: "controlled",
        initialValues: { jobTitle: "", company: "", location: "" },
    });
    const handleEdit = () => {
        if (!edit) {
            form.setValues({
                jobTitle: profile.jobTitle,
                company: profile.company,
                location: profile.location,
            });
            setEdit(true);
        } else setEdit(false);
    };
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, ...form.getValues() };
        dispatch(changeProfile(updatedProfile));
        SuccessNotification("Updated Successfully...");
    };
    return (
        <>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {user.name}
                    <div className="flex gap-2">
                        {edit && (
                            <ActionIcon
                                color="green.8"
                                size={"lg"}
                                variant="subtle"
                                onClick={handleSave}
                            >
                                <IconCheck className="h-4/5 w-4/5" />
                            </ActionIcon>
                        )}
                        <ActionIcon
                            color={edit ? "red.8" : "gold.4"}
                            size={"lg"}
                            variant="subtle"
                            onClick={handleEdit}
                        >
                            {edit ? (
                                <IconX className="h-4/5 w-4/5" />
                            ) : (
                                <IconPencil className="h-4/5 w-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                {edit ? (
                    <>
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput
                                form={form}
                                name="jobTitle"
                                {...data[0]}
                            />
                            <SelectInput
                                form={form}
                                name="company"
                                {...data[1]}
                            />
                        </div>
                        <SelectInput form={form} name="location" {...data[2]} />
                    </>
                ) : (
                    <>
                        <div className="text-xl flex gap-1 items-center">
                            <IconBriefcase className="h-5 w-5" stroke={1.5} />
                            {profile.jobTitle} &bull; {profile.company}
                        </div>
                        <div className="flex items-center gap-0.5 text-mine-shaft-300 text-lg">
                            <IconMapPin className="h-5 w-5" stroke={1.5} />{" "}
                            {profile.location}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default Info;
