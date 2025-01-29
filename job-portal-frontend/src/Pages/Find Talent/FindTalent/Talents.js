// import TalentsData from "../../../Data/TalentsData"
import TalentsData from "../../../Data/TalentsData";
import Sort from "../../FindJobs/Components/Sort";
import TalentCard from "../Components/TalentCard";

const Talents = () => {
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>
            <div className="flex mt-10 flex-wrap gap-5 justify-between">
                {TalentsData.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </div>
    );
};
export default Talents;
