const bounceElement = document.querySelector('.bounce-element');

function handleScrollAnimations() {
    if (isInViewport(bounceElement) && !bounceElement.classList.contains('bounce')) {
        bounceElement.classList.add('bounce');
    }
}

window.addEventListener('scroll', handleScrollAnimations);
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

const textElements = document.querySelectorAll('.slide-in-text');

function handleTextAnimations() {
    textElements.forEach((textElement) => {
        if (isInViewport(textElement) && !textElement.classList.contains('show-text')) {
            textElement.classList.add('show-text');
        }
    });
}

window.addEventListener('scroll', handleTextAnimations);
document.addEventListener("DOMContentLoaded", handleTextAnimations);
