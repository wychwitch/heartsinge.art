<script lang="ts">
    import { Lightbox } from "svelte-lightbox";
    export let images;
</script>

<div class="flex flex-row flex-wrap">
    <div class="flex flex-col max-w-1/4">
        {#if images}
            {#each images as image}
                <div class="mt-2 align-middle">
                    <Lightbox>
                        <img src={image.img} />
                    </Lightbox>
                </div>
            {/each}
        {/if}
    </div>
</div>
