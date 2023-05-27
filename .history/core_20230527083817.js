export default function html([firstString, ...restString], ...values) {
  return values
    .reduce((acc, cur) => acc + cur + restString.shift(), firstString)
    .join("");
}
