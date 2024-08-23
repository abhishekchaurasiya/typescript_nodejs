import morgan from "morgan";
import logger from "../configs/logger.js";
import { IncomingMessage, ServerResponse } from "http";

// export default morgan('combined', { stream: logger.stream });

// morgan('tiny', { stream: logger.stream }); // For smaller logs


morgan.token('logData', (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    // const { method, url, body, query, params, headers, baseUrl } = req;
    // const { statusCode, statusMessage } = res;

    const logData = {
        message: 'Request details',
        // statusCode,
        // statusMessage,
        // baseUrl,
        // url,
        // // baseUrl: `${baseUrl}${url}`,
        // method,
        // body,
        // query,
        // params,
        // headers: headers,
        // timestamp: new Date().toISOString(),
        // ip: headers['x-forwarded-for'] || headers['x-real-ip'] || req.connection.remoteAddress,
        // responseSize: res.getHeader('content-length'),
        responseContentType: res.getHeader('content-type'),
    };

    // Convert logData object to string for logging
    return JSON.stringify(logData);
});

export const morganMiddleware = morgan(':logData', {
    stream: {
        write: (message: string) => logger.info(message)
    }
})