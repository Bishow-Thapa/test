import { notification } from "antd";

notification.config({
  placement: "topRight",
  duration: 3,
});

export const notify = (
  type = "info",
  placement = "topRight",
  message = "Notification",
  description = "No details provided.",
  duration = 3
) => {
  const validTypes = ["success", "error", "info", "warning"];

  if (!validTypes.includes(type)) {
    console.error(
      `Invalid notification type: "${type}". Valid types are: ${validTypes.join(
        ", "
      )}`
    );
    return;
  }

  notification[type]({
    placement,
    message,
    description,
    duration,
  });
};
