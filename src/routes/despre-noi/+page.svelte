<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Clients from './clients.svelte';
</script>

<section class="flex flex-col gap-6">
	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-semibold">Cine suntem?</h1>
		<p>
			SSM Corp este un lider de încredere în domeniile Securității și Sănătății în Muncă (SSM) și și
			Prevenirea și Stingerea Incendiilor (PSI) din Timișoara, cu o vastă experiență de peste 10 ani
			în industrie.
		</p>
	</div>

	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-semibold">Ce oferim?</h1>
		<p>
			Ne-am angajat să oferim servicii de cea mai înaltă calitate pentru a ajuta afacerile să își
			protejeze activitățile și angajații împotriva riscurilor și amenințărilor din mediu de lucru.
			Echipa noastră de specialiști în SSM și PSI are cunoștințe solide și expertiză în
			identificarea, evaluarea și gestionarea riscurilor de accidentare și incendiu.
		</p>
		<p>
			Oferim o gamă completă de servicii, inclusiv evaluarea și gestionarea riscurilor, elaborarea
			și implementarea planurilor de prevenire și stingere a incendiilor, instruirea personalului în
			materie de securitate și sănătate în muncă și furnizarea de echipamente și soluții tehnologice
			avansate.
		</p>
	</div>

	<Button class="bg-primary text-xl" href="/contact">Cere o ofertă</Button>

	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-semibold">Cine sunt clientii noștri?</h1>

		<Clients />

		<p>
			Cu o rețea extinsă de clienți din diverse sectoare, inclusiv construcții, agricultură, HoReCa,
			industria manufacturieră și multe altele, suntem pregătiți să oferim soluții personalizate,
			adaptate specificului fiecărei afaceri. Ne angajăm să fim partenerii dvs. de încredere în
			crearea și menținerea unui mediu de lucru sigur și sănătos, astfel încât să vă puteți
			concentra pe succesul și creșterea afacerii dvs.
		</p>

		<!-- <p>
			Contactați-ne astăzi pentru a afla cum vă putem ajuta să vă îmbunătățiți strategiile de
			securitate și sănătate în muncă, precum și protecția împotriva incendiilor în cadrul afacerii
			dvs. Cu SSM Corp, veți beneficia de servicii de înaltă calitate și de angajamentul nostru ferm
			pentru succesul și securitatea afacerii dvs.
		</p> -->
	</div>
</section>
