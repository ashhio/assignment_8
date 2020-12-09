//gsap.to(".header-img", {
  //  scrollTrigger: ".header-img", // start the animation when ".box" enters the viewport (once)

  //});

  gsap.utils.toArray("section").forEach((section, i) => {

    if(section.querySelector(".bg"))
    {
    section.bg = section.querySelector(".bg"); 
  
    // Give the backgrounds some random images
    section.bg.style.backgroundImage = `url('Assets/images/waves.jpg')`;
    section.bg.style.opacity = 0;
    window.onload = function(){(gsap.to(section.bg, {duration:5, opacity:100, ease:Power1.easeInOut}))};
    // Do the parallax effect on each section
    if (i) {
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
  
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true
        }
      });
    } 
    
    // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
    else {
      section.bg.style.backgroundPosition = "50% 0px"; 
  
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: "bottom top",
          scrub: true
        }
      });
    }
    }
  });

  gsap.utils.toArray("section").forEach((section, i) => {
    if(section.querySelector(".bg_2"))
    {
    section.bg_2 = section.querySelector(".bg_2"); 
  
    // Give the backgrounds some random images
    section.bg_2.style.backgroundImage = `url('Assets/images/library.jpg')`;
  
    // Do the parallax effect on each section
    if (i) {
      section.bg_2.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
  
      gsap.to(section.bg_2, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true
        }
      });
    } 
    
    // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
    else {
      section.bg_2.style.backgroundPosition = "50% 0px"; 
  
      gsap.to(section.bg_2, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: "bottom top",
          scrub: true
        }
      });
    }
  }
  });

  /*
  //timeline time
  if(document.querySelector(".fadeUp-scroll"))
  {
  gsap.from(".fadeUp-scroll", {
    scrollTrigger: ".fadeUp-scroll",
    duration: 0.8, 
    y: 60,
    opacity: 0

  });
}

if(document.querySelector(".fadeUp-scroll2"))
{
gsap.from(".fadeUp-scroll2", {
  scrollTrigger: ".fadeUp-scroll2",
  duration: 0.8, 
  y: 60,
  opacity: 0

});
}
*/


/*referenced & modified from https://css-tricks.com/writing-smarter-animation-code/ */
if(document.querySelector(".panel1")){


function createPanel(panel) {
  var tl = new TimelineLite();
  tl.from(panel + " .text", {scrollTrigger: {trigger: panel + " .text", end:"top center", scrub: 1}, y: 50, opacity:0, ease:Power4.easeInOut})
    .staggerFrom(panel + " .text", 0.9, {y:50, opacity:0, ease:Power4.easeInOut}, 0.06);

  return tl; //very important that the timeline gets returned
}

var master = new TimelineMax();
master.add(createPanel(".panel1"))
  .add(createPanel(".panel2"))
  .add(createPanel(".panel3"))
  .add(createPanel(".panel4"))
  .add(createPanel(".panel5"))
  .add(createPanel(".panel6"))
  .add(createPanel(".panel7"))
  .add(createPanel(".panel8"))
  .add(createPanel(".panel9"));
}


if(document.querySelector(".panel10")){


  function createPanel(panel) {
    var tl = new TimelineLite();
    tl.from(panel + " .text", {scrollTrigger: {trigger: panel + " .text", end:"top center", scrub: 1}, y: 50, opacity:0, ease:Power4.easeInOut})
      .staggerFrom(panel + " .text", 0.9, {y:50, opacity:0, ease:Power4.easeInOut}, 0.06);
  
    return tl; //very important that the timeline gets returned
  }
  
  var master = new TimelineMax();
  master.add(createPanel(".panel10"))
  .add(createPanel(".panel11"));
  }
  

/*referenced from https://greensock.com/docs/v3/Plugins/ScrollTrigger*/
/*
let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".text",
    pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    }
  }
});

// add animations and labels to the timeline
tl.addLabel("start")
.from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
.addLabel("color")
.from(".box", {backgroundColor: "#28a92b"})
.addLabel("spin")
.to(".box", {rotation: 360})
.addLabel("end");
*/