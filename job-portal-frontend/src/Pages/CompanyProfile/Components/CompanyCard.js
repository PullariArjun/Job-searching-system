import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props) => {
    return (
        <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                    <img
                        className="h-7"
                        src={`/Companies/${props.company}.png`}
                        alt=""
                    />
                </div>
                <div>
                    <div className="font-semibold">{props.company}</div>
                    <div className="text-xs text-mine-shaft-300">
                        {props.employees} Employees
                    </div>
                </div>
            </div>
            <ActionIcon color="gold.4" variant="subtle">
                <IconExternalLink
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                />
            </ActionIcon>
        </div>
    );
};
export default CompanyCard;
