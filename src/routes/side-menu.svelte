<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';

	import * as Sheet from '@/components/ui/sheet';
	import * as Accordion from '@/components/ui/accordion';

	import { navigating } from '$app/stores';
	import { Menu, Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';

	let open = false;
	$: if ($navigating) open = false;

	const currentYear = new Date().getFullYear();
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger>
		<Button variant="outline">
			<Menu />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content class="flex flex-col justify-between px-8 py-12" side="right">
		<div class="flex flex-col gap-4">
			<a
				data-sveltekit-preload-data="hover"
				data-sveltekit-preload-code="viewport"
				href="/">Acasă</a
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

			<div class="flex">
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center">
			<p class="text-gray-500">Realizat de SC Web Scope SRL</p>
			<p class="text-gray-500">Copyright © {currentYear}</p>
		</div>
	</Sheet.Content>
</Sheet.Root>
