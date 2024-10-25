const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

const { name } = require("./package.json");

module.exports = [
  {
    input: "src/EasyLoading.ts",
    output: [
      {
        file: `dist/${name}.umd.js`,
        format: "umd",
        name: "EasyLoading",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ module: "es2020" }), nodeResolve(), commonjs()],
  },
  {
    input: "src/EasyLoading.ts",
    output: [
      {
        file: `dist/${name}.es.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        module: "es2020",
      }),
      nodeResolve(),
      commonjs({ defaultIsModuleExports: true }),
    ],
  },
  {
    input: "src/EasyLoading.ts",
    output: {
      file: `dist/${name}.umd.min.js`,
      format: "umd",
      name: "EasyLoading",
      sourcemap: true,
    },
    plugins: [
      typescript({ module: "es2020" }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
];
