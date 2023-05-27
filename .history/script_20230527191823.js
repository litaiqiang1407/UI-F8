import html from "./core.js";

const cars = ["BMW", "Porche"];

const output = html`
  <ul>
    ${cars.map((car) => `<li>${car}</li>`)}
  </ul>
`;

console.log(output);
