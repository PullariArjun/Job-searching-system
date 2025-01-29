const PostedJobCard = (props) => {
    return (
        <div className="bg-mine-shaft-900 rounded-xl p-2 border border-l-gold-400 border-l-2">
            <div className="text-sm font-semibold">{props.JobTitle}</div>
            <div className="text-xs to-mine-shaft-300 font-medium">
                {props.Location}
            </div>
            <div className="text-xs to-mine-shaft-300">{props.PostedAgo}</div>
        </div>
    );
};
export default PostedJobCard;
