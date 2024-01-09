const asyncHandler = require("express-async-handler");
const data = require("../data/keywordSearchVolumes");

const keywordSearch = asyncHandler(async (req, res) => {
  const word = req.params.keyword.toLowerCase().substring(1);

  const searchVolume = data[word] || 0;
  res.send(
    `The keyword search volume of ${word.toUpperCase()} is ${searchVolume}`
  );
  //   res.json({ word, searchVolume });
});

module.exports = keywordSearch;
