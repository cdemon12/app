import { writable } from 'svelte/store';

export const step = writable(0);

export const type = writable('nominal');

export const topHeight = writable(0);