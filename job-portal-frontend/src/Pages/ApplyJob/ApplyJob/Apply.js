import {
    Divider,
    LoadingOverlay
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../Components/ApplicationForm";
import { timeAgo } from "../../../Utilities/DateFormat/DateFormat";

const Apply = (props) => {
    
    return (
        <>
            <div className="w-2/3 mx-auto mt-5">
                
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 flex items-center justify-center rounded-xl">
                            <img className="h-14" src={`/Companies/${props.company}.png`} alt="" />
                        </div>
                        <div>
                            <div className="font-semibold text-2xl">
                                {props.jobTitle}
                            </div>
                            <div className="text-lg text-mine-shaft-300">
                                {props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants ? props.applicants.length : 0} Applicants
                            </div>
                        </div>
                    </div>
                </div>
                <Divider my={"xl"} />
                <ApplicationForm/>
            </div>
            
        </>
    );
};

export default Apply;
