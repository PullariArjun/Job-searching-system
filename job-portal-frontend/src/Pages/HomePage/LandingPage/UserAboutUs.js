import { Avatar, Rating } from "@mantine/core";
import { userAboutUs } from "../../../Data/Data";

const UserAboutUs = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 mb-3 text-center">
                What <span className="text-gold-400">User</span> says about us?
            </div>
            <div className="w-full flex justify-between px-10">
                {userAboutUs.map((user, index) => (
                    <div
                        key={index}
                        className="flex gap-3 flex-col w-[23%] border border-gold-400 p-3 rounded-xl mt-10 cursor-pointer"
                    >
                        <div className="flex gap-2 items-center">
                            <Avatar
                                className="!h-14 !w-14"
                                src={user.avatar}
                                alt="it's me"
                            />
                            <div>
                                <div className="text-lg text-mine-shaft-100 font-semibold">
                                    {user.name}
                                </div>
                                <Rating
                                    value={user.rating}
                                    fractions={2}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="text-xs text-mine-shaft-200">
                            {user.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default UserAboutUs;
