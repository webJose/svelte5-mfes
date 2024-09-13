export const defaultGlassOptions = {
    opacity: 0.5,
    blur: "3px",
    saturation: "100%"
};

export const defaultUiPreferences = {
    glass: {
        ...defaultGlassOptions,
        enabled: true
    },
    version: 1
};

export class Preferences {
    #key;
    value = $state<typeof defaultUiPreferences>() as typeof defaultUiPreferences;

    constructor(key: string) {
        this.#key = key;
        this.value = this.#readFromStorage();
        $effect.root(() => {
            $effect(() => {
                console.debug("UiPreferences's value effect! Saving change to local storage.");
                if (!this.#validateValue(this.value)) {
                    throw new Error('Invalid value in UI preference.');
                }
                this.#saveToStorage(this.value);
            });
        });
    }

    #storageHandler(ev: StorageEvent) {
        console.log('Storage event: %o', ev);
        if (ev.key === this.#key) {
            this.value = this.#normalizeValue(ev.newValue);
        }
    }

    #normalizeValue(rawValue: string | typeof defaultUiPreferences | undefined | null) {
        if (!rawValue) {
            return structuredClone(defaultUiPreferences);
        }
        if (typeof rawValue === 'string') {
            rawValue = JSON.parse(rawValue) as typeof defaultUiPreferences;
        }
        if (typeof rawValue.glass.blur === 'number') {
            rawValue.glass.blur = `${isNaN(rawValue.glass.blur) ? 7 : rawValue.glass.blur}px`;
        }
        else if (typeof rawValue.glass.blur !== 'string') {
            rawValue.glass.blur = '7px';
        }
        if (typeof rawValue.glass.saturation === 'number') {
            rawValue.glass.saturation = `${isNaN(rawValue.glass.saturation) ? 100 : rawValue.glass.saturation}%`;
        }
        else if (typeof rawValue.glass.saturation !== 'string') {
            rawValue.glass.saturation = '100%';
        }
        return rawValue;
    }
    #readFromStorage() {
        // const value = window.localStorage.getItem(this.#key);
        const value = undefined;
        return this.#normalizeValue(value);
    }

    #saveToStorage(value: typeof defaultUiPreferences) {
        console.log('Save to storage: %s', JSON.stringify(value));
        // window.localStorage.setItem(this.#key, JSON.stringify(value));
    }

    #validateValue(value: typeof defaultUiPreferences) {
        // 2Do: Validate fields.
        return true;
    }
}

export default new Preferences('xx');
