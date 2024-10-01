// gsap.to()        // Initial to final
// gsap.from()      // Final to Initial

// What we want to animate as a key-value pair

gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1, 
    rotate: 360, 
    backgroundColor: 'aqua',
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})  

gsap.from("#box2", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: 'green',
    borderRadius: "50%",
    repeat: -1,         // infinite repeatation
})