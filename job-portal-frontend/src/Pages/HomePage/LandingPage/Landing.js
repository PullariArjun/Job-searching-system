import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Landing = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] h-full gap-3 text-start">
                <div className="text-6xl font-bold text-mine-shaft-100 leading-tight">
                    Find your <span className="text-gold-400">dream job</span>{" "}
                    with us
                </div>
                <div className="text-lg text-mine-shaft-200">
                    Good life begins with a good company. Start exploring
                    thousands of jobs
                </div>
                <div className="flex h-full mt-5 gap-4">
                    <div className="w-[40%] h-full">
                        <label className="text-mine-shaft-100">
                            Find by Job Title
                        </label>
                        <TextInput
                            placeholder="eg: Software Engineer..."
                            className="rounded-xl bg-mine-shaft-900 text-white"
                            size="md"
                        />
                    </div>
                    <div className="w-[40%] h-full">
                        <label className="text-mine-shaft-100">
                            Find by Job Type
                        </label>
                        <TextInput
                            placeholder="eg: Full Time"
                            className="rounded-xl bg-mine-shaft-900 text-white"
                            size="md"
                        />
                    </div>
                    <div className="flex items-center justify-center h-full w-[10%] mt-6 bg-gold-400 text-mine-shaft-100 rounded-xl hover:bg-gold-500 cursor-pointer">
                        <IconSearch stroke={1.5} className="h-[100%] w-[70%]" />
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/boy.png" alt="Logo" />
                    <div className="w-fit border-gold-400 border rounded-lg p-2 backdrop-blur-md absolute top-[50%] -right-10">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">
                            10K+ Got Job
                        </div>
                        <Avatar.Group>
                            <Avatar src="Avatar1.png" />
                            <Avatar src="Avatar2.png" />
                            <Avatar src="Avatar3.png" />
                            <Avatar>+90k</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="w-fit border-gold-400 border rounded-lg p-2 backdrop-blur-md absolute top-[28%] -left-5 flex flex-col justify-between">
                        <div className="flex gap-1 items-center ">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                {/* Google image */}
                                <img src="Google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">
                                    New York
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5 text-mine-shaft-200 text-xs flex justify-between">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
