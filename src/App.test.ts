import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import App from "./App.svelte";

test("App renders successfully", () => {
  render(App);
  const heading = screen.getByText("Hello world");
  expect(heading).toBeInTheDocument();
});
