const ceaser = (text) => {
  const array = text.split('');

  const newArray = array.map((x) => x.codePointAt(0));
  console.log(newArray);
};

ceaser('Ah so beautiful');
