import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/main.js',
  output: [
    {
      sourcemap: true,
      // file: 'build/main.js',
      dir: 'public/build',
      format: 'esm',
      // format: 'system',
      // format: 'iife',
      // name: 'app', // systemjs not working with it (and lazy mb)
      // inlineDynamicImports: true,
      chunkFileNames: c => `${c.type}-${c.name.toLowerCase()}.js`,
    // }, {
    //   dir: 'build',
    //   format: 'esm',
    //   chunkFileNames: c => {`${c.type}-${c.name.toLowerCase()}.js`,
    }
  ],
  plugins: [
    // del({
    //   targets: 'build/*',
    //   patterns: [
    //     /^chucnk\-/,
    //   ]
    // }),

    svelte({
      compilerOptions: {
        dev: !production,
      },
      // include:  'src/**/*.svelte',
      // css: css => {
      //   css.write('build/main2.css');
      // },
      preprocess: preprocess(),
    }),

    resolve({
      browser: true,
      dedupe: [ 'svelte' ],
    }),

    postcss({
      extract: true,
      // modules: false
    }),

    production && terser({
      format: {
        // beautify: true,
        comments: false,
      },
      compress: {
        drop_console: true,
      }
    }),

    production && babel({
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            "targets": "> 0%",
            // "useBuiltIns": "usage",
            // "corejs": 3,
            // "modules": "auto"
          }
        ],
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
      ]
    }),
  ]
};