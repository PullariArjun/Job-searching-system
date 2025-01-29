import {
    Button,
    FileInput,
    LoadingOverlay,
    NumberInput,
    Textarea,
    TextInput,
} from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isNotEmpty, useForm } from "@mantine/form";
import { getBase64 } from "../../../Utilities/Base64Converter/Base64Converter";
import { applyJob } from "../../../Services/JobService";
import { ErrorNotification, SuccessNotification } from "../../../Utilities/Notifications/Notifications";
import { useSelector } from "react-redux";

const ApplicationForm = () => {

    
    const user = useSelector(state => state.user)
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate();
    const handlePreview = () => {
        form.validate();
        if (!form.isValid()) return;
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleSubmit = async () => {
        setSubmit(true)
        let resume = await getBase64(form.getValues().resume);
        let applicant = {...form.getValues(), applicantId:user.id, resume:resume?.split(",")[1]}
        applyJob(id, applicant)
        .then(res =>{
            setSubmit(false)
            SuccessNotification("Applied Successfully")
            navigate("/job-history")
        }).catch(err =>{
            setSubmit(false)
            ErrorNotification(err.response?.data?.errorMessage)
        })


    };
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            resume: null,
            certificateId: "",
            coverLetter: "",
        },
        validate: {
            name: isNotEmpty("name cannot be empty"),
            email: isNotEmpty("email cannot be empty"),
            phone: isNotEmpty("phone cannot be empty"),
            resume: isNotEmpty("resume cannot be empty"),
            website: isNotEmpty("website cannot be empty"),
        },
    });
    return (
        <>
            <LoadingOverlay
                className="fixed"
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
                loaderProps={{ color: "gold.4", type: "dots" }}
            />
            <div className="text-xl font-semibold mb-5">
                Submit Your Application
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2 ">
                    <TextInput
                        {...form.getInputProps("name")}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={
                            preview ? "text-mine-shaft-200 font-semibold" : ""
                        }
                        label="Full Name"
                        withAsterisk
                        placeholder="Enter Full Name"
                    />
                    <TextInput
                        {...form.getInputProps("email")}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={
                            preview ? "text-mine-shaft-200 font-semibold" : ""
                        }
                        label="Email"
                        withAsterisk
                        placeholder="Enter a valid Email"
                    />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2 ">
                    <NumberInput
                        {...form.getInputProps("phone")}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={
                            preview ? "text-mine-shaft-200 font-semibold" : ""
                        }
                        label="Phone Number"
                        withAsterisk
                        placeholder="Enter your 10 digits phone number"
                        hideControls
                        min={0}
                        max={9999999999}
                        clampBehavior="strict"
                    />
                    <TextInput
                        {...form.getInputProps("website")}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={
                            preview ? "text-mine-shaft-200 font-semibold" : ""
                        }
                        label="Personal Website"
                        withAsterisk
                        placeholder="Enter URL"
                    />
                </div>
                <FileInput
                    {...form.getInputProps("resume")}
                    accept="application/pdf"
                    readOnly={preview}
                    variant={preview ? "unstyled" : "default"}
                    className={
                        preview ? "text-mine-shaft-200 font-semibold" : ""
                    }
                    withAsterisk
                    leftSection={<IconPaperclip stroke={1.5} />}
                    label="Attach Resume (.pdf)"
                    placeholder="Attach your Resume "
                />
                <Textarea
                    {...form.getInputProps("coverLetter")}
                    readOnly={preview}
                    variant={preview ? "unstyled" : "default"}
                    className={
                        preview ? "text-mine-shaft-200 font-semibold" : ""
                    }
                    withAsterisk
                    minRows={3}
                    autosize
                    label="Description"
                    placeholder="Type something about your self"
                />
                {!preview && (
                    <Button
                        onClick={handlePreview}
                        color="gold.4"
                        variant="light"
                    >
                        Preview
                    </Button>
                )}
                {preview && (
                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <Button
                            fullWidth
                            onClick={handlePreview}
                            color="gold.4"
                            variant="outline"
                        >
                            Edit
                        </Button>
                        <Button
                            fullWidth
                            onClick={handleSubmit}
                            color="gold.4"
                            variant="light"
                        >
                            Submit
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ApplicationForm;
