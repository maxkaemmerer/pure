/// <reference types="vitest" />
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  //add tsconfigPaths() below
  plugins: [tsconfigPaths({})],
  test: {
    environment: "node",
  },
});
