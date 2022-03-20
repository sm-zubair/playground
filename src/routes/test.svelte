<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch, session, stuff }) {
		console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);
		const url = `https://jsonplaceholder.typicode.com/todos`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				todos: response.ok && (await response.json()),
			},
			maxage: 20,
		};
	}
</script>

<script>
	export let todos;
</script>

<h2>Testing page</h2>
{#each todos as post}
	<p>{post.title}</p>
{/each}
