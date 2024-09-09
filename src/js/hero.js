import { gsap } from "gsap";

const mediaQuery = window.matchMedia('(min-width: 768px)');
if (mediaQuery.matches) {
    gsap.fromTo("h1", { x: -500, scale: 0.05 }, { rotation: 360, x: 0, duration: 1, scale: 1 });
}