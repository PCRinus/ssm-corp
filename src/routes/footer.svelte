<script lang="ts">
	import logoBlack from '$lib/assets/logo-black.png';
</script>

<footer
	class="flex flex-shrink-0 flex-col gap-3 rounded-t-md border-primary bg-primary px-6 py-4 text-black"
>
	<div>
		<img class="aspect-square h-24" alt="The project logo" src={logoBlack} />
	</div>

	<div>
		<h1 class="text-lg font-semibold uppercase">SC CD Safety Core SRL</h1>
		<h2>
			<span class="font-semibold">C.U.I: </span>12345678
		</h2>
		<h2>
			<span class="font-semibold">Registrul Comerțului: </span>J35/1234/2021
		</h2>
	</div>

	<div>
		<p>
			<span class="font-semibold">Telefon:</span> 0722 776 011
		</p>
		<p>
			<span class="font-semibold">Email:</span> casapu_dana@yahoo.com
		</p>
	</div>

	<div class="mt-2 flex flex-col gap-2">
		<h3 class="text-lg font-semibold">Linkuri utile</h3>
		<div class="flex flex-col">
			<a class="text-base underline" href="/gdpr">Politica GDPR</a>
			<a class="text-base underline" href="https://www.inspectiamuncii.ro/web/itm-timis/"
				>ITM Timis</a
			>
			<a class="text-base underline" href="https://www.inspectiamuncii.ro">Inspectia muncii</a>
		</div>
	</div>
</footer>
