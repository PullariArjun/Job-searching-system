import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import DateFormat from "../../../Utilities/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { changeProfile } from "../../../Slices/ProfileSlice";

const CertificationsCard = (props) => {

    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();

    const handleDelete = () =>{
        let certis = [...profile.certifications]
        certis.splice(props.index, 1);
        let updatedProfile = {...profile, certifications:certis}
        dispatch(changeProfile(updatedProfile));
        SuccessNotification(`Certification Deleted Successfully...`);

    }
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                    <img
                        className="h-7"
                        src={`/Companies/${props.issuer}.png`}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">
                        {props.title}
                    </div>
                    <div className="text-sm text-mine-shaft-300">
                        {props.issuer}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                    <div className="text-sm text-mine-shaft-300">
                        {DateFormat(props.issueDate)}
                    </div>
                    <div className="text-sm text-mine-shaft-300">
                        ID: {props.certificateId}
                    </div>
                </div>
                {props.edit && (
                    <ActionIcon onClick={handleDelete} size={"lg"} color="red.8" variant="subtle">
                        <IconTrash className="w-4/5 h-4/5" stroke={1.5} />
                    </ActionIcon>
                )}
            </div>
        </div>
    );
};
export default CertificationsCard;
