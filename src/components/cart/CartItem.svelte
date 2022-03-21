<script>
    export let id;
    export let name;
    export let image;
    export let count;
    export let price;
    export let hash;
    export let classes;

    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import Counter from '../Counter.svelte';

    const dispatch = createEventDispatcher();

    let el;
    const action = () => ({ destroy: () => el.remove() });
</script>

<div class="ci {classes}" data-hash={hash} use:action bind:this={el} transition:fade>
    <div class="ci__image-wrap">
        <img src={image} alt="">
    </div>
    <div class="ci__info">
        <div class="ci__name">{name}</div>
        <div class="ci__category">Test Category</div>
        <div class="ci__price">${price}</div>
        <Counter classes={"ci__counter"} value={count} on:change={event => {
            dispatch('changeCount', {
                id,
                hash,
                count: event.detail.value,
                enable: event.detail.enable,
            });
        }}/>
        <button class="ci__remove" on:click={event => dispatch('remove', { id })}>remove</button>
    </div>
</div>

<style lang="scss">
    .ci {
        display: flex;
        // width: 400px;

        &__image-wrap {
            width: 100px;
            height: 100px;
        }
        &__info {
            flex: 1 0 0%;
            margin-left: 10px;
            position: relative;
        }

        &__name {
            margin-bottom: 5px;
        }

        &__price {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    .ci :global(.ci__counter) {
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>