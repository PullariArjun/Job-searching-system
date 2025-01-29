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

const timeAgo = (dateTime) => {
    const now = new Date();
    const diffInMilliseconds = now - new Date(dateTime);

    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)); // Approximation of months
    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365)); // Approximation of years

    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 30) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (months < 12) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}

export {DateFormat, normalizeDateToLocal, timeAgo}