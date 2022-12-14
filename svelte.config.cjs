const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [require('autoprefixer')],
    },
    sass: {
      sync: true,
      implementation: require('sass'),
    },
  }),
}
