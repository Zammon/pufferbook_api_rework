const parser = require("body-parser");

module.exports = {
  json: parser.json(),
  body: parser.urlencoded({ extended: false }),
  customBuffer: parser.raw({ type: "application/vnd.custom-type" }),
  text: parser.text({ type: "text/html" }),
};
