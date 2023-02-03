"use strict";

// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна
const isSame = (str1, str2) => {
  const arr1 = new Map();
  arr1.set(
    [...str1.toLowerCase()].sort(),
    [...str2.toLowerCase()].sort()
  );
  arr1.forEach((key, val) => {
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== val[i]) {
        return console.log(false);
      }
    }
    return console.log(true);
  });
};
//compare('test', 'text') -> false
isSame("test", "text");
//compare('Mom', 'omm') -> true\
isSame("Mom", "omm");
//compare('asd', 'Sad') ->true
isSame("asd", "Sad");
//compare('asd', 'ssaadd') ->false
isSame("asd", "ssaadd");
//compare('ssaadd', 'asd') ->false
isSame("ssaadd", "asd");