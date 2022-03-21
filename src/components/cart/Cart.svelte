<script>
    import { fade } from 'svelte/transition';
    import CartItem from './CartItem.svelte';
    import Loader from '../Loader.svelte';
    import MessageBox from '../MessageBox.svelte';
    import { onMount } from 'svelte';
    import { currentStatus } from '../../variables';
    import { storeCart } from '../../store';

    let inProgress = true;
    let data;
    window.data = data;

    const getData = async () => {
        const response = await fetch('cart/get');
        return await response.json();
    };

    const updateItem = async ({ id, count }) => {
        const response = await fetch(`cart/update/${id}/${count}`)
        return await response.json();
    }

    onMount(async () => {
        getData()
        .then(_data => {
            console.log(_data);
            window.cart = _data;
            data = _data;
            inProgress = false;
        })
    });

    const updateByVisibilityChangeHandler = () => {
        if (currentStatus.cart && ! document.hidden) {
            inProgress = true;
            
            getData()
            .then(_data => {
                if (!data || data.total.hash !== _data.total.hash) {
                    data = _data;
                }
                inProgress = false;
            })
            .catch(reason => {
                // console.log(reason);
            });
        }
    }

    const changeItemCount = async event => {
        updateItem(event.detail).then(_data => {
            console.log(_data);
            data = _data;
            event.detail.enable();
        });
    }

    const removeItem = async event => {
        console.log('remove item', event);
        const response = await fetch(`cart/remove/${event.detail.id}`)
        await response.json().then(_data => {
            console.log(_data);
        });
    }

    storeCart.subscribe(cart => {
        console.log(cart);
    })
</script>

<svelte:window on:visibilitychange={updateByVisibilityChangeHandler} />

<div class="cart">
    {#if data}
        {#if inProgress}
            <MessageBox>Cart UPDATING...</MessageBox>
            <div class="loader-frame" transition:fade>
                <Loader />
            </div>
        {:else}
            {#if data.total.count}
                {#each data.items as item}
                    <CartItem {...item} classes="cart__item" on:changeCount={changeItemCount} on:remove={removeItem}/>
                {/each}
            {:else}
                <MessageBox text="Cart is empty" />
            {/if}
        {/if}
    {:else}
        <MessageBox>Cart LOADING...</MessageBox>
        <div class="loader-frame" transition:fade>
            <Loader />
        </div>
    {/if}
</div>

<style lang="scss">
    .cart {
        position: relative;
        margin-bottom: -10px;
        // width: 400px;
        min-height: 210px;

        :global(.cart__item) {
            margin-bottom: 10px;
        }
    }
    .loader-frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(black, 0.3);
    }
</style>