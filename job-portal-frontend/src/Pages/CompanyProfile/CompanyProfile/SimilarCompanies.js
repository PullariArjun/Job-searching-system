import SimilarComapaniesData from "../../../Data/SimilarCompaniesData";
import CompanyCard from "../Components/CompanyCard";

const SimilarComapanies = () => {
    return (
        <div className="w-1/5">
            <div className="text-xl font-semibold my-5">Similar Companies</div>
            <div className="flex flex-col gap-5 w-full">
                {SimilarComapaniesData.map((company, index) => (
                    <CompanyCard key={index} {...company} />
                ))}
            </div>
        </div>
    );
};
export default SimilarComapanies;
