<script lang="ts">
	import type { PageData } from './$types.js';
	import ContactForm from './contact-form.svelte';
	export let data: PageData;
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-3xl">Contact</h1>

	<ContactForm data={data.form} />
</div>
