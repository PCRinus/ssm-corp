<script>
	import Navbar from './navbar.svelte';
	import '../app.css';
	import { ModeWatcher, mode } from 'mode-watcher';
	import Footer from './footer.svelte';
	import { Toaster } from 'svelte-sonner';
  import { page } from "$app/stores";

	const currentTheme = $mode;
</script>

<svelte:head>
  <title>{ $page.data.pageMeta.title }</title>
  <meta name="description" content="{ $page.data.pageMeta.description }">
</svelte:head>

<ModeWatcher />

<Navbar />

<main class="mb-4 flex flex-[1_0_auto] flex-col px-6">
	<slot />
	<Toaster theme={currentTheme} />
</main>

<Footer />
