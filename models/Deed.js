const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const deedScheema = new Scheema({
  deed: {
    type: String,
  },
});

module.exports = mongoose.model("Deed", deedScheema);
