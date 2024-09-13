import { singleSpaSvelte } from "@wjfe/single-spa-svelte";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";
import App from "./App.svelte";

const lc = singleSpaSvelte(App);
const cssLc = cssLifecycleFactory('spa');

export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];
export const update = lc.update;
