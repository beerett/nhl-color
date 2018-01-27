
import NHLColors from './colors';

const getAllColors = () => NHLColors;

const getMainColor = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NHLColors[abbreviation]) {
    return NHLColors[abbreviation].mainColor;
  }

  return undefined;
};

const getColors = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase()
  if (NHLColors[abbreviation]) {
    return NHLColors[abbreviation].colors;
  }

  return undefined;
};

const getColorsList = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NHLColors[abbreviation]) {
    return Object.keys(NHLColors[abbreviation].colors);
  }

  return undefined;
};

const getFullName = teamAbbreviation => {
  const abbreviation = teamAbbreviation.toUpperCase();
  if (NHLColors[abbreviation]) {
    return NHLColors[abbreviation].fullName;
  }

  return undefined;
};

module.exports = {
  getAllColors,
  getMainColor,
  getColors,
  getFullName,
  getColorsList,
};
