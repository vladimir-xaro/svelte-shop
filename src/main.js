import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    // SiteConfig:   window.SiteConfig,
    // TestCatalog:  window.TestCatalog,
  },
});

export default app;