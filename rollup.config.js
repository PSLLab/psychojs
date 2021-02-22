// import multi from '@rollup/plugin-multi-entry';
// import { getBabelOutputPlugin } from '@rollup/plugin-babel';


export default {
  input: {
    core: 'build/core.js',
    data: 'build/data.js',
    sound: 'build/sound.js',
    util: 'build/util.js',
    visual: 'build/visual.js'
  },
  // preserveModules: true,
  // plugins: [terser()],
  // plugins: [multi()],
  output: {
    dir: 'dist',
    format: 'es',
    // file: 'psychoJS.js'
    entryFileNames: '[name]-2020.1.js',
    minifyInternalExports: false,
    // manualChunks(id) {
    //   if (id.includes('core')) {
    //     return 'core';
    //   } else if (id.includes('util')) {
    //     console.log(id);
    //     return 'util';
    //   }
    // }
    // preserveModules: true
  }
  // {
  // file: 'psychoJS.es5.js',
  // format: 'esm',
  // plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  // }]
}
// {
//   input: {
//     core: 'build/core.js',
//     data: 'build/data.js',
//     sound: 'build/sound.js',
//     util: 'build/util.js',
//     visual: 'build/visual.js'
//   },
//   // plugins: [multi()],
//   output: {
//     dir: 'dist_es5',
//     format: 'es',
//     plugins: [getBabelOutputPlugin({ presets: [['@babel/env', { modules: false }]] })]
//   }
// }]