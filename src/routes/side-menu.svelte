<script lang="ts">
	import Menu from '@/components/icons/menu.svelte';
	import Button from '@/components/ui/button/button.svelte';

	import * as Sheet from '@/components/ui/sheet';
	import * as Accordion from '@/components/ui/accordion';

	import { navigating } from '$app/stores';

	let open = false;
	$: if ($navigating) open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger>
		<Button variant="outline">
			<Menu />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content class="flex flex-col justify-between" side="right">
		<div class="flex flex-col gap-4">
			<a
				data-sveltekit-preload-data="hover"
				data-sveltekit-preload-code="viewport"
				href="/despre-noi">Despre noi</a
			>
			<Accordion.Root class="py-0">
				<Accordion.Item value="servicii">
					<Accordion.Trigger>
						<a
							data-sveltekit-preload-data="hover"
							data-sveltekit-preload-code="viewport"
							href="/servicii">Servicii</a
						>
					</Accordion.Trigger>
					<Accordion.Content class="pl-2">
						<div class="flex flex-col gap-4">
							<a
								data-sveltekit-preload-data="hover"
								data-sveltekit-preload-code="viewport"
								href="/servicii/ssm">SSM</a
							>
							<a
								data-sveltekit-preload-data="hover"
								data-sveltekit-preload-code="viewport"
								href="/servicii/psi">PSI</a
							>
							<a
								data-sveltekit-preload-data="hover"
								data-sveltekit-preload-code="viewport"
								href="/servicii/evaluare-riscuri">Evaluare riscuri de accidentare</a
							>
						</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
			<a href="/contact">Contact</a>

			<hr />
		</div>

		<p>Realizat de web Scope</p>
	</Sheet.Content>
</Sheet.Root>
