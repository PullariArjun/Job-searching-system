import { AboutCompanyData } from "../../../Data/Data";

const AboutCompany = () => {
    return (
        <div className="flex flex-col gap-5">
            {Object.keys(AboutCompanyData).map(
                (key, index) =>
                    key.toLowerCase() !== "name" && (
                        <div key={index}>
                            <div className="text-xl mb-3 font-semibold">
                                {key}
                            </div>
                            {key.toLowerCase() !== "website" && (
                                <div className="text-sm text-mine-shaft-300 text-justify">
                                    {key !== "Specialties"
                                        ? AboutCompanyData[key]
                                        : AboutCompanyData[key].map(
                                              (item, index) => (
                                                  <span key={index}>
                                                      {" "}
                                                      &bull; {item}
                                                  </span>
                                              )
                                          )}
                                </div>
                            )}
                            {/* eslint-disable-next-line */}
                            {key.toLowerCase() === "website" && (
                                <a
                                    href={AboutCompanyData[key]}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-sm text-gold-400 text-justify"
                                >
                                    {AboutCompanyData[key]}
                                </a>
                            )}
                        </div>
                    )
            )}
        </div>
    );
};
export default AboutCompany;
