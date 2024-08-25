<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import ServiceCard from './service-card.svelte';
</script>

<div class="flex flex-col gap-6">
	<h1 class="text-4xl font-bold">
		Servicii complete pentru
		<span class="text-primary">Siguranța Muncii</span>
	</h1>

	<ServiceCard>
		<div slot="title" class="flex items-center gap-3">
			<!-- <Shield class="text-2xl text-blue-500" /> -->
			Securitate și Sănătate în Muncă (SSM)
		</div>
		<p slot="content">
			Oferim evaluarea riscurilor, implementarea măsurilor de prevenție și instruirea personalului
			în domeniul SSM, asigurând conformitatea și siguranța angajaților, indiferent de industrie.
		</p>
	</ServiceCard>

	<ServiceCard>
		<div slot="title" class="flex items-center gap-3">
			<!-- <FireExtinguisher class="text-2xl text-red-600" /> -->
			Prevenirea și stingerea incendiilor (PSI)
		</div>
		<p slot="content">
			Oferim soluții complete pentru prevenirea și stingerea incendiilor, evaluând riscurile și
			implementând măsuri preventive pentru a proteja angajații și bunurile, conform celor mai
			stricte standarde de siguranță.
		</p>
	</ServiceCard>

	<ServiceCard>
		<div slot="title" class="flex items-center gap-3">
			<!-- <HardHat class="text-2xl text-primary" /> -->
			Evaluare riscuri de accidentare
		</div>
		<p slot="content">
			Identificăm și evaluăm riscurile de accidentare, oferind soluții preventive pentru a proteja
			angajații și a respecta normele de siguranță în muncă.
		</p>
	</ServiceCard>

	<ServiceCard>
		<div slot="title" class="flex items-center gap-3">
			<!-- <Zap class="text-2xl text-primary" /> -->
			Verificare si certificat PRAM
		</div>
		<p slot="content">
			Oferim verificarea și certificarea PRAM pentru asigurarea funcționării corecte a instalațiilor
			electrice, conform standardelor de siguranță.
		</p>
	</ServiceCard>

	<Button class="bg-primary px-6 py-6 text-2xl" href="/contact">Contactează-ne</Button>
</div>
