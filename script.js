// scroll code from --->  https://codepen.io/GreenSock/pen/ExPdqKy

function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()



function cursorEffect(){

    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")


//mouse move using gsap
page1Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
// ----------------

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0  
    })
})

}
cursorEffect()



function blackcursorEffect(){

    var page4Content = document.querySelector("#page4-content")
    var cursor = document.querySelector("#black-cursor")


//mouse move using gsap
page4Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
// ----------------

page4Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:0.8,
        opacity:1
    })
})

page4Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0  
    })
})

}
blackcursorEffect()




function page2Animation(){


    gsap.from("#page2-top h3",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })



    gsap.from("#page2-top h4",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })





    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 75%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page2Animation()



function page3Animation(){
    gsap.from("#page3-top h2",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })

}
page3Animation()


function page3_1Animation(){
    gsap.from("#page3_1-top h3",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3_1",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })


    gsap.from(".element h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3_1",
            scroller:"#main",
            start:"top 75%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page3_1Animation()


function page4_1Animation(){
    gsap.from("#page4_1-top h3",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4_1",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })


    gsap.from(".elementss h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4_1",
            scroller:"#main",
            start:"top 75%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page4_1Animation()



function SliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
SliderAnimation()



function page6Animation(){
    gsap.from("#page6 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page6Animation()



function footer(){
    gsap.from("#footer h3,button,h6",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            // start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
footer()




// loader page animation
var tl = gsap.timeline()

    tl.from("#loader h3",{
        x:40,
        opacity:0,
        duration:2,
        stagger:0.1
    })

    tl.to("#loader h3",{
        opacity:0,
        x:-10,
        duration:1,
        stagger:0.1
    })

    tl.to("#loader",{
        opacity:0
    })
    
    tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5
    })

    tl.to("#loader",{
        display:"none"
    })
