<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { FireExtinguisher, HardHat, Shield } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-3xl">Serviciile noastre</h1>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<Shield />
				Securitate și Sănătate în Muncă (SSM)
			</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<FireExtinguisher />
				Prevenirea și stingerea incendiilor (PSI)
			</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>

  <Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<HardHat />
				Evalure riscuri de accidentare
			</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
</div>
