const ExperienceCard = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                        <img
                            className="h-7"
                            src={`/Companies/${props.Company}.png`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">{props.role}</div>
                        <div className="text-sm text-mine-shaft-300">
                            {props.Company} &bull; {props.Location}, India
                        </div>
                    </div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    {props.startDate} - {props.endDate}
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.Description}
            </div>
        </div>
    );
};
export default ExperienceCard;
