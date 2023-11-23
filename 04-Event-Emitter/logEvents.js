const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd")}`;
  const logTime = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logTime);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "newSampleFile.txt"),
      logTime
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
