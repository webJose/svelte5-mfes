<script lang="ts">
  import { preferences } from '@mfe/utils';
  import consoleSshot from './assets/console-screenshot.png';

  // Logging the value property reveals it is a proxy, so one imagines it is reactive.
  console.log('Preferences value:', preferences.value);
  $inspect(preferences.value).with((t, v) => console.log('MFE1 Preferences:', t, v));
</script>

<div class="mfe">
  <h3>This is MFE1</h3>
  <p>
    The object shown below is the stringified <code>preferences.value</code> property, where <code>preferences</code> 
    comes from the root micro-frontend.
  </p>
  <code>
    <pre>{JSON.stringify(preferences.value)}</pre>
  </code>
  <p>
    Look at the console.  While there's an entry that reads <span class="quote">MFE1 Preferences: init</span>, changing 
    the value of the slider above doesn't trigger update entries.
  </p>
  <figure>
    <img src={consoleSshot} alt="Console Screenshot">
    <figcaption>How the console looks like after moving the opacity slider provided by the root project.</figcaption>
  </figure>
</div>

<style>
  .mfe {
    background-color: rgb(248, 250, 250);
    border: rgb(48, 152, 152) 2px solid;
    border-radius: 0.5em;
    padding: 1em;
    margin-top: 2em;
  }
  code {
    font-size: larger;
  }
  span.quote {
    font-family: monospace;
    font-size: larger;
    font-weight: bolder;
  }
  img {
    max-width: 50vw;
  }
  figcaption {
    font-style: italic;
  }
</style>