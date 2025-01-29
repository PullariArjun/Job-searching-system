import { Avatar } from "@mantine/core";
import { work } from "../../../Data/Data";

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 mb-3 text-center">
                How it <span className="text-gold-400">Works</span>
            </div>
            <div className="text-lg text-mine-shaft-300 mx-auto text-center w-2/5 mb-10">
                Effortlessly navigate through the process and land your dream
                job.
            </div>
            <div className="flex justify-between px-16 items-center">
                <div className="relative">
                    <img
                        src="/Working/Girl.png"
                        alt="Girl"
                        className="w-[30rem]"
                    />
                    <div className="absolute top-[15%] right-0 w-36 flex flex-col justify-center items-center gap-1 border border-gold-400 rounded-xl py-3 px-1 backdrop-blur-md">
                        <Avatar
                            className="!h-16 !w-16"
                            src="avatar2.png"
                            alt="it's me"
                        />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center">
                            Complete Your Profile
                        </div>
                        <div className="text-xs text-mine-shaft-300 ">
                            70% Compleeted
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {work.map((work, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="bg-gold-300 p-1 rounded-full">
                                <img
                                    src={`Working/${work.img}`}
                                    alt="Build"
                                    className="h-12 w-12 rounded-full"
                                />
                            </div>
                            <div>
                                <div className="text-mine-shaft-200 text-xl font-semibold">
                                    {work.name}
                                </div>
                                <div className="text-mine-shaft-300">
                                    {work.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Working;
