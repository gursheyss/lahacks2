<script>
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<ModeWatcher />
<Toaster richColors position="top-right" />
<slot></slot>
