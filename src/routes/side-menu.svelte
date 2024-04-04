<script lang="ts">
	import Menu from '@/components/icons/menu.svelte';
	import Button from '@/components/ui/button/button.svelte';

	import * as Sheet from '@/components/ui/sheet';

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
		<div class="flex flex-col gap-2">
			<a href="/despre-noi">Despre noi</a>
			<a href="/servicii">Servicii</a>
			<a href="/contact">Contact</a>

			<hr />
		</div>

		<p>Realizat de web Scope</p>
	</Sheet.Content>
</Sheet.Root>
