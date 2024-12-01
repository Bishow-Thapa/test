import pino from "pino";
import moment from "moment";
import { CONFIG } from "./config";

const logLevel = CONFIG?.LOG_LEVEL || "info";

const logger = pino({
  level: logLevel,
  timestamp: () => `${moment().format()}`,
  browser: {
    asObject: true,
  },
});

export default logger;
