import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		pageMeta: {
			title: 'SSM Corp - SSM',
			description: 'SSM'
		}
	};
};