import { writable } from "svelte/store";

//variables
export const currentLat = writable(1.29027);
export const currentLong = writable(103.851959);
export const homeLat = writable();
export const homeLong = writable();
export const searchString = writable("");
export const selectedIndex = writable(0);
export const geoPermissionGranted = writable(false);

//ui
export const showModal = writable(false);
export const showCarousel = writable(false);
export const carouselPics = writable([]);
export const carouselName = writable("");
export const showMenu = writable(false);
