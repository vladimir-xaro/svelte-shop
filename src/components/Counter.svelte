<script>
    export let classes;
    export let value;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let waiting = false;

    const runAction = isAdd => {
        if (waiting) {
            return;
        }

        waiting = true
        value += isAdd ? 1 : -1;
        checkRange();

        dispatch('change', { value, enable: () => waiting = false });
    }

    const decrementClickEvent = () => runAction(false);
    const incrementClickEvent = () => runAction(true);

    function checkRange() {
        if (value < 0) {
            value = 0;
        }
        else if (value > 100) {
            value = 100;
        }
    }
</script>

<div class="counter {classes}" class:waiting="{waiting}">
    <button class:hidden="{value < 1}" class="counter__ctrl" on:click={decrementClickEvent}>-</button>
    {value}
    <button class:hidden="{value >= 99}" class="counter__ctrl" on:click={incrementClickEvent}>+</button>
</div>

<style lang="scss">
    .hidden {
        visibility: hidden;
    }

    .waiting {
        opacity: 0.5;

        .counter__ctrl {
            cursor: wait;
            pointer-events: none;
        }
    }
</style>