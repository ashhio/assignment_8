
  gsap.utils.toArray("section").forEach((section, i) => {
    let background; 
  if(section.querySelector(".bg_2"))
    {
      background = section.querySelector(".bg_2"); 
      background.style.backgroundImage = `url('Assets/images/library.jpg')`;
    }

    // Give the backgrounds some random images
    
    background.style.opacity = 0;
    window.onload = function(){(gsap.to(background, {duration:5, opacity:100, ease:Power1.easeInOut}))};
    // Do the parallax effect on each section
    if (i) {
      background.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
  
      gsap.to(sbackground, {
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
      background.style.backgroundPosition = "50% 0px"; 
  
      gsap.to(background, {
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
    
  });
  


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

  
