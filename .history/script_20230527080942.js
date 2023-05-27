import html from "./core.js";

function highlight([first, ...string], ...values) {
  return values.reduce(
    (arr, cur) => {
      return arr + `<span>${cur}</span>` + string.shift();
    },
    [first]
  );
}

const course = "JS";
const brand = "F8";

const html = highlight`Học Lập trình ${course} tại ${brand}!`;

console.log(html);
