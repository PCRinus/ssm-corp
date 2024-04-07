<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Documents from '@/assets/illustrations/documents.svelte';
	import Stats from '@/assets/illustrations/stats.svelte';
	import Invite from '@/assets/illustrations/invite.svelte';
	import { ChevronRight } from 'lucide-svelte';
</script>

<div class="relative flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl">Susținem Afaceri Prospere.</h1>
		<h1 class="text-3xl">Păstrăm Echipele În Siguranță.</h1>
	</div>

	<Button class="bg-primary text-xl" href="/contact">Cere o ofertă</Button>

	<div class="flex flex-col gap-4">
		<h2 class="text-2xl">Servicii SSM și Protecția Muncii în Timișoara</h2>

		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center gap-2">Documentație SSM / PSI</Card.Title>
				<Card.Description>O singură dată</Card.Description>
			</Card.Header>
			<Card.Content>
				<Documents />
			</Card.Content>
			<Card.Footer>
				<Button class="flex items-center gap-[0.5] rounded-md bg-primary" href="/servicii/ssm">
					Detalii
					<span class="scale-75">
						<ChevronRight />
					</span>
				</Button>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center gap-2">Evaluarea riscurilor de accidentare</Card.Title>
				<Card.Description>O singură dată</Card.Description>
			</Card.Header>
			<Card.Content>
				<Stats />
			</Card.Content>
			<Card.Footer>
				<Button class="flex items-center gap-[0.5] rounded-md bg-primary" href="/servicii/ssm">
					Detalii
					<span class="scale-75">
						<ChevronRight />
					</span>
				</Button>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center gap-2">Asistență SSM / PSI</Card.Title>
				<Card.Description>Lunar / Trimestrial</Card.Description>
			</Card.Header>
			<Card.Content>
				<Invite />
			</Card.Content>
			<Card.Footer>
				<Button class="flex items-center gap-[0.5] rounded-md bg-primary" href="/servicii/ssm">
					Detalii
					<span class="scale-75">
						<ChevronRight />
					</span>
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
