<script>
    export let data;
</script>

<div class="flex flex-col items-center">
    <h1 class="text-primary-c text-center text-5xl my-12">{data.title}</h1>

    <img src={data.mainImg} class="w-40 inline" />

    <section class="bg-secondary-c p-4 my-10 rounded-lg w-8/12">
        <h1 class="text-secondary-400 text-center text-4xl">
            {data.title}
        </h1>
        <div class="my-6">{data.body}</div>
    </section>
</div>
