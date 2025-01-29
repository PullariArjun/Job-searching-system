import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import SelectInputDataForProfile from "../../../Data/SingleInputDataForProfile";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { normalizeDateToLocal } from "../../../Utilities/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { changeProfile } from "../../../Slices/ProfileSlice";

const CertificationInput = (props) => {
    const data = SelectInputDataForProfile;
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            title: "",
            issuer: "",
            issueDate: new Date(),
            certificateId: "",
        },
        validate: {
            title: isNotEmpty("Title is required"),
            issuer: isNotEmpty("Issuer is required"),
            issueDate: isNotEmpty("Issue date is required"),
            certificateId: isNotEmpty("Certificate id is required"),
        },
    });
    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;
        let certi = [...profile.certifications];
        let issueDate = normalizeDateToLocal(form.getValues().issueDate).toISOString();
        certi.push(form.getValues());
        certi[certi.length - 1].issueDate = issueDate
        
        props.setEdit(false)
        let updatedProfile = {...profile, certifications:certi}
        dispatch(changeProfile(updatedProfile));
        SuccessNotification(`Certification added Successfully...`);
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    {...form.getInputProps("title")}
                    label="Title"
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput form={form} name="issuer" {...data[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    {...form.getInputProps("issueDate")}
                    withAsterisk
                    maxDate={new Date()}
                    label="Issue Date"
                    placeholder="Pick Date"
                />
                <TextInput
                    {...form.getInputProps("certificateId")}
                    label="Certificate ID"
                    placeholder="Enter Certificate ID"
                />
            </div>
            <div className="flex gap-5">
                <Button onClick={handleSave} color="gold.4" variant="outline">
                    Save
                </Button>
                <Button
                    onClick={() => props.setEdit(false)}
                    color="red.8"
                    variant="light"
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default CertificationInput;
