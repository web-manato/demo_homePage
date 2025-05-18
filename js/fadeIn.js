gsap.set('.js-fadeIn', {
    autoAlpha: 0,
    y: 10,
});

ScrollTrigger.batch('.js-fadeIn', {
    onEnter: batch => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        overwrite: true,
    }),
    start: 'top 80%',
    toggleActions: "play none restart none",
});