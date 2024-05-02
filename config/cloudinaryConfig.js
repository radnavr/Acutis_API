const dotenv = require("dotenv");
const { parsed: config } = dotenv.config();

const url = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image/tags/acutis`;
const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
};

module.exports = { url, auth };
