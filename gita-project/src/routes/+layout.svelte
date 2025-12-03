<script>
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&family=Noto+Sans+Devanagari:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family:Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
