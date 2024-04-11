<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Documents from '@/assets/illustrations/documents.svelte';
	import Stats from '@/assets/illustrations/stats.svelte';
	import Invite from '@/assets/illustrations/invite.svelte';
	import Certification from '@/assets/illustrations/certification.svelte';
	import Engineer from '@/assets/illustrations/engineer.svelte';
</script>

<main class="relative flex flex-col gap-4">
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
</main>
