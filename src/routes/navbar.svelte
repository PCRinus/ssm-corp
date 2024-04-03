<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import SideMenu from './side-menu.svelte';
</script>

<nav class="px-6 py-2">
	<ul class="flex items-center justify-between gap-4">
		<a href="/">
			<img class="aspect-square h-24" alt="The project logo" src={logo} />
		</a>
		<div class="flex gap-4">
			<SideMenu />
		</div>
	</ul>
</nav>
