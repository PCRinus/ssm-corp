import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;

export const load = async () => {
	if (browser) {
		posthog.init(`${POSTHOG_API_KEY}`, {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
		});
	}
	return;
};
