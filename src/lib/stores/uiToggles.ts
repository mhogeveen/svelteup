import {writable} from 'svelte/store';

const createActive = (defaultValue: boolean = true) => {
  const { subscribe, update } = writable(defaultValue);

  return {
    subscribe,
    toggle: () => update(value => !value),
  }
}

export const spaceActive = createActive();

export const favoritesActive = createActive(false);

export const darkMode = createActive();