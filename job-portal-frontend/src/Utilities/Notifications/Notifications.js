import { notifications } from "@mantine/notifications";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

const SuccessNotification = (title, message) => {
    return notifications.show({
        title: title,
        message: message,
        bg: "green.8",
        icon: <IconCircleDashedCheck className="rounded-full" />,
        color: "green.4",
        autoClose: true,
        className: "!text-white",
    });
};
const ErrorNotification = (title, message) => {
    return notifications.show({
        title: title,
        message: message,
        bg: "red.8",
        icon: <IconCircleDashedX className="rounded-full" />,
        color: "red.4",
        autoClose: true,
    });
};
export { SuccessNotification, ErrorNotification };
