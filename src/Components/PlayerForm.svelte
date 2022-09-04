<script>

    import { players } from '../stores.js';

    let player = {
        name: "",
        points: 0
    }

    const addPlayer = (e) =>
    {
        e.preventDefault();
        players.update(data => [...data, player])
        player = {name: "", points: 0}
    }
</script>


<form on:submit={addPlayer}>
    <input type="text" placeholder="Name" bind:value={player.name}>
    <input type="number" placeholder="points" bind:value={player.points}>
    <input type="submit" value="Add">
</form>