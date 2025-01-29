import { Divider } from "@mantine/core";
import Company from "./CompanyProfile/Company";
import SimilarComapanies from "./CompanyProfile/SimilarCompanies";

const CompanyProfile = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <Divider size={"xs"} mx={"md"} />
            <div className="flex gap-5 justify-between p-5">
                <Company />
                <SimilarComapanies />
            </div>
        </div>
    );
};
export default CompanyProfile;
