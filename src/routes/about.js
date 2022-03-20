export async function get() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');

	return {
		body: { items: await res.json() },
	};
}
