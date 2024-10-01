// gsap.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to("#box3", {
//     x: 1500,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     scale: 0.5,
//     duration: 1.5,
//     delay: 4
// })

// to avoid above problem of delay calculation, we use timeline

let timeline = gsap.timeline()

timeline.to("#box1", {
    x: 1500,
    rotate: 360,
    duration: 1.5,
})
timeline.to("#box2", {
    x: 1500,
    backgroundColor: "yellow",
    duration: 1.5,
})

timeline.to("#box3", {
    x: 1500,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.5,
    duration: 1.5,    
}) 