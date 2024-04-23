import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		pageMeta: {
			title: 'SSM Corp - Despre Noi',
			description: 'Despre noi'
		}
	};
};