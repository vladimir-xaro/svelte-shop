<script>
    export let id;
    export let name;
    export let image;
    export let price;

    import { createEventDispatcher } from 'svelte';
    import { storeCart } from '../../store';

    const dispatch = createEventDispatcher();

    console.log(storeCart);
</script>

<div class="product">
    <div class="product__image-wrap">
        <img src={image} alt={name} class="product__image">
    </div>
    <div class="product__name">{name}</div>
    <div class="product__price">${price}</div>
    <button on:click={dispatch('addToCart', { id })} class="product__btn">Add to cart</button>
</div>

<style lang="scss">
    .product {
        width: 25%;
        padding: 5px;
        background-color: rgba(white, .7);

        &__image-wrap {
            margin-bottom: 10px;
            text-align: center;
        }
        &__image {}
        &__name {
            font-size: 18px;
            margin-bottom: 10px;
        }
        &__price {
            margin-bottom: 10px;
        }
        &__btn {
            border: none;
            background-color: darkturquoise;
            padding: 0;
            width: 100%;
            height: 30px;
            font-size: 20px;
            transition-duration: 150ms;

            &:hover {
                transform: scale(1.03);
                cursor: pointer;
            }
        }
    }
</style>