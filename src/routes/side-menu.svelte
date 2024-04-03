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
	<Sheet.Content side="right">
    <div class="flex flex-col gap-2">
      <a href="/despre-noi">Despre noi</a>
      <a href="/servicii">Servicii</a>
      <a href="/contact">Contact</a>
    </div>
	</Sheet.Content>
</Sheet.Root>
