import * as winston from 'winston';
import { LogstashTransport } from 'winston-logstash';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new LogstashTransport({
      port: 5000,
      host: 'logstash'
    })
  ]
});