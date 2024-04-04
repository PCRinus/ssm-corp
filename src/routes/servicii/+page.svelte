<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '@/components/ui/button/button.svelte';
	import { ChevronRight, FireExtinguisher, HardHat, Shield } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-3xl">Serviciile noastre</h1>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<Shield />
				Securitate și Sănătate în Muncă (SSM)
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>
				Serviciile noastre acoperă evaluarea și gestionarea riscurilor, implementarea măsurilor de
				prevenție, instruirea personalului și consultanță în domeniul SSM. Oferim suport și
				expertiză, indiferent de industrie, dimensiunea companiei sau complexitatea cerințelor,
				asigurându-ne că operațiunile dvs. sunt conforme și că angajații lucrează în siguranță și
				sănătate.
			</p>
		</Card.Content>
		<Card.Footer>
			<Button class="bg-primary flex items-center gap-[0.5] rounded-md" href="/servicii/ssm">
				Detalii
				<span class="scale-75">
					<ChevronRight />
				</span>
			</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<FireExtinguisher />
				Prevenirea și stingerea incendiilor (PSI)
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>
				Echipa noastră se dedică prevenirii și stingerii incendiilor în mediul dvs. de afaceri. Prin
				evaluarea atentă a riscurilor și implementarea măsurilor preventive adecvate, ne asigurăm că
				sunteți pregătiți să gestionați eficient orice situație de urgență legată de incendii.
				Indiferent de tipul afacerii dumneavoastră, ne angajăm să vă protejăm angajații și bunurile,
				respectând cele mai înalte standarde de siguranță împotriva incendiilor.
			</p>
		</Card.Content>
		<Card.Footer>
			<Button class="bg-primary flex items-center gap-[0.5] rounded-md" href="/servicii/psi">
				Detalii
				<span class="scale-75">
					<ChevronRight />
				</span>
			</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<HardHat />
				Evalure riscuri de accidentare
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>
				Echipa noastră identifică și evaluează riscurile de accidentare în cadrul afacerii dvs. Prin
				analize detaliate, ne asigurăm că implementați măsuri preventive adecvate pentru a minimiza
				pericolele. Indiferent de domeniul de activitate, suntem aici pentru a vă ajuta să vă
				protejați angajații și să respectați normele de siguranță și sănătate în muncă.
			</p>
		</Card.Content>
		<Card.Footer>
			<Button
				class="bg-primary flex items-center gap-[0.5] rounded-md"
				href="/servicii/evaluare-riscuri"
			>
				Detalii
				<span class="scale-75">
					<ChevronRight />
				</span>
			</Button>
		</Card.Footer>
	</Card.Root>
</div>
