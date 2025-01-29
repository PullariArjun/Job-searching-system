const CertificationsCard = (props) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 flex items-center justify-center rounded-md">
                    <img
                        className="h-7"
                        src={`/Companies/${props.IssuedCompany}.png`}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">
                        {props.certificationName}
                    </div>
                    <div className="text-sm text-mine-shaft-300">
                        {props.IssuedCompany}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="text-sm text-mine-shaft-300">
                    {props.IssuedDate}
                </div>
                <div className="text-sm text-mine-shaft-300">
                    ID: {props.CertificationId}
                </div>
            </div>
        </div>
    );
};
export default CertificationsCard;
