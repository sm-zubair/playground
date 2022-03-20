export async function get() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 100)}`);
	console.log('server endpoint called');
	return {
		body: { items: await res.json() },
		headers: {
			'cache-control': 'public, max-age=30, s-maxage=seconds=100',
		},
	};
}
