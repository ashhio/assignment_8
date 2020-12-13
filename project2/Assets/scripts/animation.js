/*
creates parallax scrolling background using Greensock and ScrollTrigger
referenced and modified from ScrollTrigger documentation
*/
gsap.utils.toArray("section").forEach((section, i) => {
  let background;
    //apply image to the background of a section element
  if (section.querySelector(".bg_3")) {
    background = section.querySelector(".bg_3");
    background.style.backgroundImage = `url('Assets/images/booksncomputer.jpg')`;
  }

   //make the image fade in once loaded
  background.style.opacity = 0;
  window.onload = function () { (gsap.to(background, { duration: 5, opacity: 100, ease: Power1.easeInOut })) };
  // Do the parallax effect on each section
  if (i) {
    background.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(background, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  }
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

/*referenced & modified from https://css-tricks.com/writing-smarter-animation-code/ 
float up text and increase opacity as user scrolls
*/
if (document.querySelector(".panel14")) {
  function createPanel(panel) {
    var tl = new TimelineLite();
    tl.from(panel + " .text", { scrollTrigger: { trigger: panel + " .text", end: "top center", scrub: 1 }, y: 50, opacity: 0, ease: Power4.easeInOut })
      .staggerFrom(panel + " .text", 0.9, { y: 50, opacity: 0, ease: Power4.easeInOut }, 0.06);

    return tl; //return the timeline
  }
  var master = new TimelineMax();
  master.add(createPanel(".panel14"))
    .add(createPanel(".panel15"))
    .add(createPanel(".panel16"))
    .add(createPanel(".panel17"));
}