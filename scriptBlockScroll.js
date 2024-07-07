let currentPage = 1;
const totalPages = 6;
let isThrottled = false;

function throttleScroll(func, limit = 1000) {
    return (...args) => {
        if (!isThrottled) {
            func.apply(this, args);
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, limit);
        }
    };
}

function scrollPage(event) {
    if (event.deltaY > 0) {
        // Scroll Down
        if (currentPage < totalPages) {
            currentPage++;
        }
    } else {
        // Scroll Up
        if (currentPage > 1) {
            currentPage--;
        }
    }
    document.querySelectorAll('.page').forEach((page, index) => {
        page.style.transform = `translateY(-${(currentPage - 1) * 100}vh)`;
    });
}

window.addEventListener('wheel', throttleScroll(scrollPage));
