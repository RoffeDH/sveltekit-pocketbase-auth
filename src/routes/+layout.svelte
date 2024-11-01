<script lang="ts">
    import '../app.css';
    
    let { children, data } = $props();
</script>
<div class="flex flex-col items-stretch min-h-svh">
    {@render children()}
</div>