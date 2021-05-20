const ceaser = (text, key) => {
  const newArray = text.split('').map((x) => x.codePointAt(0));

  const encrypted = newArray.map((x) => {
    if (x >= 97 && x <= 122) {
      if (x + key > 122) {
        return 96 + x + key - 122;
      } else return x + key;
    }
  });

  const newText = encrypted.map((x) => String.fromCharCode(x)).join('');

  console.log(newText);
};

ceaser('aaz', 1);

/*
 


else if (x > 65 && x < 90) {
  if (x + key > 90) {
    65 + x + key - 90;
  } else x + key;
} else x + key;
*/
