import { attach } from "./store.js";

attach(() => "<h1>Hello</h1>", document.getElementById("root"));
