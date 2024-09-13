# svelte5-mfes

To run this demo:

1. Open a new console.
2. Move to the `mfe1/` folder: `cd ./mfe1`
3. Install packages:  `npm ci`
4. Run the development server:  `npm run dev`
5. Open a new console.
6. Move to the `root/` folder: `cd ./root`
7. Install packages:  `npm ci`
8. Run the development server:  `npm run dev`
9. Open the root's webpage: `o` + ENTER

To see the reactivity issue, change the slider's position.  This will change the `opacity` property inside the 
`preferences` class instance.  The slider and the `preferences` class belong to the root micro-frontend.  This will 
trigger various messages in the console that should make the reactivity problem clear:  Reactivity is lost in the 
consuming `mfe1` micro-frontend.
