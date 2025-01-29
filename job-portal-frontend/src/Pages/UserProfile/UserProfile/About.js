import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slices/ProfileSlice";

const About = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [about, setAbout] = useState(profile.about)
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, about:about };
        dispatch(changeProfile(updatedProfile));
        SuccessNotification("Updated Successfully...");
    };
    const handleEdit = () => {
        setEdit(!edit)
        if (!edit) {
            setAbout(profile.about);
        }
    };
    return (
        <>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    About
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
                        <Textarea
                            value={about}
                            placeholder="Enter somthing about yourself"
                            autosize
                            minRows={3}
                            onChange={(event) =>
                                setAbout(event.currentTarget.value)
                            }
                        />
                    </>
                ) : (
                    <>
                        <div className="text-sm text-mine-shaft-300 text-justify">
                            {profile.about?.trim()}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default About;
