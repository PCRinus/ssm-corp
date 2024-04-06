import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_vYj2hmU55PachozJC2dmEyKIysBKNoxRhWKk8xLzggf', {
			api_host: 'https://eu.posthog.com'
		});
	}
	return;
};
