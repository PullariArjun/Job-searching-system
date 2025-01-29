import TalentsData from "../../../Data/TalentsData";
import TalentCard from "../../Find Talent/Components/TalentCard";

const RecommendedTalent = () => {
    return (
        <div>
            <div className="text-xl font-semibold my-5">
                Recommended Talents
            </div>
            <div className="flex flex-col gap-5">
                {TalentsData.map((talent, index) => {
                    return index < 4 && <TalentCard key={index} {...talent} />;
                })}
            </div>
        </div>
    );
};
export default RecommendedTalent;
