<script>
	import Navbar from './navbar.svelte';
	import '../app.css';
	import { ModeWatcher, mode } from 'mode-watcher';
	import Footer from './footer.svelte';
	import { Toaster } from 'svelte-sonner';

	const currentTheme = $mode;
</script>

<ModeWatcher />

<Navbar />

<section class="mb-4 flex flex-[1_0_auto] flex-col px-6">
	<slot />
	<Toaster theme={currentTheme} />
</section>

<Footer />
