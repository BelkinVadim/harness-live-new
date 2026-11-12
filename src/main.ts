import { greeting } from "./greeting";

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  app.textContent = greeting("world");
}
