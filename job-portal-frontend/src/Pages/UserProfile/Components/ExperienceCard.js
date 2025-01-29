import { Button } from "@mantine/core";
import { useState } from "react";
import ExperienceInput from "./ExperienceInput";
import { DateFormat } from "../../../Utilities/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slices/ProfileSlice";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";

const ExperienceCard = (props) => {
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleDelete = () => {
        let exps = [...profile.experiences];
        exps.splice(props.index, 1);
        let updatedProfile = { ...profile, experiences: exps };
        dispatch(changeProfile(updatedProfile));
        SuccessNotification(`Experience Deleted Successfully...`);
    };
    return edit ? (
        <ExperienceInput {...props} setEdit={setEdit} />
    ) : (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                        <img
                            className="h-7"
                            src={`/Companies/${props.company}.png`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">
                            {props.company} &bull; {props.location}, India
                        </div>
                    </div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    {DateFormat(props.startDate)} -{" "}
                    {props.working ? "Present" : DateFormat(props.endDate)}
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.description}
            </div>
            {props.edit && (
                <div className="flex gap-5">
                    <Button
                        onClick={() => setEdit(true)}
                        color="gold.4"
                        variant="outline"
                    >
                        Edit
                    </Button>
                    <Button
                        color="red.8"
                        variant="light"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            )}
        </div>
    );
};
export default ExperienceCard;
