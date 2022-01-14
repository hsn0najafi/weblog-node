import winston from "winston";
import appRoot from "app-root-path";

const logger = winston.createLogger({
  /**
   * Log File Transports
   */
  transports: [
    new winston.transports.File({
      level: "info",
      filename: `${appRoot}/dist/logs/weblog.log`,
      handleExceptions: true,
      format: winston.format.json(),
      maxsize: 10485760,
      maxFiles: 5,
    }),
    /**
     * Console Output Transports
     */
    new winston.transports.Console({
      level: "info",
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
  exitOnError: false,
});

export const myStream = {
  write: function (msg: string) {
    logger.info(msg);
  },
};
