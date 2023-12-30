<script>
    export let data;
</script>

<div class="flex flex-col content-center">
    <h1 class="text-primary-c text-center text-4xl">{data.title}</h1>

    <div class="mx-50">
        <img src={data.mainImg} class="w-20 inline" />
    </div>

    <section class="bg-primary-50 p-4 m-10 rounded-lg">
        <h1 class="text-secondary-400 text-center text-4xl">
            Welcome to SvelteKit
        </h1>
        <p class="text-lg">Wowwie</p>
    </section>
</div>
