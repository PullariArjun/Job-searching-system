import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slices/ProfileSlice";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";

const Skills = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const [edit, setEdit] = useState(false);
    const [skills, setSkills] = useState(profile.skills);
    const handleEdit = () => {
        if (!edit) setSkills(profile.skills);
        setEdit(!edit);
    };
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, skills: skills };
        dispatch(changeProfile(updatedProfile));
        SuccessNotification("Updated Successfully...");
    };
    return (
        <>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Skills
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
                    <TagsInput
                        label=""
                        placeholder="Add skill"
                        splitChars={[" ", ",", "|"]}
                        value={skills}
                        onChange={setSkills}
                    />
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {profile.skills?.map((item, index) => {
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
                )}
            </div>
        </>
    );
};
export default Skills;
