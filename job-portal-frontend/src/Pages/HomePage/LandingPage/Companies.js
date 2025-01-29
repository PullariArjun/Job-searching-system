import Marquee from "react-fast-marquee";
import companies from "../../../Data/Data";

const Companies = () => {
    return (
        <div className="mt-20">
            <div className="text-4xl font-semibold text-mine-shaft-100 mb-10 text-center">
                Trusted by <span className="text-gold-400">1000+</span>{" "}
                companies
            </div>
            <Marquee pauseOnHover>
                {companies.map((company, index) => {
                    return (
                        <div
                            key={index}
                            className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer"
                        >
                            <img
                                className="h-14"
                                src={`/Companies/${company}.png`}
                                alt={company}
                            />
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};
export default Companies;
