<script lang="ts">
  import { start } from 'single-spa';
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import preferences from './lib/preferences.svelte';
  import { registerMifes } from './registerMifes';
  import viteLogo from '/vite.svg';

  onMount(() => {
    registerMifes();
    start();
  });

  $inspect(preferences.value).with((t, v) => console.log('Root Preferences:', t, v));
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <form action="">
    <label for="pref_opacity">Opacity:</label>
    <input id="pref_opacity" type="range" min="0" max="1" step="0.05" bind:value={preferences.value.glass.opacity}>
  </form>
  <div id="single-spa-application:mfe1"></div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
