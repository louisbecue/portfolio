document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector('.text-container p');
    const text = introText.textContent;
    introText.textContent = '';
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting && index < text.length) {
            introText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && index > 1) {
            introText.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, 50);
        } else if (index === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        } else if (index === 1) {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});