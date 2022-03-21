<script>
  import { Router, Link } from "svelte-navigator";
  import LazyRoute from "./LazyRoute.svelte";

  const Home = () => import("./routes/Home.svelte");
  const Second = () => import("./routes/Second.svelte");

  // export let SiteConfig;
  // export let TestCatalog;
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="second">Second</Link>
  </nav>

  <LazyRoute path="/" component={Home} delayMs={70} primary={false}>
    Loading...
  </LazyRoute>
  <LazyRoute path="second" component={Second} delayMs={70} primary={false}>
    Loading...
  </LazyRoute>
</Router>

<style global lang="scss">
  @import './scss/global.scss';

  p {
    color: cadetblue;
    font-size: 19px;
  }

  .items {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    height: 300px;
    width: 500px;
    border: solid 1px black;
  }

  .item {
    display: flex;

    &__left {
      width: 100px;
    }

    &__right {
      // display: flex;
      // flex-direction: column;
      margin-left: 10px;
    }

    // &__name,
    // &__price {
      
    // }

    &__name {
      font-size: 19px;
      color: coral;
      margin-bottom: 10px;
    }

    &__price {
      font-size: 16px;
    }
  }
</style>