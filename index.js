function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageLoad() {

    var tl = gsap.timeline();
    tl.to('.transitionOnce', { duration: .8, clipPath: "circle(150% at 0 0)", clipPath: "circle(150% at 0 0)", transformOrigin: "top left" });
    tl.to('.transitionOnce', { duration: .5, clipPath: "circle(0% at 120% 120%)", transformOrigin: "bottom right", delay: 0.4 });
}
function pageTransition() {

    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.2 });
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: 0.1 });
}

// Function to animate the content of each page
function contentAnimation() {

    var tl = gsap.timeline();
    tl.from('.name', { duration: 0.5, translateY: 50, opacity: 0 });
    tl.to('.resume', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });

}

barba.init({
    sync: true,
    transitions: [{
        async beforeOnce(data) {
            const done = this.async();

            pageLoad();
            await delay(1000);
            done();

        },
        async leave(data) {

            const done = this.async();

            pageTransition();
            await delay(1000);
            done();

        },

        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        }

    }]

}
);