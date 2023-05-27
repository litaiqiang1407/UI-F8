import { createStore } from "./core.js";
import reduce from "core-js/fn/array/reduce";

const { attach, connect, dispatch } = createStore(reducer);
