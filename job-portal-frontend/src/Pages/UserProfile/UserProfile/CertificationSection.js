import { ActionIcon } from "@mantine/core";
import { IconCheck, IconPencil, IconPlus } from "@tabler/icons-react";
import CertificationsCard from "../Components/CertificationsCard";
import CertificationInput from "../Components/CertificationInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const CertificationSection = () =>{
    
    const profile = useSelector(state => state.profile)
    const [addCerti, setAddCerti] = useState(false);
    const [edit, setEdit] = useState(false)
    const handleEdit = () =>{
        setEdit(!edit)
    }
    return(
        <>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Certifications
                    <div className="flex gap-2">
                        <ActionIcon
                            color="gold.4"
                            size={"lg"}
                            variant="subtle"
                            onClick={() => setAddCerti(true)}
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
                {profile.certifications?.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <CertificationsCard index={index} {...item} edit={edit} />
                        </div>
                    );
                })}
                {addCerti && <CertificationInput setEdit={setAddCerti} />}
            </div>
        </>
    )
}

export default CertificationSection