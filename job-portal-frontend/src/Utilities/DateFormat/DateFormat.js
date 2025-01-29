const DateFormat = (dateString) =>{
    const date = new Date(dateString);
    const options = {year:"numeric", month:"short"}
    return date.toLocaleString("en-US", options)
}

const normalizeDateToLocal = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0); // Set time to noon to avoid time zone issues
    return localDate;
};
export {normalizeDateToLocal}
export default DateFormat