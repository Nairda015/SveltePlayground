<script>
    import Player from "./Components/Player.svelte"
    import Header from "./Components/Header.svelte"
    import PlayerForm from "./Components/PlayerForm.svelte"
    import { players } from './stores.js';

    let playersList;

    players.subscribe(value => {
        playersList = value;
    });
</script>

<Header/>
<PlayerForm/>

{#if playersList.length === 0}
    <p>No players in list</p>
{:else}
    {#each playersList as {name, points}}
        <Player name={name} points={points}/>
    {/each}
{/if}



