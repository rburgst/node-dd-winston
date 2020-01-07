const winston = require('winston');
const loggerTransports = []
const loggerFormats = [
    winston.format.splat()
];

loggerFormats.push(winston.format.json())

loggerTransports.push(new winston.transports.Console())

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(...loggerFormats),
    transports: loggerTransports,
});
module.exports = logger;
