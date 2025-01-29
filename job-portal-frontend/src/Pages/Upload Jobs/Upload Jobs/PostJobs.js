import SingleSelect from "../../../Utilities/MultiSelect/SingleSelect";
import PostJobData from "../../../Data/PostJobData";
import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import TextEditor from "../../../Utilities/RichTextEditor/RichTextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../../Services/JobService";
import { ErrorNotification, SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { useNavigate } from "react-router-dom";

const PostJobs = () => {
    const data = PostJobData;
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            jobTitle: "",
            company: "",
            experience: "",
            jobType: "",
            location: "",
            packageOffered: 0,
            skillsRequired: [],
            about: "",
            description: "abc",
        },
        validate: {
            jobTitle: isNotEmpty("Title is required"),
            company: isNotEmpty("Company is required"),
            experience: isNotEmpty("Experience is required"),
            jobType: isNotEmpty("Job Type is required"),
            location: isNotEmpty("Location is required"),
            packageOffered: isNotEmpty("Package is required"),
            skillsRequired: isNotEmpty("Skills are required"),
            about: isNotEmpty("About is required"),
            description: isNotEmpty("Description is required"),
        },
    });

    const handlePost = () => {
        form.validate();
        if (!form.isValid()) {
            console.log("Form is not valid")
            return;
        }
        postJob(form.getValues())
            .then((res) => {
                SuccessNotification("Job Posted Successfully");
                // navigate("/find-jobs")
            })
            .catch((err) => {
                ErrorNotification("Error while posting the job")
            });
    };
    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SingleSelect form={form} name="jobTitle" {...data[0]} />
                    <SingleSelect form={form} name="company" {...data[1]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SingleSelect form={form} name="experience" {...data[2]} />
                    <SingleSelect form={form} name="jobType" {...data[3]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SingleSelect form={form} name="location" {...data[4]} />
                    <NumberInput
                        {...form.getInputProps("packageOffered")}
                        label="Salary"
                        placeholder="Enter Salary"
                        withAsterisk
                        hideControls
                        min={1}
                        max={300}
                        clampBehavior="strict"
                    />
                </div>
                <TagsInput
                    {...form.getInputProps("skillsRequired")}
                    withAsterisk
                    label="Skills"
                    placeholder="Enter Skill"
                    clearable
                    acceptValueOnBlur
                    splitChars={[",", " ", "|"]}
                />
                <Textarea
                    {...form.getInputProps("about")}
                    withAsterisk
                    className="my-3"
                    label="About"
                    autosize
                    minRows={2}
                    placeholder="Enter somthing about Job"
                />
                <div className="[&_button[data-active='true']]:!text-gold-400 [&_button[data-active='true']]:bg-gold-400/20">
                    <div className="text-sm font-medium">
                        Job Description <span className="text-red-500">*</span>
                    </div>
                    <TextEditor form={form} />
                </div>
                <div className="flex gap-4">
                    <Button color="gold.4" variant="light" onClick={handlePost}>
                        Publish Job
                    </Button>
                    <Button color="gold.4" variant="outline">
                        Save as Draft
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default PostJobs;
