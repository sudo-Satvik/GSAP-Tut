var tl = gsap.timeline();
tl.from('.logo', {
    y: -30,
    duration: 1,
    opacity: 0,
})
tl.from("li", {
    y: -10,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})
tl.from("p", {
    y: 30,
    duration: 1,
    opacity: 0,
    stagger: 1
})