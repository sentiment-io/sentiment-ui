import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
const PACKAGE_ROOT_PATH = process.cwd();

export default {
  input: `${PACKAGE_ROOT_PATH}/index.ts`,
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({ sourceMap: false }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
    }),
    json(),
  ],
};
