<script>
    import { fade } from 'svelte/transition';
</script>

<div class="message-box" transition:fade>
    <slot />
</div>

<style lang="scss">
    .message-box {
        text-align: center;
    }
</style>