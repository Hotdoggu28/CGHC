
// Detect when the About The Campus and Mission and Vision sections are in view
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about-campus');
    const missionSection = document.getElementById('mission-vision');
    const sectionTop1 = aboutSection.getBoundingClientRect().top;
    const sectionTop2 = missionSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger when the top of the section is within the viewport (80% of the window height)
    if (sectionTop1 <= windowHeight * 0.6) {
        aboutSection.classList.add('visible'); // Add the visible class when About The Campus section is in view
    }

    if (sectionTop2 <= windowHeight * 0.6) {
        missionSection.classList.add('visible'); // Add the visible class when Mission and Vision section is in view
    }
});
