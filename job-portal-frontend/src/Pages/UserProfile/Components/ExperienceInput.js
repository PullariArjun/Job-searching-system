import { useEffect } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import SelectInputDataForProfile from "../../../Data/SingleInputDataForProfile";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { normalizeDateToLocal } from "../../../Utilities/DateFormat/DateFormat";
import { changeProfile } from "../../../Slices/ProfileSlice";

const ExperienceInput = (props) => {
    const data = SelectInputDataForProfile;
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            title: props.title || "",
            company: props.company || "",
            location: props.location || "",
            description: props.description || "",
            startDate: props.startDate ? new Date(props.startDate) : new Date(),
            endDate: props.endDate ? new Date(props.endDate) : new Date(),
            working: props.working || false,
        },
        validate: {
            title: isNotEmpty("Title is required"),
            company: isNotEmpty("Company is required"),
            location: isNotEmpty("Location is required"),
            description: isNotEmpty("Description is required"),
        },
    });

    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;
        let exp = [...profile.experiences];
        let startDate = normalizeDateToLocal(form.getValues().startDate).toISOString();
        let endDate = normalizeDateToLocal(form.getValues().endDate).toISOString();
        if (props.add) {
            exp.push(form.getValues());
            exp[exp.length - 1].startDate = startDate
            exp[exp.length - 1].endDate = endDate
        } else {
            exp[props.index] = form.getValues();
            exp[props.index].startDate = startDate
            exp[props.index].endDate = endDate
        }
        props.setEdit(false)
        let updatedProfile = {...profile, experiences:exp}
        dispatch(changeProfile(updatedProfile));
        SuccessNotification(`Experience ${props.add?"Added":"Updated"} Successfully...`);
    };

    useEffect(() => {
        if (!props.add) {
            form.setValues({
                title: props.title || "",
                company: props.company || "",
                location: props.location || "",
                description: props.description || "",
                startDate: new Date(props.startDate) || new Date(),
                endDate: new Date(props.endDate) || new Date(),
                working: props.working || false,
            });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold">
                {props.add ? "Add" : "Edit"} Experience
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="title" {...data[0]} />
                <SelectInput form={form} name="company" {...data[1]} />
            </div>
            <SelectInput form={form} name="location" {...data[2]} />
            <Textarea
                {...form.getInputProps("description")}
                withAsterisk
                label="Summary"
                placeholder="Enter something about your experience"
                autosize
                minRows={3}
            />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    {...form.getInputProps("startDate")}
                    withAsterisk
                    maxDate={form.getValues().endDate}
                    label="Start Date"
                    placeholder="Pick date"
                />
                <MonthPickerInput
                    disabled={form.getValues().working}
                    {...form.getInputProps("endDate")}
                    withAsterisk
                    minDate={form.getValues().startDate}
                    maxDate={new Date()}
                    label="End Date"
                    placeholder="Pick date"
                />
            </div>
            <Checkbox
                autoContrast
                checked={form.getValues().working}
                onChange={(event) =>
                    form.setFieldValue("working", event.currentTarget.checked)
                }
                label="Currently working here"
            />
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

export default ExperienceInput;
