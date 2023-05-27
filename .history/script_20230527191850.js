import html from "./core.js";

const cars = ["BMW", "Porche"];

const output = html`
  <h1>${true}</h1>
  <ul>
    ${cars.map((car) => `<li>${car}</li>`)}
  </ul>
`;

console.log(output);
