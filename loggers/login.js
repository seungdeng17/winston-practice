const config = require("./logger.config.json");

const { createLogger, format, transports } = require("winston");
const winstonDaily = require('winston-daily-rotate-file');
const { combine, timestamp, printf } = format;

const customFormat = printf(info => {
    return `${info.timestamp} - ${info.level}: ${info.message}`;
});

module.exports = createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        customFormat,
    ),
    transports: [
        new transports.Console(),
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYYMMDD',
            dirname: './logs/login',
            filename: `%DATE%.log`,
            maxSize: config.maxSize,
            maxFiles: config.maxFiles
        }),
    ],
});
