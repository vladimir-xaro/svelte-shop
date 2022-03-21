<script>
    import Product from './Product.svelte';
    import MessageBox from '../MessageBox.svelte';
    import Loader from '../Loader.svelte';

    const getProducts = async () => {
        const response = await fetch('product/all');
        return await response.json();
    };

    const addToCart = async event => {
        const response = await fetch(`cart/add/${event.detail.id}`)
        await response.json()
        .then(data => {
            console.log(data);
        });
    }
</script>

{#await getProducts()}
    <MessageBox>Loading cart</MessageBox>
    <Loader />
{:then items}
    {#each items as item}
        <Product {...item} on:addToCart={addToCart}/>
    {/each}
{/await}