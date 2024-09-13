import { registerApplication } from "single-spa";

const mfes = [
    {
        name: 'mfe1',
        moduleName: '@mfe/mfe1',
        activeWhen: (l: Location) => true,
    }
];

export function registerMifes() {
    mfes.forEach(m => {
        registerApplication(m.name, () => import(/* @vite-ignore */ m.moduleName), m.activeWhen);
    });
}
