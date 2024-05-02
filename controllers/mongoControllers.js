const Deed = require("../models/Deed");

// GET all deeds
const getAllDeeds = async (req, res) => {
  try {
    const allDeedsArr = (await Deed.find()).map((obj) => ({ deed: obj.deed }));

    return res.status(200).json(allDeedsArr);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET single random deed
const getOneDeed = async (req, res) => {
  try {
    const allDeedsArr = await Deed.find();
    const getRandom = () => Math.floor(allDeedsArr.length * Math.random());

    return res.status(200).json({ deed: allDeedsArr[getRandom()].deed });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllDeeds, getOneDeed };
