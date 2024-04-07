<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Documents from '@/assets/illustrations/documents.svelte';
</script>

<div class="relative flex flex-col gap-6">
	<div class="my-6 flex flex-col gap-2">
		<h1 class="text-3xl">Susținem Afaceri Prospere.</h1>
		<h1 class="text-3xl">Păstrăm Echipele În Siguranță.</h1>
	</div>

	<Button class="bg-primary text-xl" href="/contact">Cere o ofertă</Button>

	<div>
		<h2 class="text-2xl">Servicii SSM și Protecția Muncii în Timișoara</h2>
		<p>Cauți servicii de protecția muncii în Timișoara, dar și servicii de SSM?</p>
		<p>Servicii indispensabile de care are nevoie firma ta</p>

		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center gap-2">Documentație SSM / PSI</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="">
          <Documents />
        </div>
			</Card.Content>
			<Card.Footer>
				<!-- <Button class="flex items-center gap-[0.5] rounded-md bg-primary" href="/servicii/ssm">
					Detalii
					<span class="scale-75"> </span>
				</Button> -->
			</Card.Footer>
		</Card.Root>
	</div>

	<!-- <Documents /> -->
</div>
