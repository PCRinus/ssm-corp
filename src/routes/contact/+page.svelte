<script lang="ts">
	import { toast } from 'svelte-sonner';
	import type { ActionData, PageData } from './$types.js';
	import ContactForm from './contact-form.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: if (form?.form.posted) {
		toast.success('Formularul a fost trimis cu succes!');
	}
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-4xl font-bold">
		Contactează-ne pentru siguranța echipei tale
		<span class="text-primary">siguranța echipei tale</span>
	</h1>

	<ContactForm data={data.form} />

	{#if form?.form.posted}
		<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	{/if}
</div>
