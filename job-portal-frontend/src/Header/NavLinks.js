import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { to: "/find-jobs", name: "Find Jobs" },
        { to: "/find-talent", name: "Find Talent" },
        { to: "/upload-jobs", name: "Upload Jobs" },
        { to: "/posted-jobs", name: "Posted Jobs" },
        { to: "/job-history", name: "Job History" },
    ];
    const location = useLocation();
    return (
        <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        location.pathname.startsWith(link.to)
                            ? "border-gold-300 text-gold-300"
                            : "border-transparent"
                    } border-t-[3px] h-full flex items-center`}
                >
                    <Link to={link.to}>{link.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
