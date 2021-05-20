const ceaser = (text, key) => {
  const newArray = text.split('').map((x) => x.codePointAt(0));

  const encrypted = newArray.map((x) => {
    //encrypt the original array
    if (x >= 97 && x <= 122) {
      // for small letters
      if (x + key > 122) {
        return 96 + x + key - 122;
      } else return x + key;
    } else if (x >= 65 && x <= 90) {
      // for capital letters
      if (x + key > 90) {
        return 64 + x + key - 90;
      } else return x + key;
    } else return x; // for everything else
  });

  //turn new code into letters
  const encryptedText = encrypted.map((x) => String.fromCharCode(x)).join('');

  return encryptedText;
};

module.exports = ceaser;
