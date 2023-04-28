<script>
    import { onMount } from "svelte";

    import { chessboard } from "../stores/gameplay";

    import Pawn from "../models/pawn";

    import ChessTile from "./ChessTile.svelte";

    const initChessboard = () => {
        $chessboard = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    }

    onMount(() => {
        

    })
</script>

<div>
    {#each {length: 64} as _, i}
        <ChessTile />
    {/each}
</div>