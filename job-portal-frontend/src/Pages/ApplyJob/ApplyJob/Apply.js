import {
    Button,
    Divider,
    FileInput,
    LoadingOverlay,
    Notification,
    NumberInput,
    rem,
    Textarea,
    TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apply = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleSubmit = () => {
        setSubmit(true);
        let sec = 5;
        setInterval(() => {
            sec--;
            setSeconds(sec);
            if (sec === 0) navigate("/find-jobs");
        }, 1000);
    };
    return (
        <>
            <div className="w-2/3 mx-auto mt-5">
                <LoadingOverlay
                    className="fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 2 }}
                    loaderProps={{ color: "gold.4", type: "dots" }}
                />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 flex items-center justify-center rounded-xl">
                            <img className="h-14" src={`/Google.png`} alt="" />
                        </div>
                        <div>
                            <div className="font-semibold text-2xl">
                                Software Engineer
                            </div>
                            <div className="text-lg text-mine-shaft-300">
                                Google &bull; 3 days ago &bull; 48 Applicants
                            </div>
                        </div>
                    </div>
                </div>
                <Divider my={"xl"} />
                <div className="text-xl font-semibold mb-5">
                    Submit Your Application
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <TextInput
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={
                                preview
                                    ? "text-mine-shaft-200 font-semibold"
                                    : ""
                            }
                            label="Full Name"
                            withAsterisk
                            placeholder="Enter Full Name"
                        />
                        <TextInput
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={
                                preview
                                    ? "text-mine-shaft-200 font-semibold"
                                    : ""
                            }
                            label="Email"
                            withAsterisk
                            placeholder="Enter a valid Email"
                        />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <NumberInput
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={
                                preview
                                    ? "text-mine-shaft-200 font-semibold"
                                    : ""
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
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={
                                preview
                                    ? "text-mine-shaft-200 font-semibold"
                                    : ""
                            }
                            label="Personal Website"
                            withAsterisk
                            placeholder="Enter URL"
                        />
                    </div>
                    <FileInput
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={
                            preview ? "text-mine-shaft-200 font-semibold" : ""
                        }
                        withAsterisk
                        leftSection={<IconPaperclip stroke={1.5} />}
                        label="Attach Resume"
                        placeholder="Attach your Resume "
                    />
                    <Textarea
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
            </div>
            <Notification
                withBorder
                className={`!border-gold-400 transition z-[1001] duration-300 ease-in-out !fixed top-0 left-[35%] ${
                    submit ? "translate-y-0" : "-translate-y-32"
                }`}
                icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
                color="teal"
                title="Application Submitted!"
                mt={"md"}
                withCloseButton={false}
            >
                Redirecting to Find jobs in {seconds} seconds...
            </Notification>
        </>
    );
};

export default Apply;
