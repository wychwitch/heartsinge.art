<script>
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
    import "$lib/styles/main.css";
</script>

<Header />

<main class="bg-background-c text-text-c">
    <slot />
</main>
