<script>
  import { iconsPath } from '../variables';

  export let siteName;
</script>

<style lang="scss">
  $c: black;

  header {
    color: $c;
    font-size: 22px;
  }

  
  .logo {
    display: flex;
    align-items: center;
    
    // &__image {

    // }
  }
  
  h1 {
    display: block;
    margin-left: 10px;
  }

  .menu {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    // margin: ;

    &__item {
      
    }
  }
</style>

<header>
  <div class="container">
    <div class="row">
      <div class="col logo">
        <div class="logo_image"><img src="{iconsPath}/48x48/logo.png" alt=""></div>
        <h1>{siteName}</h1>
      </div>
      <div class="col">
        <ul class="menu">
          <li class="menu__item">Home</li>
          <li class="menu__item">Other</li>
          <li class="menu__item">& Other</li>
        </ul>
      </div>
    </div>
  </div>
</header>