import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandX,
    IconBriefcase,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        location.pathname !== "/sign-up" &&
        location.pathname !== "/login" && (
            <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950">
                <div className="w-1/4 flex flex-col gap-4">
                    <div className="flex gap-3 items-center text-gold-500">
                        <IconBriefcase className="h-9 w-9" stroke={1.25} />
                        <div className="text-2xl font-semibold">iJOBS</div>
                    </div>
                    <div className="text-sm text-mine-shaft-300">
                        Job portal with user profiles, skill updates,
                        certifications, work experience and admin job postings.
                    </div>
                    <div className="flex gap-3 text-gold-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-600 hover:[&>div]:transition hover:[&>div]:duration-200">
                        <div>
                            <IconBrandFacebook />
                        </div>
                        <div>
                            <IconBrandInstagram />
                        </div>
                        <div>
                            <IconBrandX />
                        </div>
                    </div>
                </div>
                {footerLinks.map((item, index) => (
                    <div
                        key={index}
                        className="text-lg font-semibold mb-4 text-gold-400"
                    >
                        <div>{item.title}</div>
                        {item.links.map((link, idx) => (
                            <div
                                key={idx}
                                className="text-mine-shaft-300 text-sm mb-1 hover:text-gold-400 cursor-pointer hover:translate-x-2 hover:duration-500 transition hover:ease-in-out"
                            >
                                {link}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    );
};
export default Footer;
