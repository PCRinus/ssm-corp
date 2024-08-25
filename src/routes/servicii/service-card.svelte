<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '@/components/ui/button/button.svelte';
	import { ChevronRight } from 'lucide-svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="flex items-center gap-6 text-2xl">
      <slot name="title" />
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
    <section class="text-lg">
      <slot name="content" />
    </section>
	</Card.Content>
</Card.Root>
