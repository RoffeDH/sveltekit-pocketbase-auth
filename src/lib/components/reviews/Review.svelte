<script lang="ts">
    let { name, value }: { name: string, value: number | boolean } = $props();
</script>

<div class="stat place-items-center">
    <div class="stat-title">{name}</div>
    <div class="stat-value">{value}</div>
</div>