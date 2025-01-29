import { Divider, RangeSlider } from "@mantine/core"
import { SearchbarDataForFindJobs } from "../../../Data/Data"
import { useState } from "react";
import MultiSelect from "../../../Utilities/MultiSelect/MultiSelect";

const SearchBar = () =>{
    const [value, setValue] = useState([0, 100]);
    return (
        <div className="flex px-5 py-8 justify-between">
            {
                SearchbarDataForFindJobs.map((item, index) =><div className="w-1/5 flex" key={index}>
                        <div className="w-full">
                            <MultiSelect {...item}/>
                        </div>
                        <Divider size={"xs"} mr={"xs"} orientation="vertical" />
                    </div>
                    
                )
            }

            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider color="gold.4" size={"xs"} value={value} onChange={setValue} />
            </div>
        </div>
    )
}
export default SearchBar