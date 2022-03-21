<script>
    import { fade } from 'svelte/transition';
    import { currentStatus } from '../variables';
    
    currentStatus.cart = false;
</script>

<div transition:fade>
    <h1>Second</h1>
    
    <hr>
</div>