const axios = require("axios");
const { url, auth } = require("../config/cloudinaryConfig");

// GET all images
const getAllImages = async (req, res) => {
  try {
    const response = await axios.get(url, { auth });
    const allImgUrls = response.data.resources.map((imgObj) => ({
      imgUrl: imgObj.secure_url,
    }));

    return res.status(200).json(allImgUrls);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET single image
const getOneImage = async (req, res) => {
  try {
    const response = await axios.get(url, { auth });
    const allImgUrls = response.data.resources.map((imgObj) => ({
      imgUrl: imgObj.secure_url,
    }));
    const getRandom = () => Math.floor(allImgUrls.length * Math.random());

    return res.status(200).json(allImgUrls[getRandom()]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllImages, getOneImage };
