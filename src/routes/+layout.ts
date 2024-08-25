import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

export const load = async () => {
	if (browser) {
		posthog.init('phc_vYj2hmU55PachozJC2dmEyKIysBKNoxRhWKk8xLzggf', {
			api_host: 'https://eu.posthog.com'
		});
	}
};
