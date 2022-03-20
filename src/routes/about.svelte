<script>
	// populated with data from the endpoint
	export let items;
	export const hydrate = false;
	console.log(`file: about.svelte | line 4 | items`, items);
</script>

<a href="/">Home</a>
{#each items as post}
	<p>{post.title}</p>
{/each}
