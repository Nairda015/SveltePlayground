<script>
    import { players } from '../stores.js';

    export let name;
    export let points;
    let isEditVisible = false;

    const toggleEdit = () => (isEditVisible = !isEditVisible)
    const addPoints = () => points++;
    const removePoints = () => points--;

    const removePlayer = () =>
    {
        players.update(data => data.filter(x => x.name !== name))
    }
</script>


<style>


</style>


<div class="container">
    <h3>{name}</h3>
    <h4>{points}</h4>
    <button on:click={toggleEdit}>Edit</button>

    {#if isEditVisible}
        <button on:click={addPoints}>+</button>
        <button on:click={removePoints}>-</button>
        <button on:click={removePlayer}>Remove</button>
    {/if}

</div>