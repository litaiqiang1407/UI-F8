import html from "./core.js";

function highlight([first, ...string], ...values) {
  return values.reduce(
    (acc, cur) => {
      return [...acc, `<span>${cur}</span>`, string.shift()];
    },
    [first]
  );
}

const course = "JS";
const brand = "F8";

const htmls = highlight`Học Lập trình ${course} tại ${brand}!`;

console.log(htmls);