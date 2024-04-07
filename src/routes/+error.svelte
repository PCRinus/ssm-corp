<script>
	import Cancel from '@/assets/illustrations/cancel.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '@/components/ui/button';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="flex items-center gap-2 text-xl"
			>Oops, pagina nu este disponibilă, ne pare rău!</Card.Title
		>
	</Card.Header>
	<Card.Content class="my-4">
		<Cancel />
	</Card.Content>
	<Card.Footer class="flex flex-col items-stretch">
		<Button class="bg-primary text-xl" href="/">Înapoi la pagina principală</Button>
	</Card.Footer>
</Card.Root>
