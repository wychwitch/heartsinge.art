<script>
    import ImageGallery from "$lib/components/ImageGallery.svelte";
    export let data;
</script>

<div class="flex flex-col items-center">
    <div class="w-8/12 h-16 container overflow-hidden">
        <img class="object-none object-bottom" src="/images/saltflats_banner.png">
    </div>
    <h1 class="text-primary-c text-center text-5xl my-4">{data.title}</h1>
    <h3 class="text-secondary-400 text-center text-3xl font-bold">Lou Brown</h3>

    <img src={data.mainImg} class="w-40 inline my-10" />

    <section class="bg-secondary-c p-4 my-10 rounded-lg w-8/12">
        <h1 class="text-secondary-400 text-center text-4xl">
            {data.title}
        </h1>

        <div class="my-6">{data.body}</div>
    </section>
</div>
