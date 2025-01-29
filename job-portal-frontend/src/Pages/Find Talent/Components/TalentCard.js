import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TalentCard = (props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [interviewDate, setInterviewDate] = useState(null);
    const ref = useRef(null);
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-gold-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-full">
                        <Avatar
                            size={"lg"}
                            src={
                                props.gender === "Male"
                                    ? "/Avatar1.png"
                                    : "/Avatar2.png"
                            }
                            alt="Avatar"
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-xl">
                            {props.name}
                        </div>
                        <div className="text-sm text-mine-shaft-300">
                            {props.JobRole} &#x2022; Google
                        </div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-mine-shaft-300 cursor-pointer" />
                </div>
            </div>

            {/* Need change */}
            <div className="flex justify-around mt-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-gold-400 [&>div]:rounded-lg text-xs">
                {props.TopSkills?.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <Text
                className="!text-xs !text-mine-shaft-300 text-justify"
                lineClamp={3}
            >
                {props.about}
            </Text>
            <Divider size={"xs"} mx={"md"} color="mineShaft.7" />
            {props.invited ? (
                <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                    <IconCalendarMonth stroke={1.5} /> Interview: June 27, 2025
                    10:00
                </div>
            ) : (
                <div className="flex justify-between items-center text-xs">
                    <div className="font-semibold text-mine-shaft-200">
                        &#8377; {props.expectedCtcRange}
                    </div>
                    <div className="flex items-center gap-0.5 text-mine-shaft-400 text-xs">
                        <IconMapPin size={16} stroke={1.5} /> {props.location},
                        India
                    </div>
                </div>
            )}

            <Divider size={"xs"} mx={"md"} color="mineShaft.7" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                {!props.invited && (
                    <>
                        <Link to={"/find-talent/talent-profile"}>
                            <Button color="gold.4" variant="outline" fullWidth>
                                Profile
                            </Button>
                        </Link>
                        <div>
                            {props.posted ? (
                                <Button
                                    onClick={open}
                                    rightSection={
                                        <IconCalendarMonth className="h-5 w-5" />
                                    }
                                    color="gold.4"
                                    variant="light"
                                    fullWidth
                                >
                                    Schedule
                                </Button>
                            ) : (
                                <Button
                                    color="gold.4"
                                    variant="light"
                                    fullWidth
                                >
                                    Message
                                </Button>
                            )}
                        </div>
                    </>
                )}
                {props.invited && (
                    <>
                        <div>
                            <Button color="gold.4" variant="outline" fullWidth>
                                Accept
                            </Button>
                        </div>
                        <div>
                            <Button color="gold.4" variant="light" fullWidth>
                                Reject
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <Modal
                opened={opened}
                onClose={close}
                title="Schedule Interview"
                centered
            >
                <div className="flex flex-col gap-4">
                    <DateInput
                        minDate={new Date()}
                        value={interviewDate}
                        onChange={setInterviewDate}
                        label="Date"
                        placeholder="Enter Date"
                    />
                    <TimeInput
                        color="gold.4"
                        label="Time"
                        ref={ref}
                        onClick={() => ref.current?.showPicker()}
                    />
                    <Button color="gold.4" variant="light" fullWidth>
                        Message
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
export default TalentCard;
