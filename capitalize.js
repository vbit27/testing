const capitalize = (string) => {
  const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return stringCapitalized;
};

module.exports = capitalize;
