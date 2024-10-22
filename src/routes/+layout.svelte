<script lang="ts">
    import '../app.css';
    

    let { children, data } = $props();
</script>
<div class="flex flex-col content-end m-auto h-svh md:w-2/3">
    {@render children()}
</div>

<style>
    
</style>