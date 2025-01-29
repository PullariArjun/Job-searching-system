import { ActionIcon } from "@mantine/core";
import { IconCheck, IconPencil, IconPlus } from "@tabler/icons-react";
import ExperienceCard from "../Components/ExperienceCard";
import ExperienceInput from "../Components/ExperienceInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const ExperienceSection = () => {
    const profile = useSelector(state => state.profile)
    const [addExp, setAddExp] = useState(false)
    const [edit, setEdit] = useState(false)
    const handleEdit =() =>{
        setEdit(!edit)
    }
    return(
        <>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Experience
                    <div className="flex gap-2">
                        <ActionIcon
                            color="gold.4"
                            size={"lg"}
                            variant="subtle"
                            onClick={() => setAddExp(true)}
                        >
                            <IconPlus className="w-4/5 h-4/5" />
                        </ActionIcon>
                        <ActionIcon
                            color="gold.4"
                            size={"lg"}
                            variant="subtle"
                            onClick={handleEdit}
                        >
                            {edit ? (
                                <IconCheck className="h-4/5 w-4/5" />
                            ) : (
                                <IconPencil className="h-4/5 w-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                {profile.experiences?.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <ExperienceCard {...item} index={index} edit={edit} />
                        </div>
                    );
                })}
                {addExp && <ExperienceInput add setEdit={setAddExp} />}
            </div>
        </>
    )
};
export default ExperienceSection;
