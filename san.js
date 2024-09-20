// Smooth scrolling to sections
document.querySelector('.contact-me').addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector('.right-menu'); // Adjust this selector to your target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Toggle additional information
const aboutSections = document.querySelectorAll('.about div');
aboutSections.forEach(section => {
    section.addEventListener('click', () => {
        const detail = section.querySelector('.div'); // Adjust if your structure is different
        if (detail) {
            detail.style.display = detail.style.display === 'none' || !detail.style.display ? 'block' : 'none';
        }
    });
});

// Simulate download CV
document.querySelector('.download-cv').addEventListener('click', function () {
    const cvUrl = 'path/to/your/cv.pdf'; // Change to the actual path of your CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Dr_V_Yokesh.pdf'; // Change the name as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Optionally, hide detail sections on load
document.addEventListener('DOMContentLoaded', () => {
    aboutSections.forEach(section => {
        const detail = section.querySelector('.div');
        if (detail) {
            detail.style.display = 'none';
        }
    });
});
