import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../../Data/Data";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 mb-3 text-center">
                Browse <span className="text-gold-400">Job</span> category
            </div>
            <div className="text-lg text-mine-shaft-300 mx-auto text-center w-2/5 mb-10">
                Explore diverse job opportunities tailored to your skills. Start
                your career journey today!
            </div>
            <Carousel
                slideSize="22%"
                slideGap="md"
                controlSize={21}
                loop
                className="focus-visible:[&_button]:!outline-none [&_button]:bg-gold-500 [&_button]:border-none [&_button]:opacity-0 [&_button]:hover:opacity-75"
                nextControlIcon={<IconArrowRight className="h-7 w-7 " />}
                previousControlIcon={<IconArrowLeft className="h-7 w-7  " />}
            >
                {jobCategory.map((category, index) => {
                    return (
                        <Carousel.Slide key={index}>
                            <div className="flex flex-col items-center w-64 border border-gold-500 p-7 my-5 transition duration-300 ease-in-out rounded-2xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-gold-300">
                                <div className="p-2 bg-gold-500 rounded-full">
                                    <img
                                        className="h-8 w-8"
                                        src={`/Category/${category.img}.png`}
                                        alt={category.name}
                                    />
                                </div>
                                <div className="text-mine-shaft-100 text-xl font-semibold">
                                    {category.name}
                                </div>
                                <div className="text-sm text-center px-2 text-mine-shaft-300">
                                    {category.desc}
                                </div>
                                <div className="text-gold-500 text-lg">
                                    {category.jobs}+ jobs posted
                                </div>
                            </div>
                        </Carousel.Slide>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default JobCategory;
