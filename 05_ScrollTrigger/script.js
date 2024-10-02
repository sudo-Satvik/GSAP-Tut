gsap.from("#page1 .box", {
    scale: 0.5,
    duration: 1,
    delay: 0.8,
    opacity: 0,
    y: 50
})

gsap.from("#page2 .box", {
    scale: 0.5,
    duration: 1,
    delay: 0.8,
    opacity: 0,
    x: 500,
    // scrollTrigger: "#page2 #box"
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        scrub: true,
        start: "top 60%"
    }
})

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

