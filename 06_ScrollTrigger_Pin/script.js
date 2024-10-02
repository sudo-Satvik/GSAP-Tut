gsap.from("#page3 h1", {
    opacity:100,
    duration: 1,
    x: 50,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})

gsap.from("#page3 h2", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        start: "top 60%",
        markers: true
    }
})

// jab bhi pin use krenge, hum scrollTrigger object me parent ko trigger krenge

gsap.to("#page4 p", {
    transform: 'translateX(-100%)',
    // duration: 3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        markers: true,
        scrub: 3,
        pin: true,
        start: "top 0%"
    }
})