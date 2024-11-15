// turn pages when click for turning... 
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
                console.log("this is testing..." + index)
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// ==================================================================================

// contact me button when clicked...
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');    

contactMeBtn.onclick = (event) => {
    event.preventDefault();
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
        console.log('Turn class added to page:', index);
    });
};

// ==================================================================================

let totalPages = pages.length; 
let pageNumber = 0;

// Function to handle reverse index logic
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// ==================================================================================

const backProfileBtn = document.querySelector('.back-profile');

// Event handler for the backProfile button
backProfileBtn.onclick = async (event) => {
    event.preventDefault(); 

    for (let index = 0; index < pages.length; index++) {
        await new Promise((resolve) => setTimeout(resolve, (index + 1) * 200 + 100)); 
        
        reverseIndex();  // Apply any reverse indexing logic
        pages[pageNumber].classList.remove('turn'); 
        
        // Set zIndex with a delay, if required
        setTimeout(() => {
            pages[pageNumber].style.zIndex = 10 + index; 
        }, 500); 
    }
};

// ==================================================================================

const coverRight = document.querySelector('.cover.cover-right');

// Initial animation for coverRight
setTimeout(() => {
    coverRight.classList.add('turn');
    setTimeout(() => {
        coverRight.style.zIndex = -1; // Adjust zIndex after turning
    }, 700);  // Timing adjusted to match the end of the turn animation
}, 2100);

// Sequential animation for each page
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();  // Apply reverse indexing logic
        pages[pageNumber].classList.remove('turn'); 

        // Update zIndex with minimal delay after turning
        pages[pageNumber].style.zIndex = 10 + index;
        
    }, (index + 1) * 200 + 2100); // Base delay adjusted for timing consistency
});

