var typed = new Typed('#element', {
    strings: ['Software Engineer', 'Designer', 'Web Developer.'],
    typeSpeed: 70,
});
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });
});

