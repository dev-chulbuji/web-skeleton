const winston = require(`winston`)
const fs = require(`fs`)
const config = require(`../config/config`).config
const path = require('path')
const moment = require('moment')

const logDir = `logs`;

const jsonFormatter = (logEntry) => {
  const MESSAGE = Symbol.for('message')
  const base = { timestamp: moment().format('YYYY-MM-DD HH:mm:ss') }
  const json = Object.assign(base, logEntry.message)
  logEntry[MESSAGE] = JSON.stringify(json)
  return logEntry
}

const transport = (exports.getLogger = option => {
  const level = option.type === "error" ? "error" : "info";

  if (!fs.existsSync(path.join(process.cwd(), logDir))) {
    fs.mkdirSync(path.join(process.cwd(), logDir));
  }

  const transports = [
    new winston.transports.File({
      filename: path.join(process.cwd(), logDir, `${option.type}.log`),
      datePattern: "YYYY-MM-DD HH:mm:ss",
      maxSize: 1024 * 1024 * 100,
      colorize: false,
      level,
      showLevel: false,
      format: winston.format(jsonFormatter)(),
      // zippedArchive: true,
      // maxFiles: '14d'
    })
  ];

  if (process.env.ENV !== `production` && level === `error`) {
    transports.push(
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json()
        ),
        colorize: true,
        level
      })
    );
  }

  return winston.createLogger({
    transports,
    exitOnError: false
  });
});
