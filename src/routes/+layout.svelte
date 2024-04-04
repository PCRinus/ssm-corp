<script>
	import Navbar from './navbar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from './footer.svelte';
</script>

<ModeWatcher />

<Navbar />

<section class="flex flex-col mb-4 px-6 flex-[1_0_auto]">
	<slot />
</section>

<Footer/>
