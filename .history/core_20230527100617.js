export default function html([firstString, ...restString], ...values) {
  return values
    .reduce((acc, cur) => acc.concat(cur, restString.shift()), [firstString])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function createStore(reducer) {
  let state = reducer();
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selectors = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selectors(state), ...args));
    },
  };
}
