const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({
            filename: 'log/course.log.text',
            level: 'error',
            format :  winston.format.combine(winston.format.timestamp(),winston.format.json())
        }),
    ],
});


module.exports = logger;