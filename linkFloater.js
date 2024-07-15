document.addEventListener("DOMContentLoaded", function() {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Select all linkR elements inside detailResearch
  const linkElements = document.querySelectorAll('.detailData .link');

  // Create a timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.detailData',
      start: 'top 80%', // Trigger the animation when the top of .detailResearch is 80% from the top of the viewport
      end: 'bottom 20%',
      toggleActions: 'play none none none', // Play the animation on enter
    }
  });

  // Add each linkR element to the timeline
  linkElements.forEach((link, index) => {
    timeline.fromTo(link, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.1 // Stagger the animation with a delay for each linkR element
    });
  });
});
