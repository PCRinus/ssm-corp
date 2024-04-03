<script>
	import Navbar from './navbar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from './footer.svelte';
</script>

<ModeWatcher />

<Navbar />

<section class="flex flex-col gap-2 px-6">
	<slot />
</section>

<Footer/>
