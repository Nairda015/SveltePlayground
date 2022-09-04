import {writable} from 'svelte/store';

export const players = writable(
    [
        {
            name: "Adrian",
            points: 54
        },
        {
            name: "Natalia",
            points: 54
        }]
);