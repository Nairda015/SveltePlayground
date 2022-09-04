<script>

    export let name;
    export let points;
    let isEditVisible = false;

    const toggleEdit = () => (isEditVisible = !isEditVisible)
    const addPoints = () => points++;
    const removePoints = () => points--;

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
    {/if}

</div>