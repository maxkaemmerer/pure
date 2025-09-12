// install and import tsconfigPaths
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  //add tsconfigPaths() below
  plugins: [tsconfigPaths()],

  test: {
    // rest of the code
  },
});
