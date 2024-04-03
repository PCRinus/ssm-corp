<script>
	import Navbar from './navbar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<Navbar />

<slot />
