export default function html([firstString, ...restString], ...values) {
  return values.reduce(
    (acc, cur) => acc.concat(cur, restString.shift()),
    [firstString]
  );
}
