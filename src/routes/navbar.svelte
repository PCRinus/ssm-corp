<script lang="ts">
	import logoWhite from '$lib/assets/logos/ssm-corp-white.png';
	import logoBlack from '$lib/assets/logos/ssm-corp-black.png';
	import SideMenu from './side-menu.svelte';

  import { mode } from 'mode-watcher'

  $: logoPath = $mode === 'dark' ? logoWhite : logoBlack;
</script>

<nav class="px-6 py-2">
	<ul class="flex items-center justify-between gap-4">
		<a href="/">
			<img class="aspect-square h-24" alt="SSM Corp logo" src={logoPath} />
		</a>
		<div class="flex gap-4">
			<SideMenu />
		</div>
	</ul>
</nav>
