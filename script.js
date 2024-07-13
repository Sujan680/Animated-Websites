
// for moving the round object in the page 
const crsr = document.querySelector("#cursor");
const blr = document.querySelector("#cursor-blur");
document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
     blr.style.left = dets.x - 150 +"px"
    blr.style.top = dets.y - 150 +"px"
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "transparent"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger : {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-using, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        markers: true,
        start:"top 60%",
        end: "top 58%",
        scrub: 3
    }

})