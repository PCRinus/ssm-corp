<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Engineer from '@/assets/illustrations/engineer.svelte';
	import Clients from './clients.svelte';
	import { Check } from 'lucide-svelte';
	import Experience from './experience.svelte';
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

	<section class="my-4 flex flex-col gap-6 rounded-md bg-zinc-900 px-4 py-6">
		<h2 class="text-2xl font-semibold">Cum te putem ajuta?</h2>
		<ul class="flex flex-col gap-1 text-lg">
			<li class="flex items-center gap-2">
				<Check class="text-primary" />
				Consultanță SSM/PSI
			</li>

			<li class="flex items-center gap-2">
				<Check class="text-primary" />
				Instruire introductivă generală
			</li>

			<li class="flex items-center gap-2">
				<Check class="text-primary" />
				Instruiri periodice
			</li>

			<li class="flex items-center gap-2">
				<Check class="text-primary" />
				Documentație completă
			</li>

			<li class="flex items-center gap-2">
				<Check class="text-primary" />
				Reprezentarea firmei la controlate ITM
			</li>
		</ul>
	</section>

	<div class="text-center my-4">
		<h2 class="text-2xl font-semibold">
			Firmele care au
			<span class="text-primary"> încredere </span>
			in noi
		</h2>

		<Clients />
	</div>

	<div class="flex flex-col gap-8 text-center">
		<h2 class="text-3xl font-semibold">
			Experiența noastră, <span class="text-primary">în cifre</span>
		</h2>
		<Experience />
	</div>

	<div class="my-2 flex justify-center">
		<Button class="bg-primary px-6 py-2 text-2xl" href="/contact">Cere mai multe detalii</Button>
	</div>
</section>
