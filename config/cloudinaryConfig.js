const dotenv = require("dotenv");
const { parsed: config } = dotenv.config();

const url = `https://api.cloudinary.com/v1_1/${
  config.CLOUD_NAME || process.env.CLOUD_NAME
}/resources/image/tags/acutis`;
const auth = {
  username: config.API_KEY || process.env.API_KEY,
  password: config.API_SECRET || process.env.API_SECRET,
};

module.exports = { url, auth };
