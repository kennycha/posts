import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params: { id } }) {
	const res = await fetch(`posts/${id}.md`);
	if (res.status === 404) {
		throw redirect(307, '/');
	} else {
		const source = await res.text();

		return {
			source
		};
	}
}
