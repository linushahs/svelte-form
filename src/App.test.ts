import App from "./App.svelte";
import { test, expect, afterEach } from "vitest";

let host: HTMLElement;

afterEach(() => {
  host.remove();
});

test("App renders successfully", () => {
  host = document.createElement("div");
  host.setAttribute("id", "host");
  document.body.appendChild(host);
  const instance = new App({ target: host });
  expect(host.innerHTML).toContain("Hello world");
});
