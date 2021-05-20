const ceaser = (text, key) => {
  const newArray = text.split('').map((x) => x.codePointAt(0));

  const encrypted = newArray.map((x) => x + key);

  const newText = encrypted.map((x) => String.fromCharCode(x)).join('');

  console.log(newText);
};

ceaser('Ah so beautiful', 4);
