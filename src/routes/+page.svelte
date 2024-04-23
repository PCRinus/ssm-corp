<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Documents from '@/assets/illustrations/documents.svelte';
	import Stats from '@/assets/illustrations/stats.svelte';
	import Invite from '@/assets/illustrations/invite.svelte';
	import Certification from '@/assets/illustrations/certification.svelte';
	import Engineer from '@/assets/illustrations/engineer.svelte';
	import Clients from './despre-noi/clients.svelte';
</script>

<section class="relative flex flex-col gap-4">
	<div class="flex flex-col gap-4 text-center">
		<h1 class="text-4xl font-bold">
			Protejează-ți
			<span class="text-primary">echipa și afacerea</span>
		</h1>
		<h2 class="text-lg font-semibold">
			Cu SSM Corp iți realizezi toate actele necesare pentru afacerea ta. De la SSM/PSI, la
			controale periodice, te ajutăm să fii în conformitate cu legea.
		</h2>
	</div>

	<div class="my-2 flex justify-center">
		<Button class="bg-primary px-6 py-2 text-xl" href="/contact">Solicită o ofertă</Button>
	</div>

	<div class="flex flex-col gap-4 text-center">
		<Engineer />
		<h3 class="text-lg font-semibold">
			Oferim
			<span class="text-primary"> servicii complete și consultanță</span>
			pentru orice tip de Persoană Juridică în Timișoara și împrejurimi
		</h3>
	</div>

	<div class="my-2 flex justify-center">
		<Button class="bg-primary px-6 py-2 text-xl" href="/servicii"
			>Vezi toate serviciile noastre</Button
		>
	</div>

	<div class="my-4 text-center">
		<h2 class="text-2xl font-semibold">Cum te ajutam?</h2>

    <h1>Consultanta SSM/PSI</h1>
    <h1>Instruiri introductive generala</h1>
    <h1>Instruiri periodice</h1>
    <h1>Documentatie completa</h1>
    <h1>Reprezentarea firmei la controlate ITM</h1>
	</div>

	<div class="my-4 text-center">
		<h2 class="text-2xl font-semibold">
			Firmele care au
			<span class="text-primary"> incredere </span>
			in noi
		</h2>

		<Clients />
	</div>
</section>
