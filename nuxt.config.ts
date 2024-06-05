import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  extends: ['@nuxt/examples-ui'],
  vite: {
    plugins: [
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
          './Button': './components/DataPicker.vue',
        },
        shared: ['vue'],
      }),
    ],
  },
});
