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
    for (const [root, components] of roots) {
      const output = components();
      root.innerHTML = output;
    }
  }

  return {
    attach(components, root) {
      roots.set(root, components);
      render();
    },
    connect(selector = (state) => state) {
      return (components) =>
        (props, ...args) =>
          components(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
