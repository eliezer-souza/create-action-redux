import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

export default {
  input: "lib/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: false
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: false
    }
  ],
  plugins: [commonjs()]
};
