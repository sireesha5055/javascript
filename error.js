"use strict";
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("odd number ");
      }
      console.log("even number ");
    } catch (err) {
      console.log(err.stack);
    }
    finally {
      console.log("....finally");
      i++;
    }
  }
};
makeError();