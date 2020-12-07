//gsap.to(".header-img", {
  //  scrollTrigger: ".header-img", // start the animation when ".box" enters the viewport (once)

  //});

  gsap.utils.toArray("section").forEach((section, i) => {

    if(section.querySelector(".bg"))
    {
    section.bg = section.querySelector(".bg"); 
  
    // Give the backgrounds some random images
    section.bg.style.backgroundImage = `url('Assets/images/waves.jpg')`;
  
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
  