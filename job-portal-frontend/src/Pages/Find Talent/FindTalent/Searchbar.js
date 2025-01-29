import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import { SearchbarDataForFindTalents } from "../../../Data/Data";
import MultiSelect from "../../../Utilities/MultiSelect/MultiSelect";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState([0, 100]);
    return (
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center">
                <div className="text-gold-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
                    <IconUserCircle size={20} />
                </div>
                <Input
                    className="[&_input]:!placeholder-mine-shaft-300"
                    variant="unstyled"
                    placeholder="Talent Name"
                />
            </div>
            {SearchbarDataForFindTalents.map((item, index) => (
                <div key={index} className="w-1/5 flex">
                    <div key={index} className="w-full">
                        <MultiSelect {...item} />
                    </div>
                    <Divider size={"xs"} mr={"xs"} orientation="vertical" />
                </div>
            ))}

            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Salary</div>
                    <div>
                        &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
                    </div>
                </div>
                <RangeSlider
                    color="gold.4"
                    size={"xs"}
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    );
};
export default SearchBar;
