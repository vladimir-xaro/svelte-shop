<script>
    import Cart from '../components/cart/Cart.svelte';
    import Catalog from '../components/catalog/Catalog.svelte';
    // import { fade } from 'svelte/transition';
    import { currentStatus } from '../variables';
    import { storeCart } from '../store';

    let cmpCart;

    storeCart.set(cmpCart);
    
    currentStatus.cart = true;
</script>

<!-- <div transition:fade> -->
<div class="container">
    <h1>Home</h1>
    
    <hr>

    <div class="row">
        <div class="col-4">
            <Cart bind:this={cmpCart} />
        </div>
        <div class="col catalog">
            <Catalog />
        </div>
    </div>


    
</div>

<style lang="scss">
    .catalog {
        display: flex;
        flex-wrap: wrap;
    }
</style>