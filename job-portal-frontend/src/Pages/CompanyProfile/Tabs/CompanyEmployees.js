import TalentCard from "../../Find Talent/Components/TalentCard";
import TalentsData from "../../../Data/TalentsData";

const CompanyEmployees = () => {
    return (
        <div className="flex flex-wrap ml-10 gap-10">
            {TalentsData.map(
                (talent, index) =>
                    index < 6 && <TalentCard key={index} {...talent} />
            )}
        </div>
    );
};
export default CompanyEmployees;
