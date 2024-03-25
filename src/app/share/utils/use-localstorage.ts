import { DestroyRef, effect, inject, signal } from '@angular/core';

export function parseValue(serializedVal: string) {
    let value: any = null;
    try {
        value = JSON.parse(serializedVal);
    } catch {
        value = serializedVal;
    }

    return value;
}

export function useLocalStorage(key: string) {
    const value = signal('');

    const serializedVal = localStorage.getItem(key);
    if (serializedVal !== null) {
        value.set(parseValue(serializedVal));
    }

    function handler(e: StorageEvent) {
        if (e.key === key) {
            const newValue = e.newValue ? parseValue(e.newValue) : null;
            value.set(newValue);
        }
    }

    window.addEventListener('storage', handler, true);

    effect(() => {
        localStorage.setItem(key, JSON.stringify(value()));
    });

    inject(DestroyRef).onDestroy(() =>
        window.removeEventListener('storage', handler)
    );

    return { value };
}
