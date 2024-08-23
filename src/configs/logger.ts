import path from "path";
import { transports, format, createLogger } from "winston";
const { prettyPrint, timestamp, json, metadata, combine } = format;


// file path 
const filePath = path.join(__dirname, "../../logger");


const logger = createLogger({
    level: "info",
    format: combine(
        timestamp({ format: "yyyy-MM-dd HH:mm:ss" }),
        json(),
        metadata(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: `${filePath}/logger.log`, level: "info" }),
        new transports.File({ filename: `${filePath}/error.log`, level: "error" }),
    ]
})

if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.File({
        filename: `${filePath}/production.log`,
    }));
} else {
    logger.add(new transports.Console());
}

// console.log(process.env.NODE_ENV)

export default logger;

